'use client'

import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { BREAKPOINTS } from '@/app/_lib/constant/breakpoints'
import { Scrollbar } from 'swiper/modules'
import Image from 'next/image'

import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function Featured() {
  return (
    <>
      <section className="our-favorites-section">
        <div className="container">
          <div className="our-favorites-wrapper">
            <h1 className="main-heading">Our Favorites</h1>
            <Swiper
              scrollbar={{
                hide: true,
              }}
              modules={[Scrollbar]}
              navigation={{
                prevEl: '.btn-prev-style-filters',
                nextEl: '.btn-next-style-filters',
              }}
              spaceBetween={20}
              slidesPerView={1.5}
              centeredSlides={true}
              centeredSlidesBounds={true}
              centerInsufficientSlides={true}
              breakpoints={{
                [BREAKPOINTS['2XL']]: {
                  slidesPerView: 4,
                },
                [BREAKPOINTS['XL']]: {
                  slidesPerView: 4,
                },
                [BREAKPOINTS['LG']]: {
                  slidesPerView: 4,
                },
                [BREAKPOINTS['MD']]: {
                  slidesPerView: 3,
                },
                [BREAKPOINTS['SM']]: {
                  slidesPerView: 2,
                },
              }}
            >
              {[
                {
                  image: '/uploads/images/products/product-3.jpg',
                  alt: 'favorite-product',
                  name: 'Rose Gold Rings',
                  link: '/rose-gold-engagement-rings/',
                },
                {
                  image: '/uploads/images/products/product-4.jpg',
                  alt: 'favorite-product',
                  name: 'Oval Rings',
                  link: '/oval-engagement-rings/',
                },

                {
                  image: '/uploads/images/products/product-2.jpg',
                  alt: 'favorite-product',
                  name: 'Cushion-cut Rings',
                  link: '/cushion-cut-engagement-rings/',
                },
                {
                  image: '/uploads/images/products/product-1.jpg',
                  alt: 'favorite-product',
                  name: 'Princess-cut Rings',
                  link: '/princess-cut-engagement-rings/',
                },
              ].map((favorite, index) => (
                <SwiperSlide key={index}>
                  <Link
                    href={favorite.link}
                    title={favorite.name}
                    className="group zoom-image"
                    prefetch={false}
                  >
                    <div className="product-container">
                      <Image
                        src={favorite.image}
                        loading="eager"
                        layout="fill"
                        quality={100}
                        alt={favorite.alt}
                      />
                    </div>
                    <div
                      className="product-name transition-all group-hover:font-bold make-bold-props"
                      title={favorite.name}
                    >
                      {favorite.name}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  )
}
