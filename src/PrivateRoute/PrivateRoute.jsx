import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(AuthContext);

    if (loader) {
        return <div className='text-center mt-5 pt-5'>
                    <Spinner animation="border" variant="secondary" />
                </div>
    }

    if (user) {
        return children;
    }

    return (
        <Navigate to='/login' />
    );
};

export default PrivateRoute;