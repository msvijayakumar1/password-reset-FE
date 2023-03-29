import React, { useState } from 'react'
import Alert from 'react-bootstrap/Alert'

function ErrorMessage({ error }) {
  return (
    <Alert key="danger" variant="danger">
      {error}
    </Alert>
  )
}

export default ErrorMessage
