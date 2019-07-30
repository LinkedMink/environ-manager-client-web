import store from "../Store";
import { alertError } from "../Actions/Alert";
import { loadingStart, loadingEnd } from "../Actions/Loading";

class RequestHelper {
  static getHeaders(isAuthorized = true) {
    let headers = { 
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };
    
    if (isAuthorized) {
      const state = store.getState();
      if (state.account.token) {
        headers['Authorization'] = `Bearer ${state.account.token}`
      }
    }

    return headers;
  }

  static getGetOptions(isAuthorized = true) {
    let headers = RequestHelper.getHeaders(isAuthorized);

    return {
      method: 'GET',
      headers: headers,
    };
  }

  static getPostOptions(requestData = {}, isAuthorized = true) {
    let headers = RequestHelper.getHeaders(isAuthorized);

    return {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(requestData)
    };
  }

  static getServerUrl(pathQuery, serverBaseUrl = null) {
    if (!serverBaseUrl) {
      const state = store.getState();
      if (state.account.serverBaseUrl) {
        serverBaseUrl = state.account.serverBaseUrl;
      }
    }

    return `${serverBaseUrl}/${pathQuery}`;
  }

  static getJsonResponse(dispatch, pathQuery, requestSuccessFunc, isPost = false, requestData = {}, serverBaseUrl = null, isAuthorized = true) {
    let url = RequestHelper.getServerUrl(pathQuery, serverBaseUrl);

    let options = null;
    if (isPost) {
      options = RequestHelper.getPostOptions(requestData, isAuthorized);
    } else {
      options = RequestHelper.getGetOptions(requestData, isAuthorized);
    }

    dispatch(loadingStart())

    return fetch(url, options)
      .then(response => RequestHelper.handleRawResponse(dispatch, response))
      .then(json => RequestHelper.handleServiceResponse(dispatch, json, requestSuccessFunc))
      .catch(error => RequestHelper.handleGenericCatch(dispatch, error));
  }

  static handleRawResponse(dispatch, response) {
    if (!response.ok) {
      dispatch(alertError(`${response.status} : ${response.statusText}`));
      return Promise.resolve(null);
    }

    return response.json();
  }

  static handleServiceResponse(dispatch, json, requestSuccessFunc) {
    if (json && json.code === 0) {
      dispatch(requestSuccessFunc(json.data));
    } else if (json && json.code) {
      dispatch(alertError(`${json.code} : ${json.description} : ${json.errors}`));
    } else if (json) {
      dispatch(requestSuccessFunc(json));
    }

    dispatch(loadingEnd())
  }

  static handleGenericCatch(dispatch, error) {
    dispatch(loadingEnd());
    dispatch(alertError(error.message));
  }
}

export default RequestHelper;