import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

function JobApplicationForm() {
  const [preview, setPreview] = useState(null);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    course: "",
    college: "",
    document: null,
    message: "",
  });

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const file = e.target.files[0];
      setFormData((prev) => ({ ...prev, [name]: file }));

      if (file) {
        setPreview(URL.createObjectURL(file)); // ✅ preview
      }
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const formDataToSend = new FormData();

  Object.entries(formData).forEach(([key, value]) => {
    if (value) {
      formDataToSend.append(key, value);
    }
  });

  try {
    const res = await fetch("https://bss.alekh.online/api/post-admission", {
      method: "POST",
      body: formDataToSend,
    });
     const text = await res.text();
  console.log("RAW RESPONSE:", text);

  return;

    // const data = await res.json();

    // if (res.ok) {
    //   alert("Form Submitted Successfully!");

    //   setFormData({
    //     fullname: "",
    //     email: "",
    //     phone: "",
    //     course: "",
    //     college: "",
    //     document: null,
    //     message: "",
    //   });
    // } else {
    //   alert("Error: " + data.message);
    // }
  } catch (error) {
    console.error("Upload failed:", error);
  }
};


  return (
    <div className="resume-wrapper mb-100">
      <div className="container resume-box p-4 p-md-0">
        <div className="row g-4 position-relative">
          <div className="col-lg-8 z-1 d-flex flex-column justify-content-center">
            <div className="p-4 p-md-5">
              <h1 className="section_heading mb-2 text-white">
               Submit Admission Inquiry
              </h1>

              <p className="text-white mb-4">
               Have questions or want to apply directly? Fill out the form below — our admissions team will contact you soon.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="fullname"
                      className="form-control resume-input"
                      placeholder="Full Name"
                      value={formData.fullname}
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
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="phone"
                      className="form-control resume-input"
                      placeholder="Contact Number"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="col-sm-6">
                    <select
                      name="course"
                      className="form-select resume-input"
                      value={formData.course}
                      onChange={handleChange}
                    >
                      <option value="">Select Course</option>
                      <option value="mca">MCA</option>
                      <option value="btech">B.Tech</option>
                      <option value="mtech">M.Tech</option>
                    </select>
                  </div>

                  <div className="col-sm-6">
                    <select
                      name="college"
                      className="form-select resume-input"
                      value={formData.college}
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
                      {formData.document
                        ? formData.document.name
                        : "Upload Documents (optional)"}
                      <input
                        type="file"
                        name="document"
                        accept=".pdf, .doc, .docx, .jpg, .jpeg, .png"
                        className="d-none"
                        onChange={handleChange}
                      />
                    </label>

                    {/* {preview && (
  <img
    src={preview}
    alt="preview"
    className="img-fluid mt-2"
    style={{ maxHeight: "120px", borderRadius: "8px" }}
  />
)} */}
                  </div>

                  <div className="col-12">
                    <textarea
                      name="message"
                      rows={5}
                      className="form-control resume-input"
                      placeholder="Message"
                      value={formData.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>

                <button className="text-center submit-btn mt-4 gap-2">
                  Submit Now <ArrowUpRight size={18} />
                </button>
              </form>
            </div>
          </div>

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

export default JobApplicationForm;
