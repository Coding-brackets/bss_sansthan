import Image from 'next/image'
import React from 'react'

const CollegeGallery = ({ para}) => {
  return (
    <div className='mb-80'>
      <div className='container'>
       <h2 className="section_heading text-center mb-2">Our Gallery</h2>
        <p className="section_para text-center mb-5">
         {para}
        </p>

        
<div class="parent">
    <div class="gallerySec1"><Image src="" alt='' width={1000} height={1000}/></div>
    <div class="gallerySec2"><Image src="" alt='' width={1000} height={1000}/></div>
    <div class="gallerySec3"><Image src="" alt='' width={1000} height={1000}/></div>
    <div class="gallerySec4"><Image src="" alt='' width={1000} height={1000}/></div>
    <div class="gallerySec5"><Image src="" alt='' width={1000} height={1000}/></div>
</div>
    

      </div>
    </div>
  )
}

export default CollegeGallery
