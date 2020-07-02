import { AuthActionTypes } from "./auth.types";
import axios from "../../../config/axios";

//LOGIN

export const loginStart = () => ({
  type: AuthActionTypes.LOGIN_START,
});

export const loginFailed = (errorMessage) => ({
  type: AuthActionTypes.LOGIN_FAILED,
  payload: errorMessage,
});

export const loginSuccess = (sessionId) => ({
  type: AuthActionTypes.LOGIN_SUCCESS,
  payload: sessionId,
});

//1.getting token from api
//2.using that token for login with user credentials wich returns verfied token
//3.using that verified token for creating user session

export const loginAsync = (userCredentials) => {
  return async (dispatch) => {
    dispatch(loginStart());
    try {
      const requestTokenResponse = await axios.get(`/authentication/token/new`);
      if (requestTokenResponse.data.success) {
        const loginWithRequestedToken = await axios.post(
          "/authentication/token/validate_with_login",
          {
            ...userCredentials,
            request_token: requestTokenResponse.data.request_token,
          }
        );
        if (loginWithRequestedToken.data.success) {
          const createSession = await axios.post(
            `/authentication/session/new`,
            {
              request_token: loginWithRequestedToken.data.request_token,
            }
          );

          if (createSession.data.success) {
            dispatch(loginSuccess(createSession.data.session_id));
            return true;
          }
        }
      }
    } catch (error) {
      dispatch(loginFailed(error.response.data.status_message));
    }
  };
};

//LOGOUT

export const logoutStart = () => ({
  type: AuthActionTypes.LOGOUT_START,
});

export const logoutFailed = (errorMessage) => ({
  type: AuthActionTypes.LOGOUT_FAILED,
  payload: errorMessage,
});

export const logoutSuccess = () => ({
  type: AuthActionTypes.LOGOUT_SUCCESS,
});

export const logoutAsync = () => {
  return async (dispatch, getState) => {
    dispatch(logoutStart());
    try {
      const session_id = getState().auth.sessionId;
      const logoutResponse = await axios.delete("/authentication/session", {
        params: {
          session_id,
        },
      });
      if (logoutResponse.data.success) {
        dispatch(logoutSuccess());
      }
    } catch (error) {
      dispatch(logoutFailed(error.response.data.status_message));
    }
  };
};
