import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { addError } from '../store/errors/errorSlice';

export const authenticatedUser =
{
    email: 'admin@gmail.com',
    password: 'admin123'
}

const AuthForm = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })

    function handleChange(e, key) {
        setUserDetails({
            ...userDetails,
            [key]: e.target.value,
        })
    }
    function handleSubmit(e) {
        e.preventDefault();
        const email = userDetails.email.toLowerCase().trim();
        const password = userDetails.password.toLowerCase().trim();
        if (!email || !password) {
            dispatch(addError({
                id: Math.random(),
                message: 'Please make sure you have entered all the fields properly'
            }))
            return

        }
        if (email === authenticatedUser.email && password === authenticatedUser.password) {
            const token = Math.trunc(Math.random() * 10000000) + email + Math.trunc(Math.random() * 10000000) + password + Math.trunc(Math.random() * 10000000)
            localStorage.setItem('token', token)
            return navigate('/dashboard')
        }

        dispatch(addError({
            id: Math.random(),
            message: 'Please enter valid credentials'
        }))

    }
    return (
        <div>
            <Form.Label htmlFor="email">Email</Form.Label>
            <Form.Control
                type="email"
                id="email"
                onChange={(e) => handleChange(e, 'email')}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                onChange={(e) => handleChange(e, 'password')}

            />
            <Button
                type='submit'
                className='form-control mt-4' variant="dark"
                onClick={handleSubmit}
            >Login</Button>
        </div>
    )
}

export default AuthForm