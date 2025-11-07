import React from 'react'
// import college from '../../assets/college.jpg'


const SubPagesHero = () => {
  return (
    <div className="container-fluid mb-100">
    <div className='my-40 hero_section p-80 heroBanner1'>
   {/* <img src={college} alt='' className='w-100 position-relative' /> */}
        <div className='hero_content w-75 m-auto text-center'>
         
              <h1 className='mb-4 text-white'>
                About Us
              </h1>

              <p className='text-white'>
                BSS is a progressive educational and social organization working towards transforming lives through quality education, advanced healthcare, employment opportunities and community service. With a network of colleges and hospitals, it empowers students with knowledge and innovation, shaping responsible citizens for a brighter, self-reliant tomorrow.
              </p>
        </div>
    </div>
      
    </div>
  )
}

export default SubPagesHero

