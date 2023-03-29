import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { signup } from '../redux/Actions/signup'

import Loading from '../components/Loading'
import ErrorMessage from '../components/ErrorMessage'

const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const signUp = useSelector((state) => state.signup)

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    dispatch(signup(formData, navigate))
  }
  return (
    <div className="container col-sm-12 col-md-12 col-lg-4 p-0 form">
      <div className="heading">
        <h1>Sign Up</h1>
      </div>

      <div className="container form-body pb-4 ps-4 pe-4">
        <form onSubmit={handleSubmit}>
          <div class="mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="First Name"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>
          <div class="mb-3 mt-3">
            <input
              type="text"
              class="form-control"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>
          <div class="mb-3 mt-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
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
              {signUp.loading && <Loading />}
              {signUp.error && (
                <ErrorMessage error={signUp.error}>{signUp.error}</ErrorMessage>
              )}
            </div>
          </div>
          <div class="mb-3">
            <p>
              Already Registered? <Link to="/">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup
