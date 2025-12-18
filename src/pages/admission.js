import Vacancy from '@/components/careerAndAdmissionComponent/Vacancy'
import VacancyTable from '@/components/careerAndAdmissionComponent/VacancyTable';
import WhyJoinUs from '@/components/careerAndAdmissionComponent/WhyJoinUs';
import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import React from 'react'
import { jobs } from '@/data/jobData'
import AdmissionForm from '@/components/careerAndAdmissionComponent/AdmissionForm';

const features = [
  {
    title: "Learn From the Best",
    description: "Benefit from mentors who teach with passion, experience, and a student-first approach, making learning clear, engaging, and meaningful for every learner."
  },
  {
    title: "Future-Ready Learning Spaces",
    description: "Study in an environment designed for today’s generation, featuring smart classrooms, hands-on labs, and digital tools that enhance every learning experience."
  },
  {
    title: "Pathways to Real Careers",
    description: "Choose programs crafted to match industry needs and future career trends, ensuring that what you learn prepares you for the world beyond campus."
  },
  {
    title: "A Place Where You Belong",
    description: "Become part of a positive, inclusive campus community where students feel encouraged, supported, and valued throughout their academic journey."
  },
];

  const vacancyData = [
    {
      title: "Pooja Nursing College",
      text: " Teaching, Nursing, Research",
      img: "/assets/icons/nurse.png",
      color: "#FF7765",
      iconBg: "#FFD6D1",
    },
    {
      title: "BBM College",
      text: " Doctors, Technicians, Admin, Staff",
      img: "/assets/icons/medical-book.png",
      color: "#9CC71A",
      iconBg: "#E6F8AF",
    },
    {
      title: "Universal BA College, Nerla",
      text: " Teaching, Nursing, Research, Teacher, Admin",
      img: "/assets/icons/explore.png",
      color: "#289EEE",
      iconBg: "#D2EDFF",
    },
    {
      title: "BB Ayurvedic College",
      text: " Teaching, Nursing, Research",
      img: "/assets/icons/medicine.png",
      color: "#0A2656",
      iconBg: "#D2EDFF",
    },
    {
      title: "Universal BA College, Nerla",
      text: " Teaching, Nursing, Research, Teacher, Admin",
      img: "/assets/icons/explore.png",
      color: "#289EEE",
      iconBg: "#D2EDFF",
    },
    {
      title: "BB Ayurvedic College",
      text: " Teaching, Nursing, Research",
      img: "/assets/icons/medicine.png",
      color: "#0A2656",
      iconBg: "#D2EDFF",
    },
  ];

const Admission = () => {
  return (
    <div>
      <SubPagesHero
         heading="Admissions Open"
         subHeadingCon ="Shape Your Future with Us"
        description="We welcome aspiring students to join our family of excellence. Our institutions offer world-class education, modern infrastructure, and a nurturing environment for academic and personal growth. Explore programs across our colleges and apply for your dream course today!"
        SubHeading= "true"
        bgImage="/assets/heroImages/hero-background.webp"
    />
    <Vacancy cards={vacancyData}
        heading="Vacancy & Institute"
    />
    <VacancyTable  tableData={jobs}/>

     <WhyJoinUs features={features} image = "/assets/campusImg.png" 
      subHeading="At BSS, education is more than classrooms and textbooks! It’s about discovering your potential and how you prepare for your future full of opportunities. Here, every student is encouraged to think differently and grow through meaningful learning experiences."
     />
     <AdmissionForm/>
    </div>
  )
}

export default Admission
