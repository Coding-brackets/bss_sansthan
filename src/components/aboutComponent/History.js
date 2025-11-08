import React from 'react'

const History = ({image, heading, description}) => {
  return (
    <div className='mb-100'>
      <div className='container'>
        <div className='row'>
        <div className='col-md-6'>
            <img
            src={image}
            alt={heading}
            className="w-100 legacy_img rounded-3"
          />
        </div>
        <div className='col-md-6 align-items-center'><div>
            <h2 className="section_heading mb-3">{heading}</h2>
            {description.map((para, index) => (
              <p key={index} className="section_para mb-4">
                {para}
              </p>
            ))}
            </div>
        </div>
         </div>
      </div>
    </div>
  )
}

export default History
