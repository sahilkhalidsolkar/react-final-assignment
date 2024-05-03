import React from 'react'
import { Container, } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../component/MainNavigation'
import ErrorAlert from '../component/ErrorAlert'

const Rootlayout = () => {
    return (
        <>
            <MainNavigation />
            <Container>
                <ErrorAlert />
                <Outlet />
            </Container>
        </>
    )
}

export default Rootlayout