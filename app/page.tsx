import { AboutSection } from '@/components/component/aboutsection'
import { CardsBlock } from '@/components/component/cards-block'
import { Hero } from '@/components/component/hero'
import MarqueeSlider from '@/components/site/marquee'
import React from 'react'

export default function Home() {
  return (
    <div className='bg-background space-y-9'>
      <Hero />
      <CardsBlock />
      <AboutSection />
      <MarqueeSlider />
      
    </div>
  )
}
