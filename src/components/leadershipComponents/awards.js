import React from 'react'

const Awards = () => {

    const cards = [
    {
      img: "/assets/award1.png",
      text: "Ranked 2nd in India among both Government and Private Universities",
      color: "#FF77654D",
      iconBg: "#FF7765",
    },
    {
      img: "/assets/award2.png",
      text: "Ranked 2nd in India among both Government and Private Universities",
      color: "#D2EDFF",
      iconBg: "#289EEE",
    },
    {
      img: "/assets/award3.png",
      text: "Ranked 2nd in India among both Government and Private Universities",
      color: "#E6F8AF",
      iconBg: "#9CC71A",
    },
  ];
  return (
    <div className='mb-100'>
    <div className='container'>
    <h2 className="sec_heading  mb-5">
        A university decorated with awards & accreditations
        </h2>

        <div className="about_row justify-content-center">
          {cards.map((card, index) => (
            <div className=" p-0" key={index}>
              <div
                className={`highlight-card awardCard text-center h-100 card-${index}`}
                style={{ backgroundColor: card.color }}
              >
               <img src={card.img} alt='awardImg' className='mb-3'/>
                <p className="mb-0 about_card_para" style={{ fontWeight:"500", }}>{card.text}</p>
              </div>
            </div>
          ))}
        </div>


    </div>
    </div>
  )
}

export default Awards
