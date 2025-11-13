import React from 'react'

const CollegeGallery = ({ para}) => {
  return (
    <div className='mb-80'>
      <div className='container'>
       <h2 className="section_heading text-center mb-2">Our Gallery</h2>
        <p className="section_para text-center mb-5">
         {para}
        </p>

      </div>
    </div>
  )
}

export default CollegeGallery
