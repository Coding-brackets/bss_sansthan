import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Mentors = ({heading, img}) => {
  return (
    <div className="cust_mentor_pad">
    <div className='mentor_banner'>
    <div className="container  position-relative "> 
      <div className="mentor_sec">
        <div className="mentor_conBanner">
          <h2 className="section_heading mb-3">{heading}</h2>
          
          <Link href="/leadership" className="custom_meet_btn">Meet Now! <ArrowUpRight  className="ms-2"/></Link>
        </div>

        <div className="founder_img_sec">
          <div className="img-wrapper">
          <div className='image_inner'>
            <img src={img} alt="Founder" className='w-100'/>
            <img src="/assets/flower1.png" alt="Founder" className='flower1 position-absolute'/>
            <img src="/assets/flower2.png" alt="Founder" className='flower2 position-absolute'/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
    </div>
    <div className='mentors_img mb-100'>
    <img src='/assets/mentor1.png' alt=''/>
    <img src='/assets/mentor2.png' alt=''/>
    <img src='/assets/mentor3.png' alt=''/>
    </div>
    
    </div>
  )
}

export default Mentors
