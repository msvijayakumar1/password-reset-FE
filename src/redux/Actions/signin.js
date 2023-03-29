import { Navigate } from 'react-router-dom'
import * as api from '../../api'
import {
  LOGIN,
  LOGIN_COMPLETED,
  LOGIN_ERROR,
  LOGIN_IN_PROGRESS,
} from '../Constants/actionTypes'

//Action Creators
export const signin = (formData, navigate) => async (dispatch) => {
  try {
    await dispatch({ type: LOGIN_IN_PROGRESS })
    const { data } = await api.signIn(formData)

    await dispatch({ type: LOGIN, payload: data })
    console.log(data)
    localStorage.setItem('userInfo', JSON.stringify(data))

    await dispatch({ type: LOGIN_COMPLETED })

    navigate('/dashboard')
  } catch (error) {
    dispatch({ type: LOGIN_ERROR, payload: error.response.data.message })
    console.log(error)
  }
}
