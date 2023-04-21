import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import app from '../../firebase.config';

const RightSidebar = () => {
    const auth = getAuth(app)

    // google provider 
    const loginGoogleProvider = new GoogleAuthProvider(); 

    const handleLoginWGoogle = ()=>{
        signInWithPopup(auth, loginGoogleProvider)
        .then((result) => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.log(error.message))
    }
    const handleLoginWGithub = ()=>{

    }
    return (
        <>
            <h4>Login With</h4>
            <div className="d-grid gap-2 mb-4">
                <Button onClick={handleLoginWGoogle} variant="outline-primary" size='sm'><FaGoogle /> Login with Google</Button>
                <Button onClick={handleLoginWGithub} variant="outline-secondary" size='sm'><FaGithub /> Login with Github</Button>
            </div>
            <h4 className='my2'>Find Us On</h4>
            <ListGroup>
                <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
                <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default RightSidebar;