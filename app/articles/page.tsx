
import { CustomCard } from '@/components/component/custom-card'
import React from 'react'


export const metadata = {
    title: 'Astro thread | Articles',
}

export default async function ArticlesPage() {
    const res = await fetch("https://api.spaceflightnewsapi.net/v4/articles/?limit=15").then(r => r.json())
    const data: News[] = await res.results


    return (
        <div className='pt-20 bg-background'>
            <section className="py-12 md:py-20 lg:py-28 bg-background">
                <div className="container">
                    <div className="mb-10 text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Discover Our Articles</h2>

                    </div>
                    <div className="grid grid-cols-1 gap-6 justify-center w-full sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {data.map((i, il) => (
                            <CustomCard
                                key={il}
                                text={`${i.summary.slice(0, 80)}...`}
                                category="articles"
                                image={i.image_url}
                                link={i.id.toString()}
                                title={`${i.title.slice(0, 50)}...`}
                                p_time={i.published_at}
                                site_name={i.news_site} />

                        ))}
                    </div>
                </div>
            </section></div>
    )
}
