import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const LeftSidebar = () => {

    const [categories, setCategories] = useState([])
    const [error, setError] = useState([])
    
    useEffect(()=>{
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
    },[])

    
    return (
        <ListGroup className='gap-1'>
            {
                error && <p className='text-danger'>{error}</p>
            }
            {
                categories.map(category => {
                    return <NavLink key={category.id} className={`text-decoration-none ${({ isActive }) => isActive ? 'bg-danger' : 'empty'}`}
                        to={category.name.toLowerCase().split(' ').join('-')}
                    >
                        <ListGroup.Item className='rounded' action
                            variant="light">
                            {category.name}
                        </ListGroup.Item>
                    </NavLink>
                })
            }
        </ListGroup>
    );
};

export default LeftSidebar;