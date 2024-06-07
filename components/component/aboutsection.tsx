
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import CustomImage from "../site/customImage"
import Link from "next/link"

export async function AboutSection() {
  const data = await fetch("https://api.spaceflightnewsapi.net/v4/blogs/?limit=3").then(r => r.json())
  const res: News[] = await data.results

  return (
    <main className="flex flex-col min-h-[100dvh] bg-background">
      <section className="w-full py-12 md:py-24 lg:py-32 ">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] max-lg:text-center lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold max-lg:mx-auto tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Cosmic news aggregator
                </h1>
                <p className="max-w-[600px] max-lg:mx-auto text-gray-500 md:text-xl dark:text-gray-400">
                  Stay up-to-date on the latest developments in space and astronomy with the AstroThread
                </p>
              </div>
              
            </div>

            <CustomImage alt="about us" classname="mx-auto max-md:w-full aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square" img="/cim.png" />
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800 saturate-150 shadow-sm shadow-foreground">Key Features</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our blogs</h2>
              <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Dive into in-depth articles, watch informative videos, and follow breaking news as it happens.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
            <CustomImage alt="Our blogs"
              img="/blogs.png" classname="mx-auto h-full aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last" />

            <div className="flex flex-col justify-center space-y-4">
              <ul className="grid gap-6">
                {res.map((item, index) => (
                  <Link href={'/blogs/' + item.id.toString()} className="hover:bg-foreground/20 p-2 rounded-lg transition-all" key={index}>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">{item.title.slice(0, 40)}...</h3>
                      <p className="text-gray-500 dark:text-gray-400">
                        {item.summary.slice(0, 90)}...
                      </p>
                    </div>
                  </Link>
                ))}


              </ul>
            </div>

          </div>
        </div>
      </section>
   
    </main>
  )
}
