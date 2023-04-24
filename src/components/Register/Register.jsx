import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Navigation from '../Header/Navigation';
import { AuthContext } from '../../context/AuthContext';

const Register = () => {
    const [error, setError] = useState('')

    const {registerWithEmailPass} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;
        const confirmPass = form.confirmPass.value;
        setError('')

        if (password !== confirmPass) {
            setError("Password doesn't match")
            return
        } else if (password.length < 6) {
            setError('Password should be more then 6 character')
            return
        }

        registerWithEmailPass(email, password)
        .then( (result) => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error))

        console.log(email, password, confirmPass, error);
    }

    return (
        <div className='my-4'>
            <Navigation />

            <div className='w-50 mx-auto mt-5 p-5 bg-secondary bg-opacity-25 rounded'>

                <h3 className='text-center mb-4'>Register your account</h3>

                <hr className='mb-4' />

                <Form onSubmit={handleSubmit}>

                    <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control className='border-0 py-2' name='name' type="text" placeholder="Enter name" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required className='border-0 py-2' name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>New Password</Form.Label>
                        <Form.Control required className='border-0 py-2' name='password' type="password" placeholder="New Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control required className='border-0 py-2' name='confirmPass' type="password" placeholder="Confirm Password" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check required type="checkbox" label="Accept Term & Conditions" />
                    </Form.Group>

                    {
                        error && <p className="text-danger">{error}</p>   
                    }

                    <div className="d-grid">
                        <Button className='my-3' variant="secondary" type="submit">
                            Submit
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;