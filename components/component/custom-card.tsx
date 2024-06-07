
import { CardContent, Card } from "@/components/ui/card"
import CustomImage from "../site/customImage"
import Link from "next/link"
import { Button } from "../ui/button"

export function CustomCard({ link, p_time, title, site_name, image, category, text }: {
  link: string
  p_time: string
  title: string
  site_name: string
  image: string
  category: string,
  text: string
}) {
  return (
    <Link href={`${category}/${link}`}>
      <Card className="w-full max-w-md overflow-hidden mx-auto">

        <CustomImage alt={title} img={image} classname="h-[200px] w-full object-cover " />

        <CardContent className="px-6 py-4 flex flex-col justify-evenly space-y-2">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{site_name}</span>
            <span>•</span>
            <span>{`${p_time.split('T')[0]} ${p_time.split('T')[1].split("Z").join("")}`}</span>
          </div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-gray-500 dark:text-gray-400">{text}
          </p>
          {/* <Button>Read more</Button> */}
        </CardContent>
      </Card>
    </Link>
  )
}
