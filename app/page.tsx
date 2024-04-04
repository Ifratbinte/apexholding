import Certification from '@/components/pages/Home/Certification'
import Hero from '@/components/pages/Home/Hero'
import Segments from '@/components/pages/Home/Segments/index'
import KeyStrength from '@/components/pages/Home/Strength'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <Segments/>
      <KeyStrength/>
      <Certification/>
    </div>
  )
}

export default HomePage