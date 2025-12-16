import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="container-fluid mb-100">
      <div className="hero_section my-40">
        <div className="row heroBanner position-relative">
          {/* Left content */}
          <div className="col-md-6 p-0 d-flex align-items-center">
            <div className="hero_content cust_p-80">

              <h1>
                Meet the Visionaries Behind BSS
              </h1>
              <p className='heroParaBold'>A team of educators and professionals, who drive the growth of BSS, since 2002. </p>

              <p>
               Each faculty member has academic excellence and research-driven leadership quality. Through advanced technological integration, the team cultivates future-ready work professionals. With unwavering dedication to core ethics, the leadership ecosystem empowers students to redefine standards in the fields of Administration, Law & Medical Science, building a transformative foundation for holistic education and community advancement.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="col-md-6  heroImgSec d-flex align-items-stretch">
              <Image src="/assets/ourLeaders.jpg" alt="Hero" className="subHero_image w-100 h-auto" width={1000} height={1000} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
