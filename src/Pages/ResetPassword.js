import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ClickLogin from '../components/ClickLogin'
import EmailSent from '../components/EmailSent'
import ErrorMessage from '../components/ErrorMessage'
import { resetPassword } from '../redux/Actions/resetPassword'
import { CLEAR_WHOLE_STATE } from '../redux/Constants/actionTypes'

const ResetPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userData = useSelector((state) => state.emailSend)
  const email = userData.code.data.email
  const code = userData.code.data.code

  const [formData, setFormData] = useState({
    email: email,
    otp: code,
    password: '',
    confirmPassword: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    await dispatch(resetPassword(formData))
  }

  useEffect(() => {
    dispatch({ type: 'CLEAR_ERROR', payload: null })
  }, [])
  return (
    <div className="container col-sm-12 col-md-12 col-lg-4 p-0 form">
      <div className="heading">
        <h1>Reset Password</h1>
      </div>

      <div className="container form-body pb-4 ps-4 pe-4 mt-4">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="New Password"
              id="exampleInputPassword1"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <div class="mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Confirm Password"
              id="exampleInputPassword2"
              value={formData.confirmPassword}
              onChange={(e) =>
                setFormData({ ...formData, confirmPassword: e.target.value })
              }
            />
          </div>

          <div class="mb-3">
            <button type="submit" class="btn btn-primary submit-button">
              Submit
            </button>
            <div className="message my-3">
              {userData.userData ? (
                <>
                  <EmailSent message={userData.userData.message} />
                  <ClickLogin />
                </>
              ) : null}
              {userData.error && (
                <ErrorMessage error={userData.error}>
                  {userData.error}
                </ErrorMessage>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ResetPassword
