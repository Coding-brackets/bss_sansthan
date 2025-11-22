import Image from 'next/image'
import React from 'react'


const Rankings = () => {
  return (
    <div className="container-fluid mb-100 p-0">
    <div className="my-40 rankings_banner">
    <h2 className='text-center'>Proudly Distinguished <span className='fw-bold'>by Our Prestigious
Rankings and Accreditations</span></h2>
<p className='text-center'>BSS is recognized for excellence in healthcare education and clinical research. The institution’s programs are known for their rigorous academic standards and strong focus on community health. Through quality teaching and dedicated service, BSS continues to set benchmarks in nursing and allied health sciences.</p>
     <Image src="/assets/ranking_img.png" alt='' className='w-100 h-100' width={1000} height={1000}/>
    </div>
    </div>
  )
}

export default Rankings
