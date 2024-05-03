import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className='mt-5 d-flex justify-content-center align-items-center flex-column ' >
            <h1>OOPS!</h1>
            <h2>404 - Page Not Found</h2>
            <h5 className='mt-5 '> <Link replace to='/' className='text-decoration-none text-primary'>Home</Link></h5>
        </div>
    )
}

export default PageNotFound