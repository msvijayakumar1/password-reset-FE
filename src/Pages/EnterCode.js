import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import EmailSent from '../components/EmailSent'
import ErrorMessage from '../components/ErrorMessage'
import { verifyCode } from '../redux/Actions/resetPassword'

const EnterCode = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    code: '',
  })
  const verificationMsg = useSelector((state) => state.emailSend)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    dispatch(verifyCode(formData, navigate))
  }

  useEffect(() => {
    dispatch({ type: 'CLEAR_ERROR', payload: null })
  }, [])

  return (
    <div className="container col-sm-12 col-md-12 col-lg-4 p-0 form">
      <div className="heading">
        <h1>Enter OTP to Reset Password</h1>
      </div>

      <div className="container form-body pb-4 ps-4 pe-4">
        <form onSubmit={handleSubmit}>
          <div class="mb-3 mt-3">
            <input
              type="number"
              class="form-control"
              placeholder="Code"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={formData.code}
              onChange={(e) =>
                setFormData({ ...formData, code: e.target.value })
              }
            />
          </div>

          <div class="mb-3">
            <button type="submit" class="btn btn-primary submit-button">
              Submit
            </button>
            <div className="message my-3">
              {/* {signIn.loading && <Loading />} */}
              {verificationMsg.code ? (
                <EmailSent message={verificationMsg.code.message} />
              ) : null}
              {verificationMsg.error && (
                <ErrorMessage error={verificationMsg.error} />
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default EnterCode
