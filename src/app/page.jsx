'use client'

export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;

import Link from "next/link";
import LazyImage from "./components/lazy-loading/lazy-image";
import Categories from "./(home)/_components/categories";
import Featured from "./(home)/_components/featured-product";
import Banner from  "./(home)/_components/banner"
export default function Home() {
  return (
    <div className="homepage">

      <div className="component-wrapper">
        <Banner />
      </div>

      <div className="component-wrapper mb-10">
        <Categories />
      </div>

      {/* Banner Section */}
      <section>
        <Link href='/solitaire-rings'>
          <div className="content-wrapper relative" style={{
            backgroundImage: "url(/uploads/images/banners/solitaire-banner.png)",
            width: "100%",
            height: "60vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          </div>
        </Link>
      </section>
      {/* End */}

      {/* Featured Product */}
      <div className="container">
        <section>
          <div className="featured-product my-10">
            <h2 className="font-crimson md:text-4xl sm:text-3xl text-2xl text-primary sm:pt-0 text-center py-4">Featured Product</h2>
            <Featured />
          </div>
        </section>
      </div>
      {/* End */}

      {/* Entique Jewelry */}
      <section>
        <div className="antique-banner-wrapper relative mb-14">
          <div className="antique-jewelry" style={{
            backgroundImage: 'url(/uploads/images/banners/devine-diamond-banner.png)',
            width: '100%',
            height: '60vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>
          </div>
        </div>
      </section>
      {/* End */}

      <div className="container">
        {/* Shop By Gender */}
        <section>
          <div className="shop-by-gender my-10 pt-10">
            <div className="heading pb-5">
              <h2 className="font-crimson md:text-4xl sm:text-3xl text-2xl text-primary sm:pt-0 text-center py-4">Shop By Gender</h2>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="md:col-span-1 col-span-2">
                <Link href='/' className="group ">
                  <div className="gift-wrapper group-hover:overflow-hidden relative">
                    <div className="gift-image relative h-[400px] group-hover:scale-110 group-hover:duration-100  group-hover:transition-all">
                      <LazyImage src='/uploads/images/all/gender-male.jpg' alt="Image" width={400} height={400} />
                    </div>
                    <div className="name absolute bottom-3 text-center w-full text-base font-roboto inline-block text-white">
                      <span className="inline border px-5 py-1 bg-background text-accent group-hover:bg-primary group-hover:border-primary">Men</span>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="md:col-span-1 col-span-2">
                <Link href='/' className="group ">
                  <div className="gift-wrapper group-hover:overflow-hidden relative">
                    <div className="gift-image relative h-[400px] group-hover:scale-110  group-hover:transition-all">
                      <LazyImage src='/uploads/images/all/gender-female.jpg' alt="Image" width={400} height={400} />
                    </div>
                    <div className="name absolute bottom-3 text-center w-full text-base font-roboto inline-block text-white">
                      <span className="inline border px-5 py-1 bg-background text-accent group-hover:bg-primary group-hover:border-primary">Female</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* End */}

        {/* We make you feel special */}
        <section>
          <div className="content-wrapper my-10">
            <div className="grid grid-cols-3">
              <div className="sm:col-span-1 col-span-3">
                <div className="image relative h-[340px]">
                  <LazyImage src='/uploads/images/homepage/hm-gift-img-1.jpg' alt='image' width={340} height={340} />
                </div>
              </div>
              <div className="sm:col-span-1 col-span-3">
                <div className="slogan bg-background sm:h-full h-20 font-crimson text-3xl text-accent px-3 text-center flex items-center justify-center">
                  <div className="">
                    WE MAKE YOU FEEL SPECIAL
                  </div>
                </div>
              </div>
              <div className="sm:col-span-1 col-span-3">
                <div className="image relative h-[340px]">
                  <LazyImage src='/uploads/images/homepage/hm-gift-img-2.jpg' alt='image' width={340} height={340} />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End */}

        {/* <section>
          <ParallaxText />
        </section> */}
      </div>
    </div>
  );
}
