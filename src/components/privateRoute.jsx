import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export function PrivateRoute() {
  const user = localStorage.getItem('user')
  return (
    <div>{!user ? <Navigate to="/login" replace={true} /> : <Outlet />}</div>
  )
}
