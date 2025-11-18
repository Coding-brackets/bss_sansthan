
import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import Facilities from '@/components/infrastructure/Facilities'
import React from 'react'

const Infrastructure = () => {
  return (
    <div>
      <SubPagesHero
        heading="Infrastructure & Facilities"
        description="Our organization takes pride in offering a modern and inclusive environment that supports academic excellence, healthcare innovation, and overall student growth. Every corner of our campus is designed to inspire learning, discovery, and well-being."
        bgImage="/assets/heroImages/hero-background.webp"
    />
    <Facilities/>

    </div>
  )
}

export default Infrastructure