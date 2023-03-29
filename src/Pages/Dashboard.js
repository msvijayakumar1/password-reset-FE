import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { CLEAR_WHOLE_STATE, LOGOUT } from '../redux/Constants/actionTypes'

const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = React.useState(
    JSON.parse(localStorage.getItem('profile')),
  )

  const logout = () => {
    dispatch({ type: LOGOUT })
    dispatch({ type: CLEAR_WHOLE_STATE, payload: null })
    setUser(null)
    navigate('/')
  }
  return (
    <div>
      <h1>Welcome to the App </h1>
      <button className="btn btn-danger" onClick={logout}>
        Logout
      </button>
    </div>
  )
}

export default Dashboard
