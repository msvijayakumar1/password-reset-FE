import React from 'react'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert'

const ClickLogin = () => {
  return (
    <Alert key="warning" variant="warning">
      <Alert.Link>
        <Link to="/">Go to Login Page</Link>
      </Alert.Link>
    </Alert>
  )
}

export default ClickLogin
