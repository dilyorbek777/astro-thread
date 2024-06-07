"use client"


import Link from "next/link"
import { Button } from "@/components/ui/button"
import Logo from "../site/logo"
import { Tally2 } from "lucide-react"
import { useState } from "react"

import { usePathname } from "next/navigation";


const links = [
  { name: "Blogs", href: "/blogs" },
  { name: "Articles", href: "/articles" },
  { name: "Reports", href: "/reports" },
  { name: "Contact us", href: "/contact" },
]


export function Navbar() {

  const pathname = usePathname();

  const [open, setOpen] = useState(false)
  return (
    <nav className="bg-background/70 z-50 max-sm:w-full max-sm:border-0 max-sm:top-0  text-white py-3 fixed w-10/12 border-t border-teal-50/50 left-1/2  rounded-xl -translate-x-1/2 top-5 shadow-lg shadow-foreground/20">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <div className="flex items-center">
          <Logo />
        </div>
        <div className={open ? "flex flex-col -z-10 max-lg:flex absolute w-full left-0 top-0 h-screen items-center justify-center gap-5 text-2xl bg-background/70" : "flex items-center gap-10 max-lg:hidden"}>

          {links.map((l) => {
            const isActive = pathname.startsWith(l.href)

            return (

              <Link onClick={() => setOpen(false)} className={isActive ? "font-bold tracking-wide underline underline-offset-8" : "font-bold tracking-wide "} href={l.href} key={l.href} >
                {l.name}
              </Link>
            )
          })}


        </div>
        <Button aria-label="Bar menu" className="rotate-90  p-0 pl-2 lg:hidden" onClick={() => setOpen(!open)}>
          <Tally2 strokeWidth={1.75} />
        </Button>
        
      </div>
      
    </nav>
  )
}

function CompassIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
    </svg>
  )
}


function PhoneIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}
