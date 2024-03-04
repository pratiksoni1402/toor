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

            <div className="hero-text absolute top-1/3 w-full text-center font-italiano text-4xl text-primary ">
              <div>Jewellery for </div>
              <div>every ocassion.</div>
            </div>
          </div>
        </div>
      </section>
      <div className="container">
        <section>
          <div className="category-wrapper">
            <h2 className="text-center mt-10 text-3xl text-accent font-lora mb-5">Shop by Category</h2>
            <div className="mb-10">
              <Categories />
            </div>
          </div>
        </section>
        <section>
          <div className="our-story">
            <div className="grid grid-cols-12 gap-10">
              <div className="col-span-6">
                <div className="parent-wrapper">
                  <div className="image relative h-[145px]">
                    <LazyImage src='/uploads/images/all/pearl-ring.jpg' alt='image' width={275} height={375} />
                  </div>
                    <div className="image relative h-[245px]">
                      <LazyImage src='/uploads/images/all/pendants.jpg' alt='image' width={363} height={345} />
                    </div>
                  
                </div>
              </div>
              <div className="col-span-6">
                <div className="content-wrapper">
                  <h2>Story of Our Brand</h2>
                  <p>We’re passionate about creating beautiful, high-quality jewelry that reflects your unique style. Our founder, Eliza Johns, has been creating jewelry since she was young and started the brand to share her passion with the world. We hand-select the finest materials to create stylish designs that are both beautiful and affordable.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
