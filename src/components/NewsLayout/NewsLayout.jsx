import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import { Outlet } from 'react-router-dom';
import RightSidebar from '../RightSidebar/RightSidebar';
import QZone from '../QZone/QZone';
import Header from '../Header/Header';
import Navigation from '../Header/Navigation';

const NewsLayout = () => {
    return (
        <>
            <Header />
            <Navigation />

            <Container className='mt-4'>
                <Row>
                    <Col>
                        <Outlet/>
                    </Col>
                    <Col xs={3}>
                        <RightSidebar />
                        <QZone />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default NewsLayout;