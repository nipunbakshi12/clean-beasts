import React from 'react'
import Lottie from 'react-lottie';
import './Navbar.css'
import wave from './broom.json'
import { IoSearch } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navbar({ name, ...props }) {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: wave,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <div className='navbar' style={{ position: "sticky", top: "0px", zIndex: 99, backgroundColor: "#f4f6f4" }}>
            <div className='site-logo'>
                <div className='header-menu-icon'>
                    <IoMenu onClick={handleShow} />
                    <Offcanvas show={show} onHide={handleClose} {...props}>
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Roll Call</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <p>
                                Home
                            </p>
                            <p>
                                Book a Service
                            </p>
                            <p>
                                About Us
                            </p>
                            <p>
                                FAQs
                            </p>
                            <p>
                                Support
                            </p>
                            <p>
                                Rate Us
                            </p>
                            <p>
                                Photos
                            </p>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <div className='store-name'>
                    <h2>Clean Beasts</h2>
                </div>
                <div className='icon-logo'>
                    <Lottie
                        options={defaultOptions}
                        height={80}
                        width={80}
                        position='absolute'
                        left='32px'
                        border-radius='50%'
                    />
                </div>
            </div>

            <div className='all-links'>
                <ul className='all-sections'>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/bookservice"><li>Book a Service</li></Link>
                    <li>About Us</li>
                    <Link to="/faqs"><li>FAQs</li></Link>
                    <li>Support</li>
                    <li>Rate Us</li>
                    <li>Photos</li>
                </ul>
            </div>

            <div className='icons'>
                <ul className='navbar-icons'>
                    <li><IoSearch /></li>
                    <Link to="/login"><li><CgProfile /></li></Link>
                </ul>
            </div>

        </div>
    )
}
function Example() {
    return (
        <>
            {['start'].map((placement, idx) => (
                <Navbar key={idx} placement={placement} name={placement} />
            ))}
        </>
    );
}

export default Example