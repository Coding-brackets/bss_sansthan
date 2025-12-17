import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const PesMultispecialityHospital = () => {
  return (
    <div>
       <HeroSection
      subHeadingCon="Welcome to"
        heading="PES Multi-speciality Hospital and Research Centre"
        bgImage="/assets/heroImages/pes-multispeciality-hospital.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/pes-multispeciality-hospital/icu.png"
        heading="Let’s Explore PES Multi-speciality Hospital and Research Centre"
        description={[
            "PES Multispeciality Hospital offers various healthcare services including emergency diagnosis, to long-term surgeries. The founder of our hospital aimed to develop a hospital where every patient could find a cure for acute as well as chronic diseases. We have various qualified doctors who take care of each department and patient personally without any hassle.",
            "Specialists of PES Multispeciality Hospital deal with numerous patients every day and help them achieve good health. Along with this, the availability of versatile healthcare services and modern-day equipment has allowed us to diagnose patients from all over India easily. "
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Let’s take a closer look at our Multispeciality Hospital and learn more about what it provides."
      images={[
    "/assets/CollegesImg/pes-multispeciality-hospital/dr-visiting-seniour-patient.jpg",
    "/assets/CollegesImg/pes-multispeciality-hospital/indian-doctor-preparing-vaccination.jpg",
    "/assets/CollegesImg/pes-multispeciality-hospital/laptop.png",
    "/assets/CollegesImg/pes-multispeciality-hospital/mbbs-medical-student.jpg",
    "/assets/CollegesImg/pes-multispeciality-hospital/ot-image.png",
    
  ]}
      />
      <QuoteComponent
        para="Our hospital is equipped with advanced medical technology and modern diagnostic tools that support accurate treatment for a wide range of health conditions. Our team of highly dedicated trained doctors and specialists handle complex cases with professionalism."
        quote="Well-organized services and a responsive support system to ensure successful and comfortable recovery."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/pes-multispeciality-hospital/Rectangle 21206.png"
      />
    </div>
  )
}

export default PesMultispecialityHospital
