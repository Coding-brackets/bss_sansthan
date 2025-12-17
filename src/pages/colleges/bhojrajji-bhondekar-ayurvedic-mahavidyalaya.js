import Announcement from '@/components/collegeComponents/announcement'
import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const BBAyurvedic = () => {
  return (
    <div>
      <HeroSection
      subHeadingCon="Welcome to"
        heading="Bhojrajji Bhondekar Ayurvedic Mahavidyalaya"
        bgImage="/assets/heroImages/bb-ayurvedic-college.webp"
      />
      <Announcement/>
      <CollegeConSec
        image="/assets/CollegesImg/doctorImg.png"
        heading="Let’s Explore Bhojrajji Bhondekar Ayurvedic Mahavidyalaya"
        description={[
            "Bhojrajji Bhondekar Ayurvedic Mahavidyalaya was founded by Shri Bhojrajji in 2002, Bhandara, Maharashtra. This institute is renowned for its education in the field of Ayurveda and health services that help unprivileged groups to rise above poverty. The goal behind its establishment was to improve society by offering education to poor students with the help of MLA Narendra Bhodenkar. Today, we are operating 14 colleges across Maharashtra that offer nursing courses.",
            "By combining education with moral values and modern-day technology, this institute has helped various students to get a better education and life. The addition of e-libraries, gyms and healthcare camps in our learning system has encouraged more students to access our services."
        ]}
        buttonText="Visit Now"
        url="https://bbayurvediccollege.org/"
      />
      <CollegeGallery
      para="Being a reputed Ayurveda institute, we help our students to gain maximum knowledge by combining theory with real-life scenarios."
      images={[
    "/assets/CollegesImg/ayurvedic-clg4.webp",
    "/assets/CollegesImg/ayurvedic-clg2.webp",
    "/assets/CollegesImg/ayurvedic-clg3.webp",
    "/assets/CollegesImg/ayurvedic-clg5.webp",
    "/assets/CollegesImg/ayurvedic-clg1.webp",
    
  ]}
      />
      <QuoteComponent
        para="At BB Ayurvedic College, we nurture a learning ecosystem where curiosity and knowledge grows together. Through student-focused initiatives, we continue shaping the next generation of healthcare professionals. Our vision extends beyond academic success according to which we cultivate individuals who lead with compassion and purpose."
        quote="Every achievement stands as a testament to our unwavering mission of quality education and positive community impact."
        image1="/assets/CollegesImg/ayurved.png"
        image2="/assets/CollegesImg/collegeQuote1.png"
      />
    </div>
  )
}

export default BBAyurvedic
