import React from 'react'
import  '../../styles/Tree.module.css'

const LinkTree = () => {
  return (
    <div className="container">

    <div className="sitemap-container ">
  <ul className="tree d-flex">
    <li>
      <div className="node main">Home</div>
      <ul>

        <li>
          <div className="node">Gallery</div>
        </li>

        <li>
          <div className="node">About</div>
          <ul>
            <li><div className="node">About Us</div></li>
            <li><div className="node">Our Leadership</div></li>
          </ul>
        </li>

        <li>
          <div className="node">Our Institutions</div>
          <ul>
            <li><div className="node">Colleges</div>
            <ul>
              <li><div className="node small">Pooja Nursing College</div></li>
            <li><div className="node small">Bhagyashri Bhondekar Ayurvedic College</div></li>
            <li><div className="node small">Bhagyashri Physio College</div></li>
            <li><div className="node small">Bhagyashri Medical College</div></li>
            <li><div className="node small">PES Multispeciality Hospital</div></li>
            <li><div className="node small">Manjubai BA/MA College</div></li>
            <li><div className="node small">Dr. Babasaheb Ambedkar School</div></li>
            <li><div className="node small">Universal BA College</div></li>
            <li><div className="node small">Sant Gadge Baba School</div></li>
            <li><div className="node small">Swayamsevi Janmubai School</div></li>
            <li><div className="node small">Swayamsevi Janmubai College</div></li>
            </ul></li>
            <li><div className="node">Hospitals</div></li>
            <li><div className="node">Research & Training Center</div></li>
            <li><div className="node">Specially Abled Support</div></li>
          </ul>
        </li>

        <li><div className="node">Admissions</div></li>
        <li><div className="node">Infrastructure & Facilities</div></li>
        <li><div className="node">Career</div></li>
        <li><div className="node">News & Events</div></li>
        <li><div className="node">Contact Us</div></li>

      </ul>
    </li>
  </ul>
</div>

      {/* <div className="text-center mb-4">
        <button className={`${styles.mainBtn}`}>Home</button>
      </div>

      <div className="d-flex justify-content-center gap-3 flex-wrap">
        {[
          "Gallery",
          "About",
          "Our Institutions",
          "Admissions",
          "Infrastructure & Facilities",
          "Career",
          "News & Events",
          "Contact Us",
        ].map((item, index) => (
          <div key={index} className={styles.topItem}>
            <span className={styles.arrow}></span>
            <button className={styles.topBtn}>{item}</button>
          </div>
        ))}
      </div>

    
      <div className="row mt-5 justify-content-center">
        <div className="col-md-3">
          <div className={styles.subBox}>
            <span className={styles.arrow}></span>
            About Us
          </div>
          <div className={styles.subBox}>
            <span className={styles.arrow}></span>
            Our Leadership
          </div>
        </div>

        <div className="col-md-3">
          <div className={`${styles.subBox} mb-2`}>
            <span className={styles.arrow}></span>
            Colleges
          </div>
          <div className={styles.subBox}>
            <span className={styles.arrow}></span>
            Hospitals
          </div>
          <div className={styles.subBox}>
            <span className={styles.arrow}></span>
            Research & Training Center
          </div>
          <div className={styles.subBox}>
            <span className={styles.arrow}></span>
            Specially Abled Support
          </div>
        </div>
      </div>

     
      <div className="col-md-4 mx-auto mt-4">
        {[
          "Pooja Nursing College",
          "Bhagyashri Bhondekar Ayurvedic College",
          "Bhagyashri Bhondekar Physiotherapy",
          "Bhagyashri Bhondekar Medical College",
          "PES Multispeciality Hospital",
          "Manjubai BA/MA College, Bhawani",
          "Dr. Babasaheb Ambedkar Mosa Mahavidyalaya School",
          "Universal BA College",
          "Sant Gadge Baba Madhyamik Shala",
          "Swayamsevi Janmubai Madhyamik Shala",
          "Swayamsevi Janmubai Bhondekar College",
        ].map((item, index) => (
          <div key={index} className={styles.listBox}>
            <span className={styles.arrow}></span>
            {item}
          </div>
        ))}
      </div> */}
    </div>
  )
}

export default LinkTree;
