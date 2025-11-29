import Image from 'next/image'
import React from 'react'

const WhyJoinUs = ({image, features, subHeading}) => {
  return (
    <div className='container mb-80'>
    <div className='row'>
        <div className='col-md-6 align-items-center d-flex'>
        <div>
            <h2 className="section_heading mb-2">Why Join us</h2>
        <p className="section_para mb-4">
          {subHeading}
        </p>
        <div className='whyChoose-con-feature mb-3'>
         {features.map((item, index) => (
          <div className={` w-100 whyChoose whyChoose-${index}`} key={index}>
            <div className="feature-box">
              <h3 className="feature-number">
                {String(index + 1).padStart(2, "0")}
              </h3>

              <h4 className="feature-title">{item.title}</h4>

              <p className="feature-desc">{item.description}</p>
            </div>
          </div>
        ))}
        </div>
        </div>
        </div>
        <div className='col-md-6'>
            <Image src={image} className='w-100 h-100' alt='' width={1000} height={1000}/>
        </div>
    </div>
      
    </div>
  )
}

export default WhyJoinUs
