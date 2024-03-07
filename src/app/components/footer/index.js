'use client'
import Link from "next/link"
import LazyImage from "../lazy-loading/lazy-image"
export default function Footer() {
  return (
    <div className="footer mt-20">
      <div className="container">
        <div className="upper-footer border-t py-12">
          <section>
            <div className="upper-footer-wrapper">
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
                      <li className="pb-1 "><Link className=" px-3 hover:font-semibold" href='/'>About Us</Link></li>
                      <li className="pb-1 "><Link className=" px-3 hover:font-semibold" href='/'>Blog</Link></li>
                      <li className="pb-1 "><Link className=" px-3 hover:font-semibold" href='/'>Feedback</Link></li>
                      <li className="pb-1 "><Link className=" px-3 hover:font-semibold" href='/'>Contact Us</Link></li>
                      
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <h2 className="heading text-center text-accent font-semibold font-andika">Products and Legal</h2>
                  <div className="products-and-order justify-center flex font-andika text-base text-accent">
                  <ul className="py-3">
                    <li className="pb-1 "><Link href='/' className=" px-3 hover:font-semibold">Ring Size Guide</Link></li>
                    <li className="pb-1 "><Link href='/' className=" px-3 hover:font-semibold">About Products</Link></li>
                    <li className="pb-1 "><Link href='/' className=" px-3 hover:font-semibold">Privacy Policy</Link></li>
                    <li className="pb-1 "><Link href='/' className=" px-3 hover:font-semibold">Terms and Condition</Link></li>
                  </ul>
                  </div>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <h2 className="heading text-center text-accent font-semibold font-andika">Products and Legal</h2>
                  <div className="products-and-order justify-center flex font-andika text-base text-accent">
                  <ul className="py-3">
                    <li className="pb-1 "><Link href='/' className=" px-3 hover:font-semibold">Privacy Policy</Link></li>
                    <li className="pb-1 "><Link href='/' className=" px-3 hover:font-semibold">Terms and Condition</Link></li>
                    <li className="pb-1 "><Link href='/' className=" px-3 hover:font-semibold">Ring Size Guide</Link></li>
                    <li className="pb-1 "><Link href='/' className=" px-3 hover:font-semibold">About Products</Link></li>
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