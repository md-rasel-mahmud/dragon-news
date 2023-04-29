import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navigation from '../Header/Navigation';
import { AuthContext } from '../../context/AuthContext';

const Login = () => {
    const {loginWithEmailPass} = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        loginWithEmailPass(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            navigate(from)
        })
        .catch(error => console.log(error.message))
    }

    return (
        <div className='mt-4'>
            <Navigation/>
            <div className='w-50 mx-auto mt-5 p-5 bg-secondary bg-opacity-25 rounded'>

                <h3 className='text-center mb-4'>Login your account</h3>

                <hr className='mb-4' />

                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control className='border-0 py-2' name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control className='border-0 py-2' name='password' type="password" placeholder="Password" />
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