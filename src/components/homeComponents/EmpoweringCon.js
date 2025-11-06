import React from "react";
import Button from "../../uiComponent/Button";
import { FaCheck } from "react-icons/fa";

const EmpoweringCon = ({heading, description, subHeading, points=[], ButtonText, disabledImg}) => {
  return (
    <div>
      <div className="container mb-100">
        <div className="row g-4">
          <div className="col-md-6">
            <div className="">
              <img src={disabledImg} alt="" className="width-100"/>
            </div>
            </div>
            <div className="col-md-6 d-flex align-items-center">
            <div className="empowering_conBanner">
              <h2 className="section_heading mb-3">{heading}</h2>
              <p className="section_para mb-4">{description}</p>
              <h4>{subHeading}</h4>
              {points.length > 0 && (
                <ul className="list-unstyled mb-0">
                  {points.map((point, idx) => (
                    <li key={idx} className="mb-1 d-flex align-items-center">
                      <FaCheck className="me-2  check_icon" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
              <Button text={ButtonText}/>
            </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default EmpoweringCon;
