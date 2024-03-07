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
            <h2 className="text-center mt-10 text-3xl text-accent font-lora mb-5">Shop by Category</h2>
            <div className="mb-10">
              <Categories />
            </div>
          </div>
        </section>
        {/* End */}

        {/* Our Brand Section */}
        {/* <section>
          <div className="our-story my-20">
            <div className="grid grid-cols-12 gap-10">
              <div className="sm:col-span-6 col-span-12">
                <div className="parent-wrapper flex justify-center">
                  <div className="image relative h-[545px] sm:w-96 w-full sm:mx-auto mx-0">
                    <LazyImage src='/uploads/images/homepage/pendants-overlay.jpg' alt='image' width={375} className="sm:w-2/4 w-full" height={545} />
                  </div>
                </div>
              </div>
              <div className="sm:col-span-6 col-span-12">
                <div className="content-wrapper text-accent h-full flex flex-col justify-center">
                  <h2 className="font-lora text-4xl">Story of Our Brand</h2>
                  <p className="font-andika text-base">We’re passionate about creating beautiful, high-quality jewelry that reflects your unique style. Our founder, Pratik Soni, has been creating jewelry since He was young and started the brand to share his passion with the world. We hand-select the finest materials to create stylish designs that are both beautiful and affordable.</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* End */}

      </div>
      {/* Banner Section */}
      <section>
        <div className="content-wrapper relative" style={{
          backgroundImage: "url(/uploads/images/homepage/temp-banner.jpg)",
          width: "100%",
          height: "60vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
          {/* <div className="grid grid-cols-2 absolute top-[50%]  -translate-y-[50%]">
            <div className="md:col-span-1 col-span-2"></div>
            <div className="md:col-span-1 col-span-2">
              <div className="trail w-3/4">
                <h2>Hello</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis vero pariatur provident reprehenderit dicta, quae excepturi quis libero porro laboriosam.</p>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* End */}

      {/* Entique Jewelry */}
      <section>
        <div className="antique-banner-wrapper relative mb-14">
          <div className="antique-jewelry" style={{
            backgroundImage: 'url(/uploads/images/banners/antique.jpg)',
            width: '100%',
            height: '100vh',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'top center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}>

          </div>
          <div className="hero-text absolute w-full text-center top-1/2 -translate-y-2/4 z-[2]">
            <h2 className="text-primary text-3xl font-lora">Antique Jewelry</h2>
            <Link href='/'>View Collection</Link>
          </div>
        </div>

      </section>
      {/* End */}

      <div className="container">
        <section>
          <div className="featured-product my-10">
            <div className="heading pb-5 text-center text-accent text-3xl font-lora">Featured Products</div>
            <Featured />
          </div>
        </section>

        {/* Shop By Gender */}
        <section>
          <div className="shop-by-gender mt-10 pt-10">
            <div className="heading pb-5">
              <h2 className="text-center text-3xl text-accent font-lora">Shop by Gender</h2>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div className="md:col-span-1 col-span-2">
                <Link href='/' className="group ">
                  <div className="gift-wrapper group-hover:overflow-hidden relative">
                    <div className="gift-image relative h-[400px] group-hover:scale-110  group-hover:transition-all">
                      <LazyImage src='/uploads/images/all/gender-male.jpg' alt="Image" width={400} height={400} />
                    </div>
                    <div className="name absolute bottom-3 text-center w-full text-base font-andika inline-block text-white">
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
                    <div className="name absolute bottom-3 text-center w-full text-base font-andika inline-block text-white">
                      <span className="inline border px-5 py-1 bg-background text-accent group-hover:bg-primary group-hover:border-primary">Female</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* End */}

        {/* Our Commintment Section */}
        {/* <section>
          <div className="our-commitment my-10">
            <div className="heading text-3xl pb-10 text-accent font-lora text-center">
              <h2>Our Commitments</h2>
            </div>
            <div className="grid grid-cols-4">
              <div className="col">
                <div className="content wrapper">
                  <div className="image flex justify-center">
                    <Image src='/uploads/images/all/certifiedgold.webp' width={25} height={25} alt="Certified Gold" />
                  </div>
                  <div className="title text-base text-accent font-andika text-center font-semibold">
                    Certified Gold
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content wrapper">
                  <div className="image flex justify-center">
                    <Image src='/uploads/images/all/insuredshipping.webp' width={25} height={25} alt="Certified Gold" />
                  </div>
                  <div className="title text-base text-accent font-andika text-center font-semibold">
                    Free Insured Shipping
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content wrapper">
                  <div className="image flex justify-center">
                    <Image src='/uploads/images/all/naturaluncutdiamond.webp' width={25} height={25} alt="Certified Gold" />
                  </div>
                  <div className="title text-base text-accent font-andika text-center font-semibold">
                    Natural Uncut Diamond
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="content wrapper">
                  <div className="image flex justify-center">
                    <Image src='/uploads/images/all/lifetimebuyback.webp' width={25} height={25} alt="Certified Gold" />
                  </div>
                  <div className="title text-base text-accent font-andika text-center font-semibold">
                    Lifetime Buyback
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* End */}

        {/* Signature Haritage Jewelry*/}
        <section>
          <div className="signature-heritage my-12">
            <div className="grid grid-cols-12">
              <div className="col-span-6">
                <div className="grid grid-cols-1">
                  <div className="col">

                  </div>
                  <div className="col"></div>
                </div>
              </div>
              <div className="col-span-6"></div>
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
                <div className="slogan bg-background sm:h-full h-20 font-lora text-3xl text-accent px-3 text-center flex items-center justify-center">
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
