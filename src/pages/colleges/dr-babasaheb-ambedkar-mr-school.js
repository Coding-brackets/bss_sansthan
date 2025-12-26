import CollegeGallery from '@/components/collegeComponents/CollegeGallery'
import CollegeConSec from '@/components/collegeComponents/collegesConSec'
import HeroSection from '@/components/collegeComponents/HeroSection'
import QuoteComponent from '@/components/collegeComponents/quoteComponent'
import React from 'react'

const DrBabasahebAambedkar = () => {
  return (
    <div>
       <HeroSection
      subHeadingCon="Welcome to"
        heading="Dr. Babasaheb Ambedkar MR School"
        bgImage="/assets/heroImages/dr-babasaheb-aambedkar-school-hero.webp"
      />

      <CollegeConSec
        image="/assets/CollegesImg/babasaheb-ambedkar-school/mr3.png"
        heading="Let’s take a tour of Dr. Babasaheb Ambedkar MR School"
        description={[
  "A safe and home-like space where students feel protected and ready to learn with confidence. The school builds strong reading and writing habits, boosts self-belief and helps every child grow through meaningful daily activities. Caring teachers guide each student step by step so they feel encouraged and excited to improve.",
  "Students learn at their own pace and develop skills that truly matter. With a friendly environment, inspiring programs and chances to explore new abilities, the school aims to help every child build a bright future they can be proud of. Click to discover how students grow more every day."
]}
        buttonText="Visit Now"
        url="/"
      />
      <CollegeGallery
      para="Visit our gallery to see snapshots of school life and happy achievements."
      images={[
    "/assets/CollegesImg/babasaheb-ambedkar-school/award-distribution1.jpg",
    "/assets/CollegesImg/babasaheb-ambedkar-school/award-distribution2.jpg",
    "/assets/CollegesImg/babasaheb-ambedkar-school/award-distribution3.jpg",
    "/assets/CollegesImg/babasaheb-ambedkar-school/award-distribution4.jpg",
    "/assets/CollegesImg/babasaheb-ambedkar-school/award-distribution5.jpg",
    
  ]}
      />
      <QuoteComponent
        para="We aim to offer every student good learning and a caring place to develop. With strong values, simple teaching and steady skill-building, we help students progress every day. Parents and students can always contact us for guidance or support. "
        quote="Our goal is to shape a confident and promising future for each child."
        image1="/assets/CollegesImg/ayurved.png"
      />
    </div>
  )
}

export default DrBabasahebAambedkar
