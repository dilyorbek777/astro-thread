import { CardsBlock } from '@/components/component/cards-block'
import { Detail } from '@/components/component/detail'
import React from 'react'


import { Metadata } from "next"
type Props = { params: { bid: string } }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const res: News = await fetch('https://api.spaceflightnewsapi.net/v4/blogs/' + params.bid, { cache: "no-store" }).then(d => d.json())



    return {
        title: {
            absolute: `${res.title} ` // absolute applies the only absolute title of page
        },

        metadataBase: new URL(`https://astro-thread.vercel.app/articles/${params.bid}`),
        description: `${res.summary}`, // description
        authors: [
            { name: 'Dilyorbek Asfandiyorov', url: 'https://astro-thread.vercel.app/' },
        ],

         keywords:
            `dilyorbekdev, depo,  programming, payment, depo pay, depopay, depo-pay, primepay, prime-pay, prime, pay, dilyorbek asfandiyorov, depohub, DEPOPAY, e-wallet, is, a, modern, payment, tool, ${res.summary.split(" ").join(', ')} `,
        openGraph: {

            countryName: 'Uzbekistan',
            siteName: `Astro thread `,
            emails: 'dilyorbekdev@gmail.com',
            title: `Astro thread | ${res.title}`,
            description:
                `${res.summary}`,
            type: 'website',
            url: `https://astro-thread.vercel.app/articles/${params.bid}`,
            locale: 'en_EN',
            images: `${res.image_url}`,
        },
        creator: 'Dilyorbek Asfandiyorov',
        publisher: 'DEPO ',

    }
}


export default async function Bid({ params }: { params: { bid: string } }) {

    const data: News = await fetch(`https://api.spaceflightnewsapi.net/v4/blogs/${params.bid}`).then(r => r.json())


    return (
        <div className='pt-32 bg-background'>
            <Detail tr={data} />
            <CardsBlock />
        </div>
    )
}
