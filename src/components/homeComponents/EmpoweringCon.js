import React from "react";
import { FaCheck } from "react-icons/fa";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";


const EmpoweringCon = ({ heading, description, disabledImg }) => {
  return (
    <div className="cust_pad ">
    <div className="container  position-relative "> 
      <div className="disable_banner">
        <div className="empowering_conBanner">
          <h2 className="section_heading mb-3">{heading}</h2>
          <p className="section_para mb-4">{description}</p>
          <Link href="" className="custom_btn">Learn More <ArrowUpRight  className="ms-2"/></Link>
        </div>

        <div className="disable_img_sec">
          <div className="img-wrapper">
            <img src={disabledImg} alt="Disabled Students" />
          </div>

          <div className="floating-card">
            <ul>
              <li><FaCheck /> Inclusive classrooms</li>
              <li><FaCheck /> Special learning materials</li>
              <li><FaCheck /> Accessible infrastructure</li>
              <li><FaCheck /> Dedicated mentors</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default EmpoweringCon;
