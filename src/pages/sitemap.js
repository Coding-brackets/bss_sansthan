import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import LinkTree from '@/components/sitemapComponent/LinkTree'
import React from 'react'

const Sitemap = () => {
  return (
    <div>
    <SubPagesHero 
         heading="Sitemap"
        description="An overview of our institution and its branches dedicated to education, healthcare, and service"
        bgImage="/assets/heroImages/hero-background.webp"
    />

    <LinkTree/>
      
    </div>
  )
}

export default Sitemap
