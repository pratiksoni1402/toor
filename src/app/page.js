'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import LazyImage from "./components/lazy-loading/lazy-image";
import Categories from "./components/home-page/categories";
export default function Home() {
  return (
    <div className="homepage">
      <section>
        <div className="banner-wrapper">
          <div className="hero-image relative " style={{
            backgroundImage: "url(/uploads/images/banners/homepage-banner.png)",
            width: "100%",
            height: "95vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
          }}>

            <div className="hero-text absolute top-1/3 w-full text-center font-tangerine text-5xl text-primary ">
              <div>Jewellery for </div>
              <div>every ocassion.</div>
            </div>
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
        <section>
          <div className="our-story my-20">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-6">
                <div className="parent-wrapper flex justify-center">
                  <div className="image relative h-[545px] w-96 mx-auto">
                    <LazyImage src='/uploads/images/homepage/pendants-overlay.jpg' alt='image' width={375} className="w-2/4" height={545} />
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="content-wrapper text-accent h-full flex flex-col justify-center">
                  <h2 className="font-lora text-4xl">Story of Our Brand</h2>
                  <p className="font-andika text-base">We’re passionate about creating beautiful, high-quality jewelry that reflects your unique style. Our founder, Pratik Soni, has been creating jewelry since He was young and started the brand to share his passion with the world. We hand-select the finest materials to create stylish designs that are both beautiful and affordable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End */}

        {/* Craftmenship Section */}
        <section>
          <div className="our-story my-20">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-6">
                <div className="content-wrapper text-accent h-full flex flex-col justify-center">
                  <div className="inner-wrapper w-3/4 ml-auto">
                    <h2 className="font-lora text-4xl">Custom and Unique Jewelry</h2>
                    <p className="font-andika text-base">We love creating custom jewelry pieces that are unique and personal to you. Whether you want to incorporate a special gemstone or create a design that reflects your personal style, we are here to bring your vision to life.</p>
                    <p className="font-andika text-base">Our team of expert jewelers will work with you every step of the way to ensure that your custom order exceeds your expectations. From concept to completion, we will collaborate with you to create a one-of-a-kind piece that is truly your own.</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="parent-wrapper flex justify-end">
                  <div className="video">
                    <video src="/uploads/videos/homepage/craftmen.mp4" className="h-[550px]" loop autoPlay></video>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End */}

        {/* Banner Section */}
        <section>
          
        </section>
        {/* End */}
      </div>
    </div>
  );
}
