import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { isTokenAvailable } from '../utils/auth'

const ProtectedRoute = () => {
    const isAuthenticated = isTokenAvailable()
    return (
        isAuthenticated ? <Outlet /> : <Navigate to='/login' replace={true} />
    )
}

export default ProtectedRoute