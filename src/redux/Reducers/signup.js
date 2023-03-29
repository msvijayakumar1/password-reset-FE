import {
  SIGNUP,
  SIGNUP_COMPLETED,
  SIGNUP_ERROR,
  SIGNUP_IN_PROGRESS,
} from '../Constants/actionTypes'

const signupReducer = (signup = { authData: null }, action) => {
  switch (action.type) {
    case SIGNUP:
      return {
        ...signup,
        loading: false,
        authData: action.payload,
      }

    case SIGNUP_ERROR:
      return {
        ...signup,
        error: action.payload,
        loading: false,
      }

    case SIGNUP_IN_PROGRESS:
      return {
        ...signup,
        loading: true,
      }

    case SIGNUP_COMPLETED:
      return {
        ...signup,
        loading: false,
      }

    default:
      return signup
  }
}

export default signupReducer
