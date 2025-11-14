import Image from "next/image";
import React from "react";

const CollegeGallery = ({ para, images }) => {
  return (
    <div className="mb-80">
      <div className="container">
        <h2 className="section_heading text-center mb-2">Our Gallery</h2>
        <p className="section_para text-center mb-5">{para}</p>

        <div className="galleryParent">
          <div className="gallerySec1">
            <Image src={images[0]} alt="" width={1000} height={1000} className="college-Gallery-img" />
          </div>
          <div className="gallerySec2">
            <Image src={images[1]} alt="" width={1000} height={1000} className="college-Gallery-img" />
          </div>
          <div className="gallerySec3">
            <Image src={images[2]} alt="" width={1000} height={1000} className="college-Gallery-img" />
          </div>
          <div className="gallerySec4">
            <Image src={images[3]} alt="" width={1000} height={1000} className="college-Gallery-img" />
          </div>
          <div className="gallerySec5">
            <Image src={images[4]} alt="" width={1000} height={1000} className="college-Gallery-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeGallery;
