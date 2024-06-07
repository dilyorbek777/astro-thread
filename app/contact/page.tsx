
import { Contact } from '@/components/component/contact'
import React from 'react'


export const metadata = {
    title: 'Astro thread | Contact',
  }

export default function ContactPage() {
    return (
        <div className='h-screen flex items-center justify-center bg-background max-lg:flex-col'>
            <Contact />
            <iframe
          width="50%"
          height="100%"
          title="map"
          className='max-lg:hidden'
          scrolling="no"
          src="https://maps.google.com/maps?q=39.634892,66.913756&ll=39.634892,66.913756&z=16&output=embed"
          style={{ filter: "invert(90%)" }}
        />
        </div>
    )
}
