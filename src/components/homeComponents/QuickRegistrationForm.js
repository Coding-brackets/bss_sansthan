import React from "react";

const QuickRegistrationForm = () => {
  return (
    <div className="container-fluid mt-50 mb-100">
        <form className="my-40">
          <div className="row quick-registration-box position-relative">
            <div className="col-2 quick-left position-relative">
            
            <div className="circle_left"/>
              <h3>quick Registration</h3>
            </div>

            <div className=" col-2 form-group">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="col-2 form-group">
              <label>Phone Number</label>
              <input type="text" placeholder="+91 123 1234 56789" />
            </div>

            <div className="col-2 form-group">
              <label>Email Address</label>
              <input type="email" placeholder="john.doe@gmail.com" />
            </div>

            <div className="col-2 form-group">
              <label>Select Course</label>
              <select>
                <option value="">Select Course</option>
                <option value="ded">D.ED</option>
                <option value="bed">B.ED</option>
                <option value="btc">BTC</option>
                <option value="ntt">NTT</option>
              </select>
            </div>

            <div className="col-2 form-group position-relative submit_wrapper">
            <div className="circle_right"/>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </div>
            
          </div>
        </form>
    </div>
  );
};

export default QuickRegistrationForm;
