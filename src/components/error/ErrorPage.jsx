import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className='mt-5 text-center'>
            <h2 className='text-danger'>"{error.status}" {error.statusText}</h2>
            <h4 className='text-danger'>{error.data}</h4>
            <Link to='/' className="btn btn-primary mt-5">Back to Home</Link>
        </div>
    );
};

export default ErrorPage;