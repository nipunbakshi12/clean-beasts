import React from 'react'

import './ModernV.css'

import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { motion } from "framer-motion"

import Data from './Data'

import { FaHeart } from "react-icons/fa6";


function ModernVarity() {
  return (
<Container>
            <h1 className='heading'>Our <i>Services</i></h1>
            <Row className='column_food_row'>
                <Col className='column_food_column'>
                    {Data.map((d, index) => (
                        <motion.div className='collection-of-cafes'
                            initial={{
                                opacity: 0,
                                scale: 0.7,
                                rotateX: 10
                            }}
                            whileInView={{
                                opacity: 1,
                                scale: 1,
                                rotateX: 0,
                                stagger: 0.8
                            }}
                            viewport={{
                                once: true,
                            }}
                            custom={index}
                            transition={{
                                ease: [0, 0.71, 0.2, 1.01],
                                duration: 2,
                                delay: 0.2 * index
                            }}
                        >
                            <Card style={{ width: '18rem' }} className='card'>
                                <Card.Img variant="top" src={d.image} />
                                <FaHeart className='like-icon' />
                                <Card.Body>
                                    <Card.Title>{d.title}</Card.Title>
                                    <Card.Text>
                                        <p>★{d.stars}</p>
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </motion.div>
                    ))}
                </Col>
            </Row>
        </Container>
  )
}

export default ModernVarity