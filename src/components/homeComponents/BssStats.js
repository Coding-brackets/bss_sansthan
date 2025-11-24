import React from "react";
import { FaGraduationCap, FaUserTie, FaBuilding, FaUser } from "react-icons/fa";

const BssStats = () => {
  const stats = [
    { iconimg: "/assets/icons/Graduation-Cap.png", number: "97%", label: "Graduates" },
    { iconimg: "/assets/icons/Certificate.png", number: "30X", label: "Certified Teachers" },
    { iconimg: "/assets/icons/Building.png", number: "8", label: "Student Campuses" },
    { iconimg: "/assets/icons/User.png", number: "6510", label: "Students" },
  ];

  return (
    <section className="bss-stats-section mb-100">
      <div className="container">
        <div className="statsBanner">
          {stats.map((item, index) => (
            <div key={index} className="bss-stat-card d-flex">
              <div className="bss-icon-box">
              <img src={item.iconimg} alt={item.label}/>
              </div>
              <div className="ms-2">
                <h2 className="bss-number mb-0">{item.number}</h2>
              <p className="bss-label">{item.label}</p>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BssStats;
