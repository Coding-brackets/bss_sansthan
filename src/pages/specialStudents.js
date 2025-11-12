import CollegeHeroSection from '@/components/commonComponents/CollegeHeroSection'
import Testimonials from '@/components/commonComponents/Testimonials'
import EmpowermentSection from '@/components/specialStudentComponent/EmpowermentSection'
import GallerySection from '@/components/specialStudentComponent/GallerySection'
import InclusiveCollegesSection from '@/components/specialStudentComponent/InclusiveCollegesSection'
import StudentAboutUs from '@/components/specialStudentComponent/StudentAboutUs'
import React from 'react'

const specialStudents = () => {
    const specialGalleryTabs = {
        "Moments of Inclusion": [
            "/assets/gallery/gallery1.jpg",
            "/assets/gallery/gallery2.jpg",
            "/assets/gallery/gallery3.jpg",
            "/assets/gallery/gallery4.jpg",
            "/assets/gallery/gallery5.jpg",
            "/assets/gallery/gallery6.jpg",
        ],
        "Smiles & Success": [
            "/assets/gallery/gallery6.jpg",
            "/assets/gallery/gallery5.jpg",
            "/assets/gallery/gallery4.jpg",
            "/assets/gallery/gallery3.jpg",
            "/assets/gallery/gallery2.jpg",
            "/assets/gallery/gallery1.jpg",
        ],
        "Inspiring Journeys": [
            "/assets/gallery/gallery1.jpg",
            "/assets/gallery/gallery2.jpg",
            "/assets/gallery/gallery3.jpg",
            "/assets/gallery/gallery4.jpg",
            "/assets/gallery/gallery5.jpg",
            "/assets/gallery/gallery6.jpg",
        ],
        "Life at Our Campus": [
            "/assets/gallery/gallery6.jpg",
            "/assets/gallery/gallery5.jpg",
            "/assets/gallery/gallery4.jpg",
            "/assets/gallery/gallery3.jpg",
            "/assets/gallery/gallery2.jpg",
            "/assets/gallery/gallery1.jpg",
        ],
    };

    return (
        <div>
            <CollegeHeroSection
                heading="Empowering Every Ability, Enabling Every Dream"
                description="We believe that education should have no barriers. Our mission is to ensure that every student — regardless of physical or cognitive challenges — has the support, accessibility, and opportunities they deserve to learn, grow, and succeed."
                bgImage="/assets/heroBackground.png"
                buttonText="Learn How We Help"
            />

            <StudentAboutUs />

            <GallerySection
                title="Gallery of Inclusion"
                description="Explore heartwarming moments of empowerment and success."
                tabsData={specialGalleryTabs} differClass="my-40 p-80"
            />

            <EmpowermentSection />
            <InclusiveCollegesSection />
            <Testimonials />
        </div>
    )
}

export default specialStudents;
