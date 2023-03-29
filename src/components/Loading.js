import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loading({ size = 40 }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        margin: '10px',
      }}
    >
      <Spinner
        style={{
          width: size,
          height: size,
        }}
        animation="border"
        variant="primary"
      />
    </div>
  )
}

export default Loading
