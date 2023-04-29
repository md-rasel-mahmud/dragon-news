import React, { useContext } from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { FaUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import './hover.css'
import { AuthContext } from '../../context/AuthContext';

const Navigation = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
    }

    return (
        <Container style={{ backdropFilter: 'blur(10px)' }} className='sticky-top'>
            <Navbar className='w-75 ps-lg-5 ms-auto' expand="lg">

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ps-lg-5 gap-2 me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to='/' className='ms-lg-5 text-hover ps-lg-5 text-decoration-none text-secondary'>Home</Link>
                        <Link to='/about' className='text-decoration-none text-hover text-secondary'>About</Link>
                        <Link to='/career' className='text-decoration-none text-hover text-secondary'>Career</Link>

                    </Nav>
                    <div className="d-flex align-items-center gap-2">
                        {
                            user ?
                                <>
                                    <FaUserCircle className='fs-2' />
                                    <h6 className='m-0'>{user.email}</h6>

                                    <Button onClick={handleLogout} variant="secondary" className='rounded-0 px-4'>Logout</Button>
                                </>
                                :
                                <Link to='/login'>
                                    <Button variant="secondary" className='rounded-0 px-4'>Login</Button>
                                </Link>
                        }

                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navigation;