import React from 'react'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import FooterSection from '../sections/FooterSection'


const ContactsView = () => {
    window.top.document.title = 'Contacts | Fixxo.'

    return (
        <>
            <MainMenuSection />
            <BreadcrumbSection currentPage="Contacts" />
            <FooterSection />
        </>
    )
}

export default ContactsView