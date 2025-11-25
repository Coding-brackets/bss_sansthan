import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";

const QuickRegistrationForm = ({ collegeName, onClose }) => {
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    college: collegeName || "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // console.log("Form submitted:", formData);
    try {
      const res = await fetch("https://bss.alekh.online/api/post-admission", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Form Submitted Successfully!");
        setFormData({
          fullname: "",
          phone: "",
          email: "",
          college: collegeName || "",
          course: "",
        });
      } else {
        alert("Something went wrong: " + data.message);
      }
    } catch (error) {
      console.error("Error Submitting form:", error);
    }
    alert(`Registered successfully for ${formData.college}`);

    onClose();
  };

  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      role="dialog"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content  position-relative popup-box">
          <button className="close-btn" onClick={onClose}>
            <IoMdClose size={22} />
          </button>

          <h5 className="popup-heading  mb-4 text-center">
            Quick Registration
          </h5>

          <form onSubmit={handleSubmit}>
            <div className="mb-3 text-start">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="fullname"
                className="form-control border-0 border-bottom rounded-0 form_input"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone"
                className="form-control border-0 border-bottom rounded-0 form_input"
                placeholder="+91 1234 56789"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control border-0 border-bottom rounded-0 form_input"
                placeholder="example@gmail.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3 text-start">
              <label className="form-label">Select College</label>
              <select
                name="college"
                className="form-select border-0 border-bottom rounded-0 form_input"
                value={formData.college}
                onChange={handleChange}
                required
              >
                <option value="">Select College</option>
                <option value="Pooja Nursing College">
                  Pooja Nursing College
                </option>
                <option value="Bhagyashri Bhondekar Ayurvedic College (BAMS)">
                  Bhagyashri Bhondekar Ayurvedic College (BAMS)
                </option>
                <option value="Bhagyashri Bhondekar Physiotherapy College">
                  Bhagyashri Bhondekar Physiotherapy College
                </option>
                <option value="Bhagyashri Bhondekar Medical College">
                  Bhagyashri Bhondekar Medical College
                </option>
              </select>
            </div>

            <div className="mb-4 text-start">
              <label className="form-label">Select Course</label>
              <select
                name="course"
                className="form-select border-0 border-bottom rounded-0 form_input"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">Select Course</option>
                <option value="B.Sc Nursing">B.Sc Nursing</option>
                <option value="BAMS">BAMS</option>
                <option value="Physiotherapy">Physiotherapy</option>
                <option value="MBBS">MBBS</option>
                <option value="B.Ed">B.Ed</option>
              </select>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-100 rounded-3 py-2 fw-semibold"
              style={{ background: "#0b1b3f", border: "none" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuickRegistrationForm;
