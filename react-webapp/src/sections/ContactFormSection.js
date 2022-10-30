import React, { useState } from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState ({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if(!values.name) //om name är tom så vill jag...
            errors.name = "You must enter a name"
        
        if(!values.email) 
            errors.email = "You must enter a e-mail address"
        else if(!regex_email.test(values.email)) // om inte du har skrivit in rätt så...
            errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 6)
            errors.comment = "Your comment must be longer then six characters"
        
        if(Object.keys(errors).length === 0) //om den inte innehåller några nycklar(keys, (name,email, comment)) så gör det hära...
            setSubmitted(true)
        else
            setSubmitted(false)
        
        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm ({...contactForm, [id]: value})
    }

    const handelSubmit = (e) => {
        e.preventDefault() //stänger av standard beteendet.
        setFormErrors(validate(contactForm))

    }

    return (
        <section className="contact-form">
            <div className="container">
                {
                    submitted ? 
                    (<div className="d-flex justify-content-center align-items-center">
                        <div>Thank you for your opinion!</div>
                        </div>)
                        :
                        (
                            <>
                                <h2>Come In Contact With Us</h2>
                                <pre>{ JSON.stringify(formErrors)}</pre>
                                <form onSubmit={handelSubmit} noValidate>
                                    <div>
                                        <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange}/>
                                        <div id="nameErrorMessage" className="errorMessage">{formErrors.name}</div>
                                    </div>
                                    <div>
                                        <input id="email" onKeyUp="validate(event)" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange}/>
                                        <div id="emailErrorMessage" className="errorMessage">{formErrors.email}</div>
                                    </div>
                                    <div className="textarea">
                                        <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                                        <div id="commentErrorMessage" className="errorMessage">{formErrors.comment}</div>
                                    </div>
                                    <div className="formBtn">
                                        <button id="send-button" type="submit" className="btn-theme">Post Comments</button>
                                    </div>
                                </form>
                            </>
                        )
                }
            </div>
        </section>
    )
}

export default ContactFormSection