import React, { useState } from 'react'
import "./Contact.css";
import { useRef } from 'react';
import pic from '../images/creation.jpg';
import emailjs from '@emailjs/browser';
import { SocialIcon } from 'react-social-icons'


function Contact() {

    const socialMediaHandlesLinks = {
        gitHub: 'https://github.com/clay-kim',
        instagram: 'https://www.instagram.com/claythepainter/',
        linkedin: 'https://www.linkedin.com/in/claythedreamer/',
     
      }


    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [userMessage, setUserMessage] = useState("");

    const handleName = (e) => {
        setUserName(e.target.value);
    }
    const handleEmail = (e) => {
        setUserEmail(e.target.value);
    }
    const handleMessage = (e) => {
        setUserMessage(e.target.value);
    }

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pkwhcsu', 'template_6kk4wze', form.current, 'NNsAiQ8PXH7vXzF9y')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        setUserName('');
        setUserEmail('');
        setUserMessage('');
    };

    return (
        <div className="contact-container">
            <div className="content">
                <img src={pic} alt="creation_of_Adam" />
                <div className='form-group-container'>
                
                    <form ref={form} onSubmit={sendEmail}>
                        <h2>
                            Get in touch
                        </h2>
                        <div className="form-group">
                            <label htmlFor='name'>
                                <textarea
                                    placeholder='Your name'
                                    type="text"
                                    name="user_name"
                                    message="name"
                                    value={userName}
                                    onChange={handleName}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor='email'>
                                <textarea
                                    placeholder='Your email address'
                                    type="text"
                                    name="user_email"
                                    message="email"
                                    value={userEmail}
                                    onChange={handleEmail}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor='message'>
                                <textarea
                                    placeholder='Tell me about it'
                                    type="text"
                                    name="message"
                                    message="message"
                                    value={userMessage}
                                    onChange={handleMessage}
                                />
                            </label>
                        </div>
                        <button onClick={() => alert("Message sent!")}  type="submit" className="submit-button">Send</button>
                    </form>
                    <div className='social-container'>
                <div class="social-menu">
                <ul class="social-handle-list">
                  <li className="social-handle-item">
                    <SocialIcon url={socialMediaHandlesLinks.gitHub} />
                  </li>
        
                  <li className="social-handle-item">
                    <SocialIcon url={socialMediaHandlesLinks.linkedin} />
                  </li>
        
                  <li className="social-handle-item">
                    <SocialIcon url={socialMediaHandlesLinks.instagram} />
                  </li>
    
                </ul>
              </div>
                </div>
                </div>
            </div>
        </div>

    )
}

export default Contact