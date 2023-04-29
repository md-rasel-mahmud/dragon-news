import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'
import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { FaBookmark, FaEye, FaShareAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const NewsFeed = ({ news }) => {
    const { _id, image_url, title, details, author, rating, total_view } = news;


    return (
        <Card className="my-3 border-light">
            <Card.Header className='d-flex align-items-center gap-2 border-light'>
                <Image style={{ height: '2rem' }} src={author.img} roundedCircle />
                <div className="flex-grow-1">
                    <h5 className='m-0'>{author?.name}</h5>
                    <p className='m-0 text-secondary'>{moment(author.published_date).format('YYYY-MM-DD')}</p>
                </div>
                <div>
                    <Link className='text-secondary me-2' to='/'><FaBookmark /></Link>
                    <Link className='text-secondary ' to='/'><FaShareAlt /></Link>
                </div>
            </Card.Header>
            <Card.Img className='p-2' variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className='mb-0 text-secondary'>
                    <small>
                        {details.slice(0, 200)}...
                    </small> <br />
                    <Link to={`/news/${_id}`} className='text-warning p-0 fw-semibold'>Read More</Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex border-light">
                <div className="flex-grow-1 py-2 d-flex align-items-center gap-2">
                    <Rating
                        style={{ maxWidth: 100 }}
                        value={rating.number}
                        readOnly
                    />
                    <p className='pt-1 m-0 fw-semibold'>{rating.number}</p>
                </div>
                <div className='d-flex align-items-center gap-2'>
                    <FaEye />
                    <p className="m-0 fw-semibold">{total_view}</p>
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsFeed;