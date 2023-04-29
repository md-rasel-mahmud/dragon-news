import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError()

    return (
        <div className='mt-5'>
            <h2 className='text-danger text-center'>"{error.status}" {error.statusText}</h2>
            <h4 className='text-danger text-center'>{error.data}</h4>
        </div>
    );
};

export default ErrorPage;