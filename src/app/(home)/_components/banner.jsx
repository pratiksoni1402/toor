'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link'
import './../style.css'
export default function Banner() {
  const FADE_UP_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring" } },
  };
  return (
    <div className="homepage-banner">
      <section>
        <div className="grid grid-cols-1">
          <div className="flex grid-col">
            <div className="hero-image relative ">
              <Image
                priority={true}
                src='/uploads/images/homepage/homepage-banner.jpeg'
                fill
                style={{ objectFit: "cover" }}
                quality={100}
                
                alt="SHOP ENGAGEMENT RINGS"

              />
            </div>
          </div>
          <div className="banner-detail ">
            <motion.div
              initial="hidden"
              animate="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              <motion.h1
                className="heading"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                A New Beginning
              </motion.h1>
              <motion.p
                className="description"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                Celebrate your past, present, and future with a timeless piece of jewelry from SS Jewels.

              </motion.p>
              <motion.div
                className="mx-auto flex items-center justify-center space-x-5"
                variants={FADE_UP_ANIMATION_VARIANTS}
              >
                <Link href='/engagement-ring' className="engagement-rings">Shop Engagement Rings</Link>
              </motion.div>
            </motion.div>

          </div>
        </div>

      </section>
    </div>
  )
}