import React from 'react'
import Alert from 'react-bootstrap/Alert'

const EmailSent = ({ message }) => {
  return (
    <Alert key="success" variant="success">
      {message}
    </Alert>
  )
}

export default EmailSent
