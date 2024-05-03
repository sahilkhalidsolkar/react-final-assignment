import React, { useEffect } from 'react'
import { removeAuthToken } from '../utils/auth'
import { Link } from 'react-router-dom'
import './LogoutPage.css'
export function loader() {
    removeAuthToken()
    return null
}
const LogoutPage = () => {
    return (
        <div className='logout_Page'>
            <h3 >You have Logged Out Successfully</h3>

            <h5><Link to='/login' className='text-decoration-none'>Login Again!</Link></h5>
        </div>
    )
}

export default LogoutPage