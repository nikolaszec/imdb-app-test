import { AuthActionTypes } from "./auth.types";
const INITIAL_STATE = {
  sessionId: null,
  isAuth: false,
  loading: false,
  error: "",
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AuthActionTypes.LOGIN_START:
      return {
        ...state,
        loading: true,
      };
    case AuthActionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        sessionId: action.payload,
        loading: false,
        isAuth: true,
      };
    case AuthActionTypes.LOGIN_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case AuthActionTypes.LOGOUT_START:
      return {
        ...state,
        loading: true,
      };
    case AuthActionTypes.LOGOUT_SUCCESS:
      return {
        ...state,
        sessionId: null,
        loading: false,
        isAuth: false,
      };
    case AuthActionTypes.LOGOUT_FAILED:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

export default authReducer;
