import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import NewsFeed from './NewsFeed';



const NewsCategory = () => {
    const { id } = useParams()

    const [newsCategory, setNewsCategory] = useState([])

    useEffect(() => {

        fetch(`http://localhost:4000/category/${id}`)
            .then(res => res.json())
            .then(data => setNewsCategory(data))
            .catch(error => console.log(error.message))
            
        }, [id])
        

    return (
        <div>
 
            <h2>Dragon News</h2>
            {
                newsCategory.map(news => <NewsFeed news={news} key={news._id} />)
            }
        </div>
    );
};

export default NewsCategory;