'use client'
export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import LazyImage from "./components/lazy-loading/lazy-image";
import Categories from "./components/home-page/categories";
export default function Home() {
  return (
    <div className="homepage">
      <div className="container">
      <section>
        <div className="banner-wrapper">
          <div className="hero-image w-full" style={{
            backgroundImage: "url(/uploads/images/homepage/temp-banner.jpg)",
            width: "100%",
            height: "70vh",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}>
          </div>
        </div>
      </section>
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
              <div className="sm:col-span-6 col-span-12">
                <div className="parent-wrapper flex justify-center">
                  <div className="image relative h-[545px] w-96 mx-auto">
                    <LazyImage src='/uploads/images/homepage/pendants-overlay.jpg' alt='image' width={375} className="w-2/4" height={545} />
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
        </section>
        {/* End */}

      </div>
        {/* Banner Section */}
        <section>
          <div className="content-wrapper relative" style={{
             backgroundImage: "url(/uploads/images/homepage/banner.jpg)",
             width: "100%",
             height: "60vh",
             backgroundRepeat: "no-repeat",
             backgroundSize: "cover",
             backgroundPosition: "center",
          }}>
            <div className="grid grid-cols-2 absolute top-[50%]  -translate-y-[50%]">
              <div className="md:col-span-1 col-span-2"></div>
              <div className="md:col-span-1 col-span-2">
                <div className="trail w-3/4">
                  <h2>Hello</h2>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis vero pariatur provident reprehenderit dicta, quae excepturi quis libero porro laboriosam.</p>
                </div>
              </div>
            </div>

          </div>
        </section>
        {/* End */}
    </div>
  );
}
