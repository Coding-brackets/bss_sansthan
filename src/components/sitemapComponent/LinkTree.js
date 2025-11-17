import React from 'react'
import styles from '../../styles/Tree.module.css'

const LinkTree = () => {
  return (
    <div className="container py-5">
      {/* Home */}
      <div className="text-center mb-4">
        <button className={`${styles.mainBtn}`}>Home</button>
      </div>

      {/* Main categories */}
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

      {/* Sub Tree */}
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

      {/* Long Tree List */}
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
      </div>
    </div>
  )
}

export default LinkTree;
