import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const BbMedicalCollege = () => {
  return (
    <div>
       <HeroSection
      subHeadingCon="Welcome to"
        heading="Bhojrajji Bhondekar Medical College (Proposed)"
        bgImage="/assets/heroImages/bb-medical-college-hero.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/medicalCollege/medical-college-doctor-Image.png"
        heading="A Legacy of Excellence: Bhojrajji Bhondekar Medical College (Proposed)"
        description={[
            "Bhojrajji Bhondekar Medical College (Proposed), located in Maharashtra, provides an expert learning environment to students who want to pursue medical sciences. The use of a structured curriculum along with advanced technology and medical equipment has helped the students to grasp knowledge more easily. Since the establishment of this College, we have encountered a huge growth in patient care along with education.",
            "Currently, the Bhojrajji Bhondekar Medical College (Proposed) is run by various professionals who are experts in their respective fields. Students can use our online portal to access details related to admission and fees."
        ]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="A glimpse into our campus life and learning journey. Discover the essence of Bhojrajji Bhondekar Medical College (Proposed) through our gallery.
"
      images={[
    "/assets/CollegesImg/medicalCollege/doctor-performing-surgery.png",
    "/assets/CollegesImg/medicalCollege/doctor-vacinating-patient.png",
    "/assets/CollegesImg/medicalCollege/female-doctor-examining-patient.png",
    "/assets/CollegesImg/medicalCollege/indian-hospital.jpg",
    "/assets/CollegesImg/medicalCollege/mediacl-college-student.png",
    
  ]}
      />
      <QuoteComponent
        para="Bhojrajji Bhondekar Medical College (Proposed) continues to lead with a commitment to evidence-based education, modern healthcare practices, and meaningful community service. Bhojrajji Bhondekar Medical College (Proposed) continues to lead with a commitment to evidence-based education, modern healthcare practices, and meaningful community service.
"
        quote="Every advancement we make strengthens our promise, to shape skilled medical professionals with a healing mindset."
        // image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/medicalCollege/young-doctor.png"
      />
    </div>
  )
}

export default BbMedicalCollege
