import SubPagesHero from '@/components/commonComponents/SubPagesHero'
import NewsSec from '@/components/newsComponent/NewsSec'
import TopNewsSec from '@/components/newsComponent/TopNewsSec'
// import TopNews from '@/components/newsComponent/TopNews'
import React from 'react'

const news = () => {
  return (
    <div>
    <SubPagesHero
        heading="News"
        description="The latest industry news, interviews, technologies, and resources."
        bgImage="/assets/heroImages/hero-background.webp"
    />
    <NewsSec/>
      
    </div>
  )
}

export default news



