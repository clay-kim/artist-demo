import React from 'react'
import "./Contact.css";
import { useState } from 'react';
import pic from '../images/creation.jpg';

function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState("Submit");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message } = e.target.elements;
        let details = {
            name: name.value,
            email: email.value,
            message: message.value,
        };
        let response = await fetch("http://localhost:5000/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };

    return (
        <div className="contact-container">
            <div className="content">
                <img src={pic} alt="selfie" />
                    <div className='form-group-container'> 
                    <form  onSubmit={handleSubmit}>
                        <h2>
                            Get in touch
                        </h2>
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
                        <button type="submit" className="submit-button">{status}</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Contact