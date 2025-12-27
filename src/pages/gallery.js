import SubPagesHero from "@/components/commonComponents/SubPagesHero";
import GallerySection from "@/components/specialStudentComponent/GallerySection";
import React, { useEffect, useState } from "react";

const Gallery = () => {
  const [galleryTabs, setGalleryTabs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    const fetchGallery = async () => {
      try {
        const res = await fetch("https://bss.youstable.cfd/api/fetch-gallery-data", {
          signal: controller.signal,
        });
        const response = await res.json();

        const groupedData = {};

        response.data.forEach((item) => {
          const category = item.category || "Other";

          if (!groupedData[category]) groupedData[category] = [];

          groupedData[category].push({
            image: `https://bss.youstable.cfd/public/storage/${item.image}`,
            alt: item.alt_text || item.title || "Gallery Image",
          });
        });

        setGalleryTabs(groupedData);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Gallery load error:", err);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();

    return () => controller.abort();
  }, []);

  // const galleryTabs = {
  //     "Academics": [
  //        { image: "/public/assets/gallery/academics", alt: "Moments of Inclusion 1" },
  //        { image: "/assets/gallery/vfs.png", alt: "Moments of Inclusion 1" },
  //        { image: "/assets/gallery/doctors.jpg", alt: "Moments of Inclusion 1" },
  //        { image: "/assets/gallery/tereating-mental.jpg", alt: "Moments of Inclusion 1" },
  //        { image: "/assets/gallery/emergency_room.jpg", alt: "Moments of Inclusion 1" },
  //        { image: "/assets/gallery/jharkhan_classroom.png", alt: "Moments of Inclusion 1" },
  //        { image: "/assets/gallery/psychiatric-emergency.jpg", alt: "Moments of Inclusion 1" },
  //        { image: "/assets/gallery/mbbs-seats.jpg", alt: "Moments of Inclusion 1" },
  //        { image: "/assets/gallery/overview.png", alt: "Moments of Inclusion 1" },
  //     ],
  //     "Medical & Hospital": [
  //        { image: "/assets/gallery/jharkhan_classroom.png", alt: "Smiles & Success 1" },
  //        { image: "/assets/gallery/psychiatric-emergency.jpg", alt: "Smiles & Success 1" },
  //        { image: "/assets/gallery/mbbs-seats.jpg", alt: "Smiles & Success 1" },
  //        { image: "/assets/gallery/overview.png", alt: "Smiles & Success 1" },
  //     ],
  //     "College Life": [
  //        { image: "/assets/gallery/wds.png", alt: "Smiles & Success 1" },
  //        { image: "/assets/gallery/vfs.png", alt: "Smiles & Success 1" },
  //        { image: "/assets/gallery/doctors.jpg",alt: "Smiles & Success 1" }, ],

  //         "Campus Environment": [
  //         { image:    "/assets/gallery/tereating-mental.jpg", alt: "Smiles & Success 1" },
  //        { image: "/assets/gallery/emergency_room.jpg", alt: "Smiles & Success 1" },
  //        { image: "/assets/gallery/jharkhan_classroom.png", alt: "Smiles & Success 1" },
  //        { image:"/assets/gallery/psychiatric-emergency.jpg", alt: "Smiles & Success 1" },]
  //  };

  return (
    <div>
      <SubPagesHero
        heading="Campus Life & Moments That Inspire"
        description="Explore the vibrant atmosphere of our institutions through glimpses of everyday learning, achievements, and celebrations."
        bgImage="/assets/heroImages/hero-background.webp"
      />

      <GallerySection differClass="gallery-page container" tabsData={galleryTabs} />
    </div>
  );
};

export default Gallery;
