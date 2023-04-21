import React from 'react';

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import {FaUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Container >
            <Navbar className='w-75 ps-lg-5 ms-auto'  expand="lg">

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ps-lg-5 gap-2 me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Link to='/' className='ms-lg-5 ps-lg-5 text-decoration-none text-secondary'>Home</Link>
                        <Link to='about' className='text-decoration-none text-secondary'>About</Link>
                        <Link to='career' className='text-decoration-none text-secondary'>Career</Link>
                        
                    </Nav>
                    <div className="d-flex align-items-center gap-2">
                        <FaUserCircle className='fs-2'/>
                        <Link to='/login'>
                            <Button variant="secondary" className='rounded-0 px-4'>Login</Button>
                        </Link>
                    </div>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default Navigation;