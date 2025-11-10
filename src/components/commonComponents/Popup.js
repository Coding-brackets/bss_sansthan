import React from "react";
import { IoMdClose } from "react-icons/io";

const Popup = ({ onClose, onQuickRegister }) => {
  const colleges = [
    {
      title: "Pooja Nursing College",
      text: "Announce that admission for the 2025–26 academic year is officially open!",
    },
    {
      title: "Bhagyashri Bhondekar Ayurvedic College (BAMS)",
      text: "Announce that admission for the 2025–26 academic year.",
    },
    {
      title: "Bhagyashri Bhondekar Physiotherapy College",
      text: "Announce that admission for the 2025–26 academic year.",
    },
    {
      title: "Bhagyashri Bhondekar Medical College",
      text: "Announce that admission for the 2025–26 academic year.",
    },
  ];

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content popup-box position-relative text-center">
          <button className="close-btn" onClick={onClose}>
            <IoMdClose size={22} />
          </button>

          <h4 className="popup-heading mb-2">Admission Open 2025–26</h4>
          <p className="popup-subtext mb-4">
            Are you ready to take your education to the next level?
          </p>

          <div className="row g-3 justify-content-center">
            {colleges.map((college, index) => (
              <div key={index} className="col-12 col-md-6">
                <div className="college-card text-start p-3 h-100 d-flex flex-column justify-content-between">
                  <div>
                    <h6 className="mb-2">{college.title}</h6>
                    <p className="small text-muted mb-3">{college.text}</p>
                  </div>
                  <button
                    className="register-btn w-100"
                    onClick={() => onQuickRegister(college.title)}
                  >
                    Quick Registration
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
