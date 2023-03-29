import {
  CLEAR_WHOLE_STATE,
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGIN_IN_PROGRESS,
  LOGOUT,
} from '../Constants/actionTypes'

const signinReducer = (signin = { authData: null }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...signin,
        loading: false,
        authData: action.payload,
      }

    case LOGIN_IN_PROGRESS:
      return {
        ...signin,
        loading: true,
      }

    case LOGIN_COMPLETED:
      return {
        ...signin,
        loading: false,
      }

    case LOGIN_ERROR:
      return {
        ...signin,
        error: action.payload,
        loading: false,
      }

    case LOGOUT:
      window.localStorage.clear()
      return { ...signin, authData: null, loading: false, error: null }

    default:
      return signin
  }
}

export default signinReducer
