import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EmailSent from '../components/EmailSent'
import ErrorMessage from '../components/ErrorMessage'
import { emailSend } from '../redux/Actions/resetPassword'

const ForgotPassword = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
  })

  const emailMsg = useSelector((state) => state.emailSend)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    dispatch(emailSend(formData, navigate))
  }

  return (
    <div className="container col-sm-12 col-md-12 col-lg-4 p-0 form">
      <div className="heading">
        <h1>Reset Password</h1>
      </div>

      <div className="container form-body pb-4 ps-4 pe-4">
        <form onSubmit={handleSubmit}>
          <div class="mb-3 mt-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div class="mb-3">
            <button type="submit" class="btn btn-primary submit-button">
              Submit
            </button>
            <div className="message my-3">
              {emailMsg.message && <EmailSent message={emailMsg.message} />}
              {emailMsg.error && (
                <ErrorMessage error={emailMsg.error}>
                  {emailMsg.error}
                </ErrorMessage>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword
