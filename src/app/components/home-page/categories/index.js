// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import LazyImage from '@/app/components/lazy-loading/lazy-image';
import Link from 'next/link';
import 'swiper/css';
export default function Categories() {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={5}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      autoplay={{ pauseOnMouseEnter: true }}
      breakpoints={{
        280: {
          width: 280,
          slidesPerView: 2,
        },
        576: {
          width: 576,
          slidesPerView: 3,
        },
        768: {
          width: 768,
          slidesPerView: 4,
        },
        992: {
          width: 992,
          slidesPerView: 4,
        },
        1200: {
          width: 1200,
          slidesPerView: 5,
        },
        1400: {
          width: 1400,
          slidesPerView: 5,
        },
      }}
    >

      <SwiperSlide>
        <div className='category-wrapper'>
          <Link href='/'>
            <div className='category group'>
              <div className='image relative h-[351px]'>
                <LazyImage src='/uploads/images/categories/earrings.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
                <div className='group-hover:text-primary heading absolute group-hover:font-semibold  bottom-2 uppercase text-center w-full text-accent font-andika'>Earrings</div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='category-wrapper'>
          <Link href='/'>
            <div className='category group'>
              <div className='image relative h-[351px]'>
                <LazyImage src='/uploads/images/categories/bracelets.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
                <div className='group-hover:text-primary heading absolute group-hover:font-semibold  bottom-2 uppercase text-center w-full text-accent font-andika'>Bracelets</div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='category-wrapper'>
          <Link href='/'>
            <div className='category group'>
              <div className='image relative h-[351px]'>
                <LazyImage src='/uploads/images/categories/pendants.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
                <div className='group-hover:text-primary heading absolute group-hover:font-semibold  bottom-2 uppercase text-center w-full text-accent font-andika'>Pendants</div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='category-wrapper'>
          <Link href='/'>
            <div className='category group'>
              <div className='image relative h-[351px]'>
                <LazyImage src='/uploads/images/categories/rings.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
                <div className='heading group-hover:font-semibold absolute bottom-2 group-hover:text-primary uppercase text-center w-full text-accent font-andika'>Rings</div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='category-wrapper'>
          <Link href='/'>
            <div className='category group'>
              <div className='image relative h-[351px]'>
                <LazyImage src='/uploads/images/categories/sets.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
                <div className='heading absolute bottom-2 uppercase text-center w-full text-accent group-hover:text-primary font-andika group-hover:font-semibold'>Sets</div>
              </div>
            </div>
          </Link>
        </div>
      </SwiperSlide>
      <SwiperSlide>

      </SwiperSlide>
    </Swiper>
  );
};
