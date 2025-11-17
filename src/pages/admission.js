import Vacancy from '@/components/careerAndAdmissionComponent/Vacancy'
import VacancyTable from '@/components/careerAndAdmissionComponent/VacancyTable';
import WhyJoinUs from '@/components/careerAndAdmissionComponent/WhyJoinUs';
import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import React from 'react'
import { jobs } from '@/data/jobData'
import AdmissionForm from '@/components/careerAndAdmissionComponent/AdmissionForm';

const features = [
  {
    title: "Expert Faculty",
    description: "Learn from experienced educators who bring real-world insights into the classroom."
  },
  {
    title: "Modern Infrastructure",
    description: "State-of-the-art labs, digital libraries, and advanced learning spaces."
  },
  {
    title: "Career-Oriented Programs",
    description: "Programs designed to prepare students for real-world opportunities."
  },
  {
    title: "Supportive Environment",
    description: "A campus culture that supports personal and academic growth."
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

     <WhyJoinUs features={features} image = "/assets/campusImg.png" />
     <AdmissionForm/>
    </div>
  )
}

export default Admission
