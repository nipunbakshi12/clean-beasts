import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import imgTwo from './two.jpg'
import './Testimonials.css'
import shashiImg from './shashi.png'
import harilalImg from './harilal.png'
import neelamImg from './neelam.png'

function Testimonials() {
    return (
        <div style={{
            width: '45%',
            margin: '10px auto'
        }}>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgTwo}
                        alt="First slide"
                    />
                    <Carousel.Caption style={{
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        <h5>SHASHI'S STORY</h5>
                        <p>
                            Meet Shashi, a dedicated helper who truly embodies the spirit of hard work and determination. Despite experiencing a devastating loss when her mother passed away, Shashi didn't let her grief hold her back. She started working the very next day.
                        </p>
                        <img src={shashiImg} style={{
                            position: 'absolute',
                            width: '145px',
                            height: '145px',
                            right: '160px'
                        }}/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgTwo}
                        alt="Second slide"
                    />
                    <Carousel.Caption style={{
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        <h5>HARILAL'S STORY</h5>
                        <p>
                            Meet Harilaal!
                            He works as a sweeper at Dwarka where Broomees office is located and he has been working there for the past few years.
                            Being the sole earner of the family he has to take up various odd jobs to support and provide for his family.
                        </p>
                        <img src={harilalImg} style={{
                            position: 'absolute',
                            width: '145px',
                            height: '145px',
                            right: '160px'
                        }}/>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={imgTwo}
                        alt="Third slide"
                    />
                    <Carousel.Caption style={{
                        color: 'white',
                        fontSize: '18px',
                        fontWeight: 'bold'
                    }}>
                        <h5>NEELAM'S STORY</h5>
                        <p>
                            Meet Neelam aunty!
                            A 49 year old house help who nobody wanted to hire because of her age. Unable to make ends meet, she fought with her family and ran away from her house to work and came to Broomees. Her years of wisdom and gave her a fair pay.
                        </p>
                        <img src={neelamImg} style={{
                            position: 'absolute',
                            width: '145px',
                            height: '145px',
                            right: '160px'
                        }}/>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Testimonials