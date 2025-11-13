import Image from "next/image";
import React from "react";

const QuoteComponent = ({ image, altText, para }) => {
  return (
    <div className="mb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <p className="section_para text-center mb-5">{para}</p>
            <div className="Seprator"/>
            
          </div>
          <div className="col-md-6">
            <Image
              src={image}
              alt={altText}
              width={1000}
              height={1000}
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteComponent;
