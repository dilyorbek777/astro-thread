import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

export default async function MarqueeSlider() {
  const cte = await fetch("https://api.spaceflightnewsapi.net/v4/info/").then(
    (r) => r.json()
  );
  console.log(cte);

  return (
    <div className="w-full bg-background">
      <div className="wu-max flex-center flex-col gap-10">

        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-foreground">Our articles come from</h1>
        {/* <div className="w-80 h-1 rounded-full bg-primary" /> */}
        <Marquee className="py-7">
          {cte.news_sites.map((c: string) => (
            <p className="flex items-center gap-3 text-base uppercase hover:scale-125 transition-all mx-16" key={c}>{c}</p>
          ))}
        </Marquee>
      </div>
    </div>
  );
}