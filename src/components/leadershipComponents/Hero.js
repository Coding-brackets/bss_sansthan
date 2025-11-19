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
              <p className='heroParaBold'>A team of educators, clinicians, professionals and innovators, who drive the growth of BSS, since 2002.</p>

              <p>
                Each faculty member has academic excellence, clinical expertise and research-driven leadership quality. Through advanced pedagogy and technological integration, the team cultivates future-ready healthcare professionals. With unwavering dedication to ethics, precision, and innovation, the leadership ecosystem empowers students to redefine standards in nursing & medicine, building a transformative foundation for holistic healthcare education and community advancement.
              </p>
            </div>
          </div>

          {/* Right image */}
          <div className="col-md-6  heroImgSec d-flex align-items-stretch">
              <img src="/assets/ourLeaders.jpg" alt="Hero" className="subHero_image w-100" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
