
import { Button } from "@/components/ui/button"

import CustomImage from "../site/customImage"

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24  lg:py-32 h-screen flex flex-col justify-center bg-background ">
      <div className="container px-4 md:px-6 ">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4 text-white">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-normal sm:text-5xl xl:text-6xl/none">
                Comprehensive <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-300">cosmic news</span> compendium.
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl">
                Your all-encompassing hub for the latest developments in space exploration and astronomical discovery.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button aria-label="Hero sectin button 1" variant={'default'}>Become a partner</Button>
              <Button aria-label="Hero sectin button 2" variant={'secondary'}>Learn More</Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute top-0 right-0 h-full w-full  overflow-hidden">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="animate-float-up-down relative h-[400px] w-[400px] rounded-full bg-gradient-to-r from-[#5C6BC0] to-[#7986CB] opacity-50 blur-3xl" />
              </div>
              <div className="absolute top-1/4 left-1/4 animate-float-up-down h-[200px] w-[200px] rounded-full bg-gradient-to-r from-[#9FA8DA] to-[#C5CAE9] opacity-50 blur-2xl" />
              <div className="absolute bottom-1/4 right-1/4 animate-float-left-right h-[150px] w-[150px] rounded-full bg-gradient-to-r from-[#7986CB] to-[#9FA8DA] opacity-50 blur-2xl" />
            </div>
          
            <CustomImage alt="Hero" classname="mx-auto max-lg:hidden aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square  object-cover opacity-65 bg-blend-multiply" 
             img="/hm.png" />
          </div>
        </div>
      </div>
    </section>
  )
}
