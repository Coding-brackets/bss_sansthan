import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import ContactForm from '@/components/contactUsComponent/ContactForm'
import React from 'react'

const ContactUs = () => {
  return (
    <div>
      <SubPagesHero
              heading="Contact Us"
              description="An overview of our institution and its branches dedicated to education, healthcare, and service"
              bgImage="/assets/heroBackground.png"
          />
          <ContactForm/>
    </div>
  )
}

export default ContactUs
