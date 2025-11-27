import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import GallerySection from '@/components/specialStudentComponent/GallerySection'
import React, { useEffect, useState } from 'react'

const Gallery = () => {

     const [galleryTabs, setGalleryTabs] = useState({});

    useEffect(() => {
        fetch("")
            .then(res => res.json())
            .then(response => {
                const data = response.data;

                const groupedData = {};

                data.forEach(item => {
                    const category = item.category || "Other";

                    if (!groupedData[category]) groupedData[category] = [];

                    groupedData[category].push({
                        image: "https://your-backend.com/" + item.image,
                        alt: item.alt_text || item.title || "Gallery Image"
                    });
                });

                setGalleryTabs(groupedData);
            })
            .catch(err => console.error("Gallery load error:", err));
    }, []);


    // const galleryTabs = {
    //     "Academics": [
    //         "/assets/gallery/wds.png",
    //         "/assets/gallery/vfs.png",
    //         "/assets/gallery/doctors.jpg",
    //         "/assets/gallery/tereating-mental.jpg",
    //         "/assets/gallery/emergency_room.jpg",
    //         "/assets/gallery/jharkhan_classroom.png",
    //         "/assets/gallery/psychiatric-emergency.jpg",
    //         "/assets/gallery/mbbs-seats.jpg",
    //         "/assets/gallery/overview.png",
    //     ],
    //     "Medical & Hospital": [
    //         "/assets/gallery/jharkhan_classroom.png",
    //         "/assets/gallery/psychiatric-emergency.jpg",
    //         "/assets/gallery/mbbs-seats.jpg",
    //         "/assets/gallery/overview.png",
    //     ],
    //     "College Life": ["/assets/gallery/wds.png",
    //         "/assets/gallery/vfs.png",
    //         "/assets/gallery/doctors.jpg",],
    //     "Campus Environment": ["/assets/gallery/tereating-mental.jpg",
    //         "/assets/gallery/emergency_room.jpg",
    //         "/assets/gallery/jharkhan_classroom.png",
    //         "/assets/gallery/psychiatric-emergency.jpg",]
    // };

    return (
        <div>
            <SubPagesHero
                heading="Campus Life & Moments That Inspire"
                description="Explore the vibrant atmosphere of our institutions through glimpses of everyday learning, achievements, and celebrations."
                bgImage="/assets/heroImages/hero-background.webp"
            />

            <GallerySection
                differClass="gallery-page container"
                tabsData={galleryTabs}
                
            />
        </div>
    );
};

export default Gallery;
