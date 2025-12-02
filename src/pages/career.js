import Vacancy from '@/components/careerAndAdmissionComponent/Vacancy'
import VacancyTable from '@/components/careerAndAdmissionComponent/VacancyTable'
import CarouselGallery from '@/components/collegeComponents/CarouselGallery'
import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import React from 'react'
import { jobs } from '@/data/jobData'
import WhyJoinUs from '@/components/careerAndAdmissionComponent/WhyJoinUs'
import JobApplicationForm from '@/components/careerAndAdmissionComponent/jobApplicationForm'

const features = [
  {
    title: "Expert Faculty Team",
    description: "Join a network of experienced educators who collaborate and share real-world knowledge to create impactful learning experiences for every learner."
  },
  {
    title: "Modern Learning Facilities",
    description: "Work in an environment equipped with digital classrooms and cutting-edge technology designed to support excellence and innovation in every step."
  },
  {
    title: "Professional Growth Opportunities",
    description: "Access continuous training, certifications, workshops, and development pathways that enhance teaching skills and build long-term academic and leadership careers."
  },
  {
    title: "Supportive and Inclusive Culture",
    description: "Be part of a nurturing workplace that values respect, teamwork, work–life balance, and the well-being of every faculty member across all levels."
  },
];

  const vacancyData = [
    {
      title: "Pooja Nursing College",
      text: "Positions: Teaching, Nursing, Research",
      img: "/assets/icons/nurse.png",
      color: "#FF7765",
      iconBg: "#FFD6D1",
    },
    {
      title: "BBM College",
      text: "Positions: Doctors, Technicians, Admin, Staff",
      img: "/assets/icons/medical-book.png",
      color: "#9CC71A",
      iconBg: "#E6F8AF",
    },
    {
      title: "Universal BA College, Nerla",
      text: "Positions: Teaching, Nursing, Research, Teacher, Admin",
      img: "/assets/icons/explore.png",
      color: "#289EEE",
      iconBg: "#D2EDFF",
    },
    {
      title: "BB Ayurvedic College",
      text: "Positions: Teaching, Nursing, Research",
      img: "/assets/icons/medicine.png",
      color: "#0A2656",
      iconBg: "#D2EDFF",
    },
  ];

const Career = () => {
  return (
    <div>
      <SubPagesHero
         heading="Career & Vacancy"
         subHeadingCon ="Join Our Team — Build a Meaningful Career with Us"
        description="We believe in nurturing talent and empowering individuals to contribute to education, healthcare, and innovation. Explore current job openings across our institutions and be part of our mission to make a difference."
        SubHeading= "true"
        bgImage="/assets/heroImages/hero-background.webp"
    />
    <Vacancy cards={vacancyData}
        heading="Vacancy & Institute"
    />
    <VacancyTable  tableData={jobs}/>

     <WhyJoinUs features={features} image = "/assets/campusImg1.webp" subHeading="Becoming a part of BSS means contributing to meaningful education while growing professionally. Here, educators transform lives, expand their expertise and thrive in a nurturing academic environment."/>

     <JobApplicationForm/>
    </div>
  )
}

export default Career
