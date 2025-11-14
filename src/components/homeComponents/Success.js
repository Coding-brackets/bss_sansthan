import React from "react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { FaGraduationCap, FaUserGraduate } from "react-icons/fa";
import { LiaUserTieSolid } from "react-icons/lia";

const Success = ({ heading = "Success Stories" }) => {
  return (
    <div className="success-section mb-100">
      <div className="container">
        <h2 className="section_heading text-center mb-5">{heading}</h2>

        <div className="success-grid">
          {/* Box 1 */}
          <div className="div1 d-flex flex-column justify-content-between">
            <div className="icon-wrapper1 successIcon1">
                  <BadgeCheck color="#fff"  className="badge_check"/>
                </div>
            <div className="success_con_box">
            <h3 className="">10,000+</h3>
            <p className="m-0">Students Regularly Enrolled</p>
            </div>
          </div>

          {/* Box 2 (Image) */}
          <div className="div2 overflow-hidden ">
            <img
              src="/assets/doctor2.png"
              alt="Success"
              className="img-fluid w-100 h-100 object-fit-cover"
            />
          </div>

          {/* Box 3 */}
          <div className="div3  d-flex flex-column justify-content-between">
             <div className="icon-wrapper1 successIcon2">
                  <LiaUserTieSolid color="#fff"  className="badge_check"/>
                </div>
            <div className="success_con_box">
            <h3 className="">7,000+</h3>
            <p className="m-0">Graduated Successfully</p>
            </div>
          </div>

          {/* Box 4 */}
          <div className="div4 d-flex flex-column justify-content-end position-relative ">
            <ArrowUpRight
              size={24}
              className="position-absolute top-0 end-0 m-3 text-white"
            />
            <h4 className=" text-white mb-0">Explore BSS</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
