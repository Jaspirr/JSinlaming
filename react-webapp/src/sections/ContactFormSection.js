import React, { useState } from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState ({name: '', email: '', comment: ''})

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm ({...contactForm, [id]: value})
    }
    return (
        <section className="contact-form">
            <div className="container">
                <h2>Come In Contact With Us</h2>
                <form onSubmit="submitForm" noValidate>
                    <div>
                        <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange}/>
                        <div id="emailErrorMessage" className="errorMessage"></div>
                    </div>
                    <div>
                        <input id="email" onKeyUp="validate(event)" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange}/>
                        <div id="emailErrorMessage" className="errorMessage"></div>
                    </div>
                    <div className="textarea">
                        <textarea id="message" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                        <div id="messageErrorMessage" className="errorMessage"></div>
                    </div>
                    <div className="formBtn">
                        <button id="send-button" type="submit" className="btn-theme">Post Comments</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactFormSection