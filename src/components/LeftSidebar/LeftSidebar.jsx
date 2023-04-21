import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {

    const [categories, setCategories] = useState([]);
    const [error, setError] = useState([]);

    useEffect(() => {
        const categoriesData = async () => {
            const response = await fetch('http://localhost:4000/categories');

            setError('')

            if (!response.ok) {
                const errorMsg = `${response.status} Data not Found`
                throw new Error(errorMsg)
            }
            const data = await response.json();
            setCategories(data)

            return data;
        }

        categoriesData().catch(e => {
            setCategories([])
            setError(e.message)
        })
    }, [])

    return (
        <ListGroup className='gap-1'>
            {
                error && <p className='text-danger'>{error}</p>
            }
            {
                categories.map(category => {
                    return <NavLink
                        key={category.id}
                        to={`/category/${category.id}`}
                        className={({ isActive }) =>
                            isActive ?
                                'bg-black bg-opacity-10 text-black fw-semibold text-decoration-none rounded p-2'
                                :
                                'text-decoration-none rounded text-black p-2'}
                    >

                        {category.name}
                    </NavLink>
                })
            }
        </ListGroup >
    );
};

export default LeftSidebar;