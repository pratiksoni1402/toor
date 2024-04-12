'use client'
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link'
import './../style.css'
export default function Banner(){
  return(
    <div className="homepage-banner">
      <section>
        <div className="grid grid-cols-1">
          <div className="flex grid-col">
            <div className="hero-image relative ">
              <Image
                priority={true}
                src='/uploads/images/homepage/homepage-banner.jpeg'
                fill
                style={{objectFit:"cover"}}
                quality={100}
                alt="SHOP ENGAGEMENT RINGS"

              />
            </div>
          </div>
          <div className="banner-detail ">
            <h1 className="heading">A New Beginning</h1>
            <p className="description">
              Celebrate your past, present, and future with a timeless piece of jewelry from SS Jewels.
            </p>
            <Link href='/engagement-ring' className="engagement-rings">Shop Engagement Rings</Link>
          </div>
        </div>

      </section>
    </div>
  )
}