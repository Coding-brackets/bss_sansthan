import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import GallerySection from '@/components/specialStudentComponent/GallerySection'
import React from 'react'

const gallery = () => {
    const galleryTabs = {
        "Academics": [
            "/assets/gallery/wds.png",
            "/assets/gallery/vfs.png",
            "/assets/gallery/doctors.jpg",
            "/assets/gallery/tereating-mental.jpg",
            "/assets/gallery/emergency_room.jpg",
            "/assets/gallery/jharkhan_classroom.png",
            "/assets/gallery/psychiatric-emergency.jpg",
            "/assets/gallery/mbbs-seats.jpg",
            "/assets/gallery/overview.png",
        ],
        "Medical & Hospital": [
            "/assets/gallery/jharkhan_classroom.png",
            "/assets/gallery/psychiatric-emergency.jpg",
            "/assets/gallery/mbbs-seats.jpg",
            "/assets/gallery/overview.png",
        ],
        "College Life": ["/assets/gallery/wds.png",
            "/assets/gallery/vfs.png",
            "/assets/gallery/doctors.jpg",],
        "Campus Environment": ["/assets/gallery/tereating-mental.jpg",
            "/assets/gallery/emergency_room.jpg",
            "/assets/gallery/jharkhan_classroom.png",
            "/assets/gallery/psychiatric-emergency.jpg",]
    };

    return (
        <div>
            <SubPagesHero
                heading="Campus Life & Moments That Inspire"
                description="Explore the vibrant atmosphere of our institutions through glimpses of everyday learning, achievements, and celebrations."
                bgImage="/assets/aboutHeroBanner.png"
            />

            <GallerySection
                differClass="gallery-page container"
                tabsData={galleryTabs}
                
            />
        </div>
    );
};

export default gallery;
