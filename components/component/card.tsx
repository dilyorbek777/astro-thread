
import { Card } from "@/components/ui/card"
import { Button } from "../ui/button"
import CustomImage from "../site/customImage"
import Link from "next/link"

export function CustomCard({ link, p_time, title, site_name, image, category }: {
  link: string
  p_time: string
  title: string
  site_name: string
  image: string
  category: string
}) {
  return (
    <Card className="w-full max-w-lg overflow-hidden">
      <div className="grid grid-cols-[1fr_200px] gap-6">
        <div className="space-y-2 p-1 flex flex-col justify-evenly pl-4 items-start">
          <div className="text-xs text-gray-500 dark:text-gray-400">{p_time}</div>
          <h3 className="text-2xl font-bold">{title}</h3>

          <div className="text-sm text-gray-500 dark:text-gray-400">{site_name}</div>
          <Link href={`${category}/${link}`}>
            <Button aria-label="To read More">Read more</Button>
          </Link>
        </div>

        <CustomImage alt="Article cover image" img={image} classname="aspect-[1/1.25] overflow-hidden rounded-lg object-cover h-full w-[200px]" />
      </div>
    </Card>
  )
}

// create a fresh  and modern card component with published_at, summary, site name, image, title contents