import {
  CLEAR_WHOLE_STATE,
  EMAIL_SEND,
  EMAIL_SEND_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  VERIFY_CODE,
  VERIFY_CODE_ERROR,
} from '../Constants/actionTypes'

export const resetPasswordReducer = (
  resetpwd = { email: null, code: null, error: null, userData: null },
  action,
) => {
  switch (action.type) {
    case EMAIL_SEND:
      return { ...resetpwd, email: action.payload }

    case EMAIL_SEND_ERROR:
      return { ...resetpwd, error: action.payload }

    case VERIFY_CODE:
      return { ...resetpwd, code: action.payload }

    case VERIFY_CODE_ERROR:
      return { ...resetpwd, error: action.payload }

    case RESET_PASSWORD:
      return { ...resetpwd, userData: action.payload }

    case RESET_PASSWORD_ERROR:
      return { ...resetpwd, error: action.payload }

    case 'CLEAR_ERROR':
      return { ...resetpwd, error: action.payload }

    case CLEAR_WHOLE_STATE:
      return {
        ...resetpwd,
        email: null,
        code: null,
        error: null,
      }

    default:
      return resetpwd
  }
}
