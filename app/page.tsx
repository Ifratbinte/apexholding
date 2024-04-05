import About from '@/components/pages/Home/About'
import Career from '@/components/pages/Home/Career'
import Certification from '@/components/pages/Home/Certification'
import Hero from '@/components/pages/Home/Hero'
import Gallery from '@/components/pages/Home/Lightbox/gallery'
import Segments from '@/components/pages/Home/Segments'
import KeyStrength from '@/components/pages/Home/Strength'
import VideoBlog from '@/components/pages/Home/Video'
import React from 'react'

const HomePage = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Segments/>
      <KeyStrength/>
      <Certification/>
      <Gallery/>
      <VideoBlog/>
      <Career/>
    </div>
  )
}

export default HomePage