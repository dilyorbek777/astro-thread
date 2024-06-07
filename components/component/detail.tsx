
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import CustomImage from "../site/customImage"
import Link from "next/link"

export function Detail({tr}:{
  tr:News
}) {
  return (
    <div className="flex  flex-col items-center justify-center man-h-screen bg-background px-4 md:px-6">
      <div className="max-w-[1440px] w-full rounded-lg shadow-lg overflow-hidden">
        <div className="md:grid md:grid-cols-2">
          <div className="relative">
            
            <CustomImage alt={tr.title} classname="w-full h-full object-cover" img={tr.image_url}  />
              
          </div>
          <div className="p-8 md:p-12 flex items-start justify-center flex-col space-y-6">
            <div>
              <span>{`${tr.published_at.split('T')[0]} ${tr.published_at.split('T')[1].split("Z").join("")}`}</span>
              <h2 className="text-2xl md:text-3xl font-bold">{tr.title}</h2>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                {tr.summary}
              </p>
            </div>
       
            <div>
              <h3 className="text-xl font-bold">From <Link href={tr.url} className="underline underline-offset-2" target="_blank"> {tr.news_site}</Link></h3>

            </div>
  
          </div>
        </div>
      </div>
    </div>
  )
}
