import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
    return (
        <Link href={'/'} className="font-bold text-lg flex gap-2 items-center justify-center">
            <Image src={'/logo.png'} width={500} height={500} alt="logo" className="w-16" />
            <span className='max-[450px]:hidden'>AstroThread</span></Link>
    )
}
