import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const BbMedicalCollege = () => {
  return (
    <div>
       <HeroSection
      subHeadingCon="Welcome to-"
        heading="Bhojrajji Bhondekar Physiotherapy College"
        bgImage="/assets/heroImages/bb-medical-college-hero.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/medicalCollege/medical-college-doctor-Image.png"
        heading="Let’s Learn More About Bhojrajji Bhondekar Physiotherapy College"
        description={[
            "Late Shri Bhojrajji Bhondekar, the brainchild of Bhojrajji Bhondekar Physiotherapy College, founded this institution to bring change in society through education and community service. It is a government-recognized institute currently managed by Bhodenkar Shikshan Sanstha with the goal of providing education easily to underprivileged students. The idea of this institute is to help students access job opportunities in the field of Physiotherapy within their budget.",
            "This Physiotherapy College has 6 departments with advanced facilities and modern equipment. Students can choose their desired fields and can access the digital library, which offers online articles and video lectures by professionals."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Our institute has made learning easy by merging theory with practicals. The timely activities we provide help our students to apply their knowledge in real life."
      images={[
    "/assets/CollegesImg/medicalCollege/doctor-performing-surgery.png",
    "/assets/CollegesImg/medicalCollege/doctor-vacinating-patient.png",
    "/assets/CollegesImg/medicalCollege/female-doctor-examining-patient.png",
    "/assets/CollegesImg/medicalCollege/indian-hospital.jpg",
    "/assets/CollegesImg/medicalCollege/mediacl-college-student.png",
    
  ]}
      />
      <QuoteComponent
        para="Our organization stands as a model of modern education blended with compassionate service and sustainability. Our organization stands as a model of modern education blended with compassionate service and sustainability."
        quote="Every facility we build reflects our mission — to nurture excellence, innovation, and holistic growth."
        image1="/assets/CollegesImg/ayurved.jpg"
        image2="/assets/CollegesImg/medicalCollege/young-doctor.png"
      />
    </div>
  )
}

export default BbMedicalCollege
