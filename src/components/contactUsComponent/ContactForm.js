"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "General Inquiry",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(
        "",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();
      if (res.ok) {
        alert("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          subject: "General Inquiry",
          message: "",
        });
      } else {
        alert("Something went wrong: " + data.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Server error, please try again later.");
    }
  };

  return (
    <div className="contact-section mb-80">
      <div className="container">
        <div className="row g-4 align-items-center justify-content-center">

          {/* Right Form */}
          <div className="col-lg-8">
            <div className=" bg-white form-wrapper text-center">
              {/* <h4 className=" mb-2 text-center">Have Questions?</h4>
              <p className="text-muted small mb-5">
                Fill the contact form and write us a message!
              </p> */}

              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 contact-input-sec">
                    <label className="form-label small">First Name</label>
                    <input
                      type="text"
                      className="form-control contactForm-input"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                     
                    />
                  </div>
                  <div className="col-md-6 contact-input-sec">
                    <label className="form-label small">Last Name</label>
                    <input
                      type="text"
                      className="form-control  contactForm-input"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-6 contact-input-sec">
                    <label className="form-label small">Email</label>
                    <input
                      type="email"
                      className="form-control contactForm-input"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 contact-input-sec">
                    <label className="form-label small">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control contactForm-input"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Select Subject */}
                {/* <div className="mb-5">
                  <label className="form-label small">Select Subject?</label>
                  <div className="d-flex flex-wrap gap-3 mt-1">
                    {[
                      "General Inquiry",
                      "Support",
                      "Partnership",
                      "Feedback",
                      "Other",
                    ].map((option) => (
                      <div key={option} className="form-check form-check-inline">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="subject"
                          id={option}
                          value={option}
                          checked={formData.subject === option}
                          onChange={handleChange}
                        />
                        <label
                          className="form-check-label small"
                          htmlFor={option}
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                  </div>
                </div> */}
               
                <div className="col-12 contact-input-sec mb-4">
                  <label className="form-label small">Message</label>
                  <textarea
                    className="form-control contactForm-input"
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <a href=""
                  type="submit"
                  className=" contactForm_btn"
                >
                  Send Message <ArrowUpRight className="ms-2" />
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
