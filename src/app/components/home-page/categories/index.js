// Import Swiper React components
'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import LazyImage from '@/app/components/lazy-loading/lazy-image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { ArrowLeftCircle } from 'lucide-react';
import { ArrowRightCircle } from 'lucide-react';
export default function Categories() {
  return (
    <div className='categories-swiper'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={5}
        breakpoints={{
          280: {
            width: 280,
            slidesPerView: 1,
          },
          576: {
            width: 576,
            slidesPerView: 2,
          },
          768: {
            width: 768,
            slidesPerView: 3,
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
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >

        <SwiperSlide>
          <div className='category-wrapper'>
            <Link href='/'>
              <div className='category group'>
                <div className='image relative h-[351px]'>
                  <LazyImage src='/uploads/images/categories/cat-earrings.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
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
                  <LazyImage src='/uploads/images/categories/cat-bracelets.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
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
                  <LazyImage src='/uploads/images/categories/cat-pendants.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
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
                  <LazyImage src='/uploads/images/categories/cat-rings.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
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
                  <LazyImage src='/uploads/images/categories/mangalsutra.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
                  <div className='heading absolute bottom-2 uppercase text-center w-full text-accent group-hover:text-primary font-andika group-hover:font-semibold'>Mangalsutra</div>
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
                  <LazyImage src='/uploads/images/categories/maang-tika.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
                  <div className='heading absolute bottom-2 uppercase text-center w-full text-accent group-hover:text-primary font-andika group-hover:font-semibold'>Mang Tika</div>
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
                  <LazyImage src='/uploads/images/categories/sui-dhaga.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
                  <div className='heading absolute bottom-2 uppercase text-center w-full text-accent group-hover:text-primary font-andika group-hover:font-semibold'>Sui Dhaga</div>
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
                  <LazyImage src='/uploads/images/categories/navratna-rings.jpg' alt='image' width={664} height={751} className='group-hover:brightness-50' />
                  <div className='heading absolute bottom-2 uppercase text-center w-full text-accent group-hover:text-primary font-andika group-hover:font-semibold'>Navratna Rings</div>
                </div>
              </div>
            </Link>
          </div>
        </SwiperSlide>
        
      </Swiper>
      {/* <div className="slider-controler absolute">
        <div className="swiper-button-prev">
          <ArrowLeftCircle />
        </div>
        <div className="swiper-button-next">
          <ArrowRightCircle size={14}/>
        </div>
        <div className="swiper-pagination"></div>
      </div> */}
    </div>

  );
};
