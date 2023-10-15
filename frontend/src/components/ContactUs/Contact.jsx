import React from 'react';
import farigif from '../../assets/farigif.gif';
import './Contact.css';

const ContactUs = () => {
    return (
        <div className='contact-us'>
            <div className="imageContainer">
                <img src={farigif} alt="fari" />
            </div>
            <section className="contact">
                <div className="content">
                    <h2>Contact Me</h2>
                    <p>I'd love to hear from you! Whether you have a question, feedback, or just want to chat, feel free to reach out. Here's how you can get in touch:</p>
                </div>
                <div className="container">
                        <div className="contactInfo">
                            <div className="box">
                                <div className="icon">
                                    <a href="https://www.google.com/maps/place/Walnut+Creek,+CA,+USA/" target="_blank" rel="noopener noreferrer">
                                        <ion-icon name="location-outline"></ion-icon>
                                    </a>
                                </div>
                            <div className="text">
                                <h3>Location</h3>
                                <p >
                                    <a a className='cona' href="https://www.google.com/maps/place/Walnut+Creek,+CA,+USA/" target="_blank" rel="noopener noreferrer">
                                    Walnut Creek, California, USA
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="box">
                            <div className="icon"><a href="tel:+19253939930"><ion-icon name="call-outline"></ion-icon></a></div>
                            <div className="text">
                                <h3>Phone</h3>
                                <p><a className='cona' href="tel:+19253939930">925-393-9930</a></p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><a  href="mailto:farivaramiri@gmail.com"><ion-icon name="mail-outline"></ion-icon></a></div>
                            <div className="text">
                                <h3>Email</h3>
                                <p><a className='cona' href="mailto:farivaramiri@gmail.com">farivaramiri@gmail.com</a></p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="icon"><a  href="https://farivar-amiri.com/"><ion-icon name="person-outline"></ion-icon></a></div>
                            <div className="text">
                                <h3>Portfolio</h3>
                                <p><a className='cona' href="https://farivar-amiri.com/">https://farivar-amiri.com/</a></p>
                            </div>
                        </div>
                        <h2 className="txt">Connect with me</h2>
                        <ul className="sci">
                            <li><a href="https://linkedin.com/in/farivar-amiri-458273198"><ion-icon name="logo-linkedin"></ion-icon></a></li>
                            <li><a href="https://github.com/Farivar90"><ion-icon name="logo-octocat"></ion-icon></a></li>
                            <li><a href="https://www.facebook.com/farivar.amiri"><ion-icon name="logo-facebook"></ion-icon></a></li>
                            <li><a href="https://wellfound.com/u/farivar-amiri"><ion-icon name="newspaper-outline"></ion-icon></a></li>
                        </ul>
                    </div>

                    <div className="contactForm">
                        <form method="post" action="https://formspree.io/f/xvojvoaw">
                            <h2>Send Message</h2>
                            <div className="inputBox">
                                <input type="text" name="name" required="required" />
                                <span>Full Name</span>
                            </div>
                            <div className="inputBox">
                                <input type="text" name="email" required="required" />
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <textarea required="required" name="message"></textarea>
                                <span>Type your Message...</span>
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Send" />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;
