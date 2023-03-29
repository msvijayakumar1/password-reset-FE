import * as api from '../../api'
import {
  EMAIL_SEND,
  EMAIL_SEND_ERROR,
  RESET_PASSWORD,
  RESET_PASSWORD_ERROR,
  VERIFY_CODE,
  VERIFY_CODE_ERROR,
} from '../Constants/actionTypes'

export const emailSend = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.sendEmail(formData)

    await dispatch({ type: EMAIL_SEND, payload: data })
    navigate('/code')
  } catch (error) {
    console.log(error)
    await dispatch({
      type: EMAIL_SEND_ERROR,
      payload: error.response.data.message,
    })
  }
}

export const verifyCode = (formData, navigate) => async (dispatch) => {
  try {
    const { data } = await api.verifyCode(formData)
    dispatch({ type: VERIFY_CODE, payload: data })
    navigate('/reset-password')
  } catch (error) {
    console.log(error)
    await dispatch({
      type: VERIFY_CODE_ERROR,
      payload: error.response.data.message,
    })
  }
}

export const resetPassword = (formData) => async (dispatch) => {
  try {
    const { data } = await api.resetPassword(formData)
    dispatch({ type: RESET_PASSWORD, payload: data })
  } catch (error) {
    await dispatch({
      type: RESET_PASSWORD_ERROR,
      payload: error.response.data.message,
    })
  }
}
