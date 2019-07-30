import { connect } from "react-redux";

import RequestHelper from "../Helpers/RequestHelper";
import LoginScreen from "../Components/Screens/LoginScreen";
import { saveSession } from "../Actions/Account";

function mapStateToProps (state) {
  return {
    isLoggedIn: state.account.token ? true : false
  };
}

function mapDispatchToProps(dispatch) {
  return {
    login: credentials => {
      let requestData = { 
        Email: credentials.email, 
        Password: credentials.password 
      };

      let responseHandler = data => {
        return saveSession(
          credentials.serverBaseUrl, 
          credentials.email, 
          data.userId, 
          data.token, 
          data.roles);
      }

      return RequestHelper.getJsonResponse(
        dispatch, 
        'authentication', 
        responseHandler, 
        true,
        requestData, 
        credentials.serverBaseUrl);
    }
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

export default LoginContainer