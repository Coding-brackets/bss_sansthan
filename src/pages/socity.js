
import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import SocityInsideComponent from '@/components/socity/socityInsideComponent'
import React from 'react'

const socity = () => {
  return (
    <div>
       <SubPagesHero
        heading="Our Organization BSS"
        description="An overview of our institution and its branches dedicated to education, healthcare, and service"
        bgImage="/assets/heroBackground.png"
    />

    <SocityInsideComponent
        image="/assets/medical.png"
        heading="Medical Institution"
        para="BSS, Bhandara, since 2002, is a trusted name in medical and nursing education."
       institute={{
    buttonItem: [
      "Pooja Nursing College",
      "Bhagyashri Bhondekar Ayurvedic College",
      "Bhagyashri Bhondekar Physiotherapy",
      "Bhagyashri Bhondekar Medical College"
    ]
  }}
    />

    <SocityInsideComponent
        image="/assets/hospital.jpg"
        heading="Hospitals"
        para="BSS, Bhandara, since 2002, is a trusted name in medical and nursing education."
       institute={{
    buttonItem: [
      "PES Multispeciality Hospital, Sirsi"
    ]
  }}
    />

    <SocityInsideComponent
        image="/assets/non-medical.png"
        heading="Medical"
        para="BSS, Bhandara, since 2002, is a trusted name in medical and nursing education."
       institute={{
    buttonItem: [
      "Manjubai BA/MA College, Bhawani",
      "Dr. Babasaheb Ambedkar Mosa Mahavidyalaya School, Kegawade",
      "Universal BA College, Nerla",
      "Sant Gadge Baba Madhyamik Shala, Nerla",
      "Swayamsevi Janmubai Madhyamik Shala, Umri, Navegaon Bandh",
      "Swayamsevi Janmubai Bhondekar College, Umri, Navegaon Bandh"
    ]
  }}
    />
    </div>
  )
}

export default socity
