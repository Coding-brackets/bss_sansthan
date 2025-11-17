import React from 'react'
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

function AdmissionForm() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    course: "",
    institute: "",
    documents: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", formData);
  };

  return (
    <div className="resume-wrapper mb-100">
      <div className="container resume-box p-4 p-md-0">
        <div className="row g-4 position-relative">

          {/* LEFT COLUMN */}
          <div className="col-lg-8 z-1 d-flex flex-column justify-content-center">
          <div className='p-4 p-md-5'>
            <h1 className="section_heading mb-2 text-white">
              Resume Submission Form
            </h1>

            <p className="text-white mb-4">
              Didn’t find a suitable opening? Drop your details below, and our HR team will reach out when a matching role is available.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="row g-3">

                {/* Full Name + Email */}
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="fullName"
                    className="form-control resume-input"
                    placeholder="Full Name"
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-sm-6">
                  <input
                    type="email"
                    name="email"
                    className="form-control resume-input"
                    placeholder="Email Address"
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone + Course */}
                <div className="col-sm-6">
                  <input
                    type="text"
                    name="contactNumber"
                    className="form-control resume-input"
                    placeholder="Contact Number"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="col-sm-6">
                  <select
                    name="course"
                    className="form-select resume-input"
                    onChange={handleChange}
                  >
                    <option value="">Select Course</option>
                    <option value="mca">MCA</option>
                    <option value="btech">B.Tech</option>
                    <option value="mtech">M.Tech</option>
                  </select>
                </div>

                {/* Institute + File Upload */}
                <div className="col-sm-6">
                  <select
                    name="institute"
                    className="form-select resume-input"
                    onChange={handleChange}
                  >
                    <option value="">Preferred Institute</option>
                    <option value="iit">IIT</option>
                    <option value="nit">NIT</option>
                    <option value="bits">BITS</option>
                  </select>
                </div>

                <div className="col-sm-6">
                  <label className="resume-file w-100">
                    Upload Documents (optional)
                    <input
                      type="file"
                      name="documents"
                      className="d-none"
                      onChange={handleChange}
                    />
                  </label>
                </div>

                {/* Message */}
                <div className="col-12">
                  <textarea
                    name="message"
                    rows={5}
                    className="form-control resume-input"
                    placeholder="Message"
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              <button className="text-center submit-btn mt-4  gap-2">
                Submit Now <ArrowUpRight size={18} />
              </button>
            </form>
          </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-4 d-none d-lg-flex align-items-end justify-content-end">
            <img
              src="/assets/young-woman-with-laptop-showing.png"
              className="right-img"
              alt="Student"
            />
          </div>

        </div>
      </div>
    </div>
  );
}


export default AdmissionForm
