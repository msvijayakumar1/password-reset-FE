import { combineReducers } from 'redux'

import { resetPasswordReducer } from './resetPassword'
import signinReducer from './signin'
import signupReducer from './signup'

export default combineReducers({
  signin: signinReducer,
  signup: signupReducer,
  emailSend: resetPasswordReducer,
})
