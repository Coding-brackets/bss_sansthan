import React from "react";
import CustomButton from "../uiComponent/CustomButtom";
import Image from "next/image";

const CollegeConSec = ({
  image,
  heading,
  description,
  buttonText,
  url
}) => {
  return (
    <div className="position-relative mb-80">
      <div className="container">
        <div
          className="row legacy_content_sec align-items-center g-4">
          {/* Left / Right image */}
          <div className="col-md-6 legacy_left ps-0">
            <Image src={image} alt={heading} className="w-100 h-100 rounded-3" width={1000} height={1000}/>
          </div>

          {/* Content */}
          <div className="col-md-6 legacy_right d-flex align-items-center">
            <div>
              <h2 className="section_heading mb-3">{heading}</h2>

              {Array.isArray(description) ? (
                description.map((para, index) => (
                  <p key={index} className="section_para ">
                    {para}
                  </p>
                ))
              ) : (
                <p className="section_para mb-4">{description}</p>
              )}

                <CustomButton  text={buttonText} url={url}/>                                                        

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollegeConSec;
