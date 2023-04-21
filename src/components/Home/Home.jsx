import React from 'react';
import { Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap';

import { useLoaderData, NavLink, Outlet } from 'react-router-dom';
import RightSidebar from '../RightSidebar/RightSidebar';
import QZone from '../QZone/QZone';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation';
import LeftSidebar from '../LeftSidebar/LeftSidebar';

const Home = () => {
    return (
        <>
            <Header />
            <Navigation />

            <Container className='mt-4'>
                <Row>
                    <Col>
                        <LeftSidebar/>
                    </Col>
                    <Col xs={6}>
                            <Outlet/>
                    </Col>
                    <Col>
                        <RightSidebar />
                        <QZone />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Home;