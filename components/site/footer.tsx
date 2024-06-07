import React from 'react'
import Logo from './logo'
import Link from 'next/link'

export default function Footer() {
    const dtae = new Date()
    const year = dtae.getFullYear()
    return (
        <footer className="text-foreground bg-background body-font">
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Logo />
                <p className="text-sm text-foreground font-bold sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© {year} DEPO —
                    <Link href="https://t.me/developer_23_05" className="text-foreground ml-1" rel="noopener noreferrer" target="_blank">@developer_23_05</Link>
                </p>
         
            </div>
        </footer>
    )
}
