import Image from "next/image";
import React from "react";

const QuoteComponent = ({ image1, altText, para, image2, quote }) => {
  return (
    <div className="mb-0 position-relative">
    <div className="section-background"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 position-relative d-flex flex-column justify-content-center">
            <div>
            <p className="section_para  mb-3">{para}</p>
            <div className="Seprator w-25"/>
            <p className="collegeQuote">{quote}</p>
            </div>
            <img
              src={image1}
              alt={altText}
              // width={1000}
              // height={1000}
              className="w-75 h-auto ayurved_img d-flex m-auto"
            />
            
          </div>
          <div className="col-lg-6 d-flex align-items-end">
            <Image
              src={image2}
              alt={altText}
              width={1000}
              height={1000}
              className="w-100 h-auto quote-right-img"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteComponent;
