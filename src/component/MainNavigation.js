import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import './MainNavigation.css'

const MainNavigation = () => {

    return (
        <Navbar expand="sm" sticky="top" bg="dark" data-bs-theme="dark" >
            <Container>
                <Navbar.Brand > <Link to="/" className={`nav_links `}>Final Assignment</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="d-flex ms-auto gap-3 ">

                        <NavLink
                            to="dashboard"
                            className={({ isActive }) => {
                                return isActive
                                    ? "active_link"
                                    : "nav_links"
                            }
                            }
                        >Dashboard</NavLink>

                        <NavLink to="login"
                            className={({ isActive }) =>
                                isActive
                                    ? "active_link"
                                    : "nav_links"
                            }
                        >Login</NavLink>

                        <NavLink to="logout"
                            className={({ isActive }) =>
                                isActive
                                    ? "active_link"
                                    : "nav_links"
                            }
                        >logout</NavLink>



                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default MainNavigation