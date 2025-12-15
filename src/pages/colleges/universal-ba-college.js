import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const UniversalBA = () => {
  return (
    <div>
       <HeroSection
      subHeadingCon="Welcome to"
        heading="Universal BA College, Nerla"
        bgImage="/assets/heroImages/universal-ba-college-hero.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/universal-ba-college/student-collage-img.png"
        heading="Let us learn about Universal BA College, Nerla"
        description={[
            "The Universal BA College in Nerla, Maharashtra was founded by the late Shri Bhojrajji Bhodenkar in 2002. The aim behind the construction of this college in the remote village of Nerla was to deliver expert learning facilities for the students. The continuous praise that we receive from students, their parents and the community has encouraged us to provide exceptional educational facilities in the fields of Arts.",
            "Our Universal BA College allows the students of Nerla to complete their graduation and post-graduation programs without any inconvenience. We have helped various students of this village to get quality education."
        ]}
        buttonText="Visit Now"
        url="https://poojanursing.com/"
      />
      <CollegeGallery
      para="Browse through our pictures to see the energy of our students."
      images={[
    "/assets/CollegesImg/universal-ba-college/stu-writing-notepad.jpg",
    "/assets/CollegesImg/universal-ba-college/happy-student-with-notebook.jpg",
    "/assets/CollegesImg/universal-ba-college/student-standing-seprately.jpg",
    "/assets/CollegesImg/universal-ba-college/students1.jpg",
    "/assets/CollegesImg/universal-ba-college/students2.png",
    
  ]}
      />
      <QuoteComponent
        para="We are strongly committed to giving students good learning and a safe space to move ahead. We work with 100% disciplined values and use steady skill as well. Parents and students can contact us anytime for help or information. With this support, we look forward to building a confident future for every child."
        quote="Our teaching methods and academic activities reflect our strong commitment to student development. We guide learners toward high standards of excellence, ensuring they progress confidently in life."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/universal-ba-college/Rectangle 21206.png"
      />
    </div>
  )
}

export default UniversalBA
