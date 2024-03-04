export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
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
            <div>

            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
