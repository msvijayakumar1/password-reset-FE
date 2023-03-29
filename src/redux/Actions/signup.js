import * as api from '../../api'
import {
  SIGNUP,
  SIGNUP_COMPLETED,
  SIGNUP_ERROR,
  SIGNUP_IN_PROGRESS,
} from '../Constants/actionTypes'

// Action Creators
export const signup = (formData, navigate) => async (dispatch) => {
  try {
    await dispatch({ type: SIGNUP_IN_PROGRESS })

    const { data } = await api.signUp(formData)
    await dispatch({ type: SIGNUP, payload: data })
    console.log(data)

    await dispatch({ type: SIGNUP_COMPLETED })
    navigate('/')
  } catch (error) {
    dispatch({ type: SIGNUP_ERROR, payload: error.response.data.message })
    console.log(error)
  }
}
