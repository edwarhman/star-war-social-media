import React from 'react'
import { Navigate } from 'react-router-dom'

export function Root() {
  const user = localStorage.getItem('user')

  return (
    <div>
      {!user ? (
        <Navigate to="/login" replace={false} />
      ) : (
        <Navigate to="/profile" replace={false} />
      )}
    </div>
  )
}
