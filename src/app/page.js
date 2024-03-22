'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import Link from "next/link";
import LazyImage from "./components/lazy-loading/lazy-image";
import Categories from "./components/home-page/categories";
import Featured from "./components/featured-product";
import Image from "next/image";

export default function Home() {
  return (
    <div className="homepage">
      <section>
        <div className="banner-wrapper">
          <div className="hero-image w-full" style={{
            backgroundImage: "url(/uploads/images/homepage/banner.jpg)",
            width: "100%",
            height: "100vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          </div>
        </div>
      </section>
      <div className="container">
        {/* Category Section */}
        <section>
          <div className="category-wrapper">
            <h2 className="text-center mt-10 text-4xl text-accent font-crimson mb-5">Shop by Category</h2>
            <div className="mb-10">
              <Categories />
            </div>
          </div>
        </section>
        {/* End */}

        {/* Our Brand Section */}
        <section>
          <div className="our-story my-20">
            <div className="grid grid-cols-12 sm:gap-10 gap-0">
              <div className="sm:col-span-6 col-span-12">
                <div className="parent-wrapper flex justify-center">
                  <div className="image relative h-[545px] sm:w-96 w-full sm:mx-auto mx-0">
                    <LazyImage src='/uploads/images/homepage/pendants-overlay.jpg' alt='image' width={375} className="sm:w-2/4 w-full" height={545} />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-6 col-span-12">
                <div className="content-wrapper text-accent h-full flex flex-col justify-center">
                  <h2 className="font-crimson md:text-4xl sm:text-3xl text-2xl font-semibold sm:pt-0 pt-4">Story of Our Brand</h2>
                  <p className="font-roboto text-base">We are passionate about creating beautiful, high-quality jewelry that reflects your unique style. Our founder, Pratik Soni, has been creating jewelry since He was young and started the brand to share his passion with the world. We hand-select the finest materials to create stylish designs that are both beautiful and affordable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End */}

      </div>
      {/* Banner Section */}
      <section>
        <div className="content-wrapper relative" style={{
          backgroundImage: "url(/uploads/images/banners/solitaire-banner.png)",
          width: "100%",
          height: "60vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        </div>
      </section>
      {/* End */}

      {/* Featured Product */}
      <div className="container">
        <section>
          <div className="featured-product my-10">
            <div className="heading pb-5 text-center text-accent sm:text-3xl text-2xl font-crimson">Featured Products</div>
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
          <div className="shop-by-gender mt-10 pt-10">
            <div className="heading pb-5">
              <h2 className="text-center text-3xl text-accent font-crimson">Shop by Gender</h2>
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
          <div className="content-wrapper">
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

      </div>
    </div>
  );
}
