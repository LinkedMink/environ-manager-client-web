import { connect } from "react-redux";

import LoginScreen from "../Components/Screens/LoginScreen";
import { saveSession } from "../Actions/Account";
import { alertError } from "../Actions/Alert";

function mapDispatchToProps(dispatch) {
  return {
    login: credentials => {
      let options = {
        method: 'POST',
        headers: { 
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ Email: credentials.email, Password: credentials.password })
      };

      return fetch(`${credentials.serverBaseUrl}/authentication`, options)
        .then(response => {
          if (!response.ok) {
            dispatch(alertError(`${response.status} : ${response.statusText}`));
            return Promise.resolve(null);
          }

          return response.json();
        })
        .then(json => {
          if (json && json.code === 0) {
            dispatch(saveSession(
              credentials.serverBaseUrl, 
              credentials.email, 
              json.data.UserId, 
              json.data.Token, 
              json.data.Roles));
          }
        })
        .catch(
          error => dispatch(alertError(error.message))
        );
    }
  };
}

const LoginContainer = connect(null, mapDispatchToProps)(LoginScreen);

export default LoginContainer