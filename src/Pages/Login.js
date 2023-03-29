import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import ErrorMessage from '../components/ErrorMessage'
import Loading from '../components/Loading'
import { signin } from '../redux/Actions/signin'
import { CLEAR_WHOLE_STATE } from '../redux/Constants/actionTypes'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const signIn = useSelector((state) => state.signin)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    dispatch(signin(formData, navigate))
  }

  useEffect(() => {
    dispatch({ type: CLEAR_WHOLE_STATE, payload: null })
  }, [])
  return (
    <div className="container col-sm-12 col-md-12 col-lg-4 p-0 form">
      <div className="heading">
        <h1>Login</h1>
      </div>

      <div className="container form-body pb-4 ps-4 pe-4">
        <form onSubmit={handleSubmit}>
          <div class="mb-1 mt-3">
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
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              id="exampleInputPassword1"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>

          <div class="mb-3 d-flex justify-content-start">
            <Link to="/forgot-password">
              <h6>Forgot Pasword?</h6>
            </Link>
          </div>

          <div class="mb-3">
            <button type="submit" class="btn btn-primary submit-button">
              Submit
            </button>
            <div className="message my-3">
              {signIn.loading && <Loading />}
              {signIn.error && (
                <ErrorMessage error={signIn.error}>{signIn.error}</ErrorMessage>
              )}
            </div>
          </div>
          <div class="mb-3">
            <p>
              Not a member? <Link to="/signup">Sign Up</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
