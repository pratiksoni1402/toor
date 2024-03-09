'use client'
import Link from "next/link"
import LazyImage from "../lazy-loading/lazy-image"
export default function Footer() {
  return (
    <div className="footer mt-20">
      <div className="container">
        <div className="upper-footer-wrapper border-t py-12">
          <section>
            <div className="upper-footer">
              <div className="grid grid-cols-12 items-center">
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <div className="about-brand flex justify-center">
                    <div className="image relative h-[200px] w-3/5">
                      <LazyImage src='/uploads/images/logo/logo.png' width={150} height={150} alt='Logo' />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <h2 className="heading text-center text-accent font-semibold font-andika">Company</h2>
                  <div className="about-company justify-center flex font-andika text-base text-accent">
                    <ul className="py-3">
                      <li className="pb-1 "><Link className=" px-3 hover:text-primary" href='/about-us'>About Us</Link></li>
                      <li className="pb-1 "><Link className=" px-3 hover:text-primary" href='/blog'>Blog</Link></li>
                      <li className="pb-1 "><Link className=" px-3 hover:text-primary" href='/feedback'>Feedback</Link></li>
                      <li className="pb-1 "><Link title="Contact Us" className=" px-3  hover:text-primary" href='/contact-us'>Contact Us</Link></li>

                    </ul>
                  </div>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <h2 className="heading text-center text-accent font-semibold font-andika pl-3">Products and Legal</h2>
                  <div className="products-and-order justify-center flex font-andika text-base text-accent">
                    <ul className="py-3">
                      <li className="pb-1 "><Link href='/ring-size-guide' className=" px-3 hover:text-primary">Ring Size Guide</Link></li>
                      <li className="pb-1 "><Link href='/about-products' className=" px-3 hover:text-primary">About Products</Link></li>
                      <li className="pb-1 "><Link href='/privacy-policy' className=" px-3 hover:text-primary">Privacy Policy</Link></li>
                      <li className="pb-1 "><Link href='/terms-and-condition' className=" px-3 hover:text-primary">Terms and Condition</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <h2 className="heading text-center text-accent font-semibold font-andika pl-3">Products and Legal</h2>
                  <div className="products-and-order justify-center flex font-andika text-base text-accent">
                    <ul className="py-3">
                      <li className="pb-1 "><Link href='/' className=" px-3 hover:text-primary">FAQs</Link></li>
                      <li className="pb-1 "><Link href='/' className=" px-3 hover:text-primary">Jewelery Care</Link></li>
                      <li className="pb-1 "><Link href='/' className=" px-3 hover:text-primary">Gold Rate Guide</Link></li>
                      <li className="pb-1 "><Link href='/' className=" px-3 hover:text-primary">Our Promise</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}