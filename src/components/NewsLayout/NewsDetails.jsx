import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { FaArrowLeft } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
    const singleNews = useLoaderData()

    const {image_url, title, details} = singleNews;
    return (
        <Card className='mt-4'>
            <Card.Img className='p-3' variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Button variant="danger"><FaArrowLeft/> All news in this category</Button>
            </Card.Body>
        </Card>
    );
};

export default NewsDetails;