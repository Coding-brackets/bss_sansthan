import Awards from '@/components/leadershipComponents/awards'
import Founders from '@/components/leadershipComponents/Founders'
import Hero from '@/components/leadershipComponents/Hero'
import LeaderShip from '@/components/leadershipComponents/LeaderShip'
import React from 'react'

const leadership = () => {
  return (
    <div>
      <Hero/>
      <Founders/>
      <LeaderShip/>
      <Awards/>
    </div>
  )
}

export default leadership
