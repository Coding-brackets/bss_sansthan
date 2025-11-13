import Image from "next/image";
import React, { useEffect, useState } from "react";
import { MdArrowOutward } from "react-icons/md";

const SocityInsideComponent = ({image, heading, para, institute}) => {
  return (
    <div className="mb-5">
      <div className="container">
        <div className="row position-relative mb-4 g-4  align-items-start left-layout socity_banner">
          {/* Image Section */}
          <div className="col-lg-4 m-0 d-flex align-items-stretch p-0 image-Sec">
            <Image
              src={image}
              alt={heading}
              className="w-100 isImageLeft img_left"
              width={1000}
              height={1000}
              style={{
                objectFit: "cover",
                height: "100%",
              }}
            />
          </div>
          {/* Content Section */}
          <div className="col-lg-8 d-flex align-items-center">
            <div
              className="facilities_conSec isImageLeft d-flex flex-column justify-content-start">
              <h2 className="mb-3">{heading}</h2>
              <p className="mb-4">{para}</p>
              <div className=" button_banner">
              {institute.buttonItem.map((buttonItem, index) => (
                <button key={index} className="d-flex text-start justify-content-between">{buttonItem} <span className="d-flex "><MdArrowOutward /></span></button>
              ))}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocityInsideComponent;
