import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from '../Header/Navigation';

const Login = () => {
    return (
        <div className='mt-4'>
            <Navigation/>
            <div className='w-50 mx-auto mt-5 p-5 bg-secondary bg-opacity-25 rounded'>

                <h3 className='text-center mb-4'>Login your account</h3>

                <hr className='mb-4' />

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='border-0 py-2' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='border-0 py-2' type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="d-grid">
                        <Button className='my-3' variant="secondary" type="submit">
                            Submit
                        </Button>
                    </div>
                    <h6 className='mt-2 text-center'>Dont’t Have An Account ? <Link className='text-danger text-decoration-none' to='/register'>Register</Link></h6>
                </Form>
            </div>
        </div>
    );
};

export default Login;