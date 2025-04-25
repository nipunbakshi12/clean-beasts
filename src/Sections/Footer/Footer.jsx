import React from 'react'
import './Footer.css'

import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

import { FaPlus } from "react-icons/fa6";


function Footer() {
    return (

        <div className='footer-container'>

            <div className='footer-header'>
                <h1 className='footer-title'>Clean Beasts</h1>
                <div className='social'>
                    <p><FaLinkedin /></p>
                    <p><FaInstagram /></p>
                    <p><FaTwitter /></p>
                    <p><FaYoutube /></p>
                    <p><FaFacebookF /></p>
                </div>
            </div>

            <div className='sections'>

                <div className='about-FJ'>
                    <h4>About Clean Beasts</h4>
                    <p className='footerP'>Who We Are</p>
                    <p className='footerP'>Blog</p>
                    <p className='footerP'>Work With Us</p>
                    <p className='footerP'>Investor Relations</p>
                    <p className='footerP'>Report Fraud</p>
                    <p className='footerP'>Press Kit</p>
                </div>

                <div className='verse'>
                    <h4>CleanVerse</h4>
                    <p className='footerP'>Food Junction</p>
                    <p className='footerP'>Blinkit</p>
                    <p className='footerP'>Feeding India</p>
                    <p className='footerP'>Hyperpure</p>
                    <p className='footerP'>Food Point</p>
                </div>

                <div className='restaurants'>
                    <h4>For Restaurants</h4>
                    <p className='footerP'>Partner With Us</p>
                    <p className='footerP'>Apps For You</p>
                </div>

                <div className='learn'>
                    <h4>Learn More</h4>
                    <p className='footerP'>Privacy</p>
                    <p className='footerP'>Security</p>
                    <p className='footerP'>Terms</p>
                    <p className='footerP'>Sitemap</p>
                </div>

                <div className='learn'>
                    <h4>Contact Us</h4>
                    <p>Call 011-27860742</p>
                    <p>Directions:-</p>

                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.2807080420725!2d77.16420917495965!3d28.711155880506936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d018a18206545%3A0xca8497cfa3b14037!2sJunejas%20Rd%2C%20Pocket%20BK%202%2C%20Shalimar%20Bagh%2C%20Delhi%2C%20110088!5e0!3m2!1sen!2sin!4v1713667744826!5m2!1sen!2sin"width="250" height="200"  loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    
                </div>

            </div>



            <div className='alternate-sections'>
                <div className='alternate-about-FJ'>
                    <h4>About Food Junction
                        <FaPlus className='plus' />
                    </h4>
                    <hr />
                </div>

                <div className='alternate-verse'>
                    <h4>FotionVerse
                        <FaPlus />
                    </h4>
                    <hr />
                </div>

                <div className='alternate-restaurants'>
                    <h4>For Restaurants
                        <FaPlus />
                    </h4>
                    <hr />
                </div>

                <div className='alternate-learn'>
                    <h4>Learn More
                        <FaPlus />
                    </h4>
                    <hr />
                </div>
            </div>

            <hr className='earlier-hr' />

            <p>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Food Junction™ Ltd. All rights reserved.</p>

        </div>
    )
}

export default Footer