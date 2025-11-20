
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
       { label: "Pooja Nursing College", url: "/colleges/pooja-Nursing-college" },
       { label: "Bhagyashri Bhondekar Ayurvedic College", url: "/colleges/bb-ayurvedic-college" },
       { label: "Bhagyashri Bhondekar Physiotherapy", url: "/colleges/bb-physiotherapy-college" },
       { label: "Bhagyashri Bhondekar Medical College", url: "/colleges/bb-medical-college" }
    ]
  }}
    />

    <SocityInsideComponent
        image="/assets/hospital.jpg"
        heading="Hospitals"
        para="BSS, Bhandara, since 2002, is a trusted name in medical and nursing education."
       institute={{
    buttonItem: [
      { label: "PES Multispeciality Hospital, Sirsi", url: "/colleges/pes-multispeciality-hospital" }
      
    ]
  }}
    />

    <SocityInsideComponent
        image="/assets/non-medical.png"
        heading="Medical"
        para="BSS, Bhandara, since 2002, is a trusted name in medical and nursing education."
       institute={{
    buttonItem: [
      { label: "Manjubai BA/MA College, Bhawani", url: "/colleges/manju-bai-college" },
      { label: "Dr. Babasaheb Ambedkar Mosa Mahavidyalaya School, Kegawade", url: "/colleges/dr-babasaheb-aambedkar-niwasi-matimand-school" },
      { label: "Universal BA College, Nerla", url: "/colleges/universal-ba-college" },
      { label: "Sant Gadge Baba Madhyamik Shala, Nerla", url: "/colleges/sant-gadge-baba-madhyamik-shala" },
      { label: "Swayamsevi Janmubai Madhyamik Shala, Umri, Navegaon Bandh", url: "/colleges/swayamsevi-janmubai-madhyamik-shala" },
      { label: "Swayamsevi Janmubai Bhondekar College, Umri, Navegaon Bandh", url: "/colleges/swayamsevi-janmubai-bhondekar-college" },
    ]
  }}
    />
    </div>
  )
}

export default socity
