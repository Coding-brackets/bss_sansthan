import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const PesMultispecialityHospital = () => {
  return (
    <div>
       <HeroSection
      subHeadingCon="Welcome to-"
        heading="PES Multispeciality Hospital, Sirsi"
        bgImage="/assets/heroImages/pes-multispeciality-hospital.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/pes-multispeciality-hospital/icu.png"
        heading="Let’s Explore PES Multispeciality Hospital, Sirsi"
        description={[
            "Bhojraj Bhondekar Ayurvedic College was founded by Shri Bhojrajji in 2002, Bhandara, Maharashtra. This institute is renowned for its education in the field of Ayurveda and health services that help unprivileged groups to rise above poverty. The goal behind its establishment was to improve society by offering education to poor students with the help of MLA Narendra Bhodenkar. Today, we are operating 14 colleges across Maharashtra that offer nursing courses.",
            "By combining education with moral values and modern-day technology, this institute has helped various students to get a better education and life. The addition of e-libraries, gyms and healthcare camps in our learning system has encouraged more students to access our services."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Being a reputed Ayurveda institute, we help our students to gain maximum knowledge by combining theory with real-life scenarios."
      images={[
    "/assets/CollegesImg/pes-multispeciality-hospital/dr-visiting-seniour-patient.jpg",
    "/assets/CollegesImg/pes-multispeciality-hospital/indian-doctor-preparing-vaccination.jpg",
    "/assets/CollegesImg/pes-multispeciality-hospital/laptop.png",
    "/assets/CollegesImg/pes-multispeciality-hospital/mbbs-medical-student.jpg",
    "/assets/CollegesImg/pes-multispeciality-hospital/ot-image.png",
    
  ]}
      />
      <QuoteComponent
        para="Our organization stands as a model of modern education blended with compassionate service and sustainability. Our organization stands as a model of modern education blended with compassionate service and sustainability."
        quote="Every facility we build reflects our mission — to nurture excellence, innovation, and holistic growth."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/pes-multispeciality-hospital/Rectangle 21206.png"
      />
    </div>
  )
}

export default PesMultispecialityHospital
