import { CardsBlock } from '@/components/component/cards-block'
import { Detail } from '@/components/component/detail'
import { Metadata } from 'next'
import React from 'react'


type Props = { params: { rid: string } }

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
    const res: News = await fetch('https://api.spaceflightnewsapi.net/v4/reports/' + params.rid, { cache: "no-store" }).then(d => d.json())



    return {
        title: {
            absolute: `${res.title} ` // absolute applies the only absolute title of page
        },

        metadataBase: new URL(`https://astro-thread.vercel.app/articles/${params.rid}`),
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
            url: `https://astro-thread.vercel.app/articles/${params.rid}`,
            locale: 'en_EN',
            images: `${res.image_url}`,
        },
        creator: 'Dilyorbek Asfandiyorov',
        publisher: 'DEPO ',

    }
}


export default async function Rid({ params }: { params: { rid: string } }) {

    const data: News = await fetch(`https://api.spaceflightnewsapi.net/v4/reports/${params.rid}`).then(r => r.json())


    return (
        <div className='pt-32 bg-background'>
            <Detail tr={data} />
            <CardsBlock />
        </div>
    )
}
