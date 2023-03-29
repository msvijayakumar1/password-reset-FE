import axios from 'axios'

const API = axios.create({
  baseURL: 'https://password-reset-e6q8.onrender.com/',
})

export const signIn = (formData) => API.post(`/users/signin`, formData)
export const signUp = (formData) => API.post(`/users/signup`, formData)
export const sendEmail = (formData) => API.post(`/users/email-send`, formData)
export const verifyCode = (formData) => API.post(`/users/verify`, formData)
export const resetPassword = (formData) =>
  API.post(`/users/reset-password`, formData)
