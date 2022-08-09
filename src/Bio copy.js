import React from 'react'
import "./contact.css"
import { useState } from 'react';
import pic from './images/creation.jpg';


function contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    return (
        <div className="contact-container">
            <div className="content">
            Get in touch
                <img src={pic} alt="selfie" />

                <div className='form-group-container'>
                    <form>
                        <div className="form-group">
                            <label htmlFor='name'>
                                <textarea
                                    placeholder='Your name'
                                    type="text"
                                    id="name"
                                    message="message"
                                    value={name}
                                    onChange={(event) => setName(event.target.value)}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor='email'>
                                <textarea
                                    placeholder='Your email address'
                                    type="text"
                                    id="email"
                                    message="email"
                                    value={email}
                                    onChange={(event) => setEmail(event.target.value)}
                                />
                            </label>
                        </div>

                        <div className="form-group">
                            <label htmlFor='message'>

                                <textarea
                                    placeholder='Tell me about it'
                                    type="text"
                                    id="message"
                                    message="message"
                                    value={message}
                                    onChange={(event) => setMessage(event.target.value)}
                                />
                            </label>
                        </div>
                        <button type="submit" className="submit-button">Send</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Bio