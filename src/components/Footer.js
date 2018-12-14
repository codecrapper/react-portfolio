import React from 'react';
import './Footer.css';
import SecondaryHeader from './SecondaryHeader';

const Footer = () => {
    return (
        <div>
            <footer id="contact" className="footer-navbar">
                {/* <div className="container-header">
                    <p className="secondary-header-footer">Looking to start a project? <span>Come say hello.</span></p>
                </div> */}
                <SecondaryHeader secondaryHeader={["Looking to start a project? ", <span className="fancy">Come say hello.</span>]}/>
                <div className="footer-container">
                    <ul className="social-list">
                        <li className="social-list__item"><a href="https://github.com/" target="_blank">GitHub</a></li>
                        <li className="social-list__item"><a href="https://twitter.com/" target="_blank">Twitter</a></li>
                        <li className="social-list__item"><a href="https://au.linkedin.com/" target="_blank">LinkedIn</a></li>
                        <li className="social-list__item"><a href="mailto: john_god_coder@gmail.com">john_god_coder@gmail.com</a></li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}

export default Footer;