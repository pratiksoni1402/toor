'use client'
import Link from "next/link";
import LazyImage from "../lazy-loading/lazy-image";
import './style.css';
export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="upper-footer-wrapper">
          <section>
            <div className="upper-footer">
              <div className="grid grid-cols-12 items-center">
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <div className="about-brand">
                    <div className="image">
                      <LazyImage src='/uploads/images/logo/logo.png' width={150} height={150} alt='Logo' />
                    </div>
                  </div>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <h2 className="heading">Company</h2>
                  <div className="info-section">
                    <ul>
                      <li><Link title="About us" href='/about-us'>About Us</Link></li>
                      <li><Link title="Blog" href='/blog'>Blog</Link></li>
                      <li><Link title="Feedback" href='/feedback'>Feedback</Link></li>
                      <li><Link title="Contact Us" className="" href='/contact-us'>Contact Us</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <h2 className="heading">Products and Legal</h2>
                  <div className="info-section">
                    <ul>
                      <li><Link title="Ring Size Guide" href='/ring-size-guide'>Ring Size Guide</Link></li>
                      <li><Link title="About Products" href='/about-products'>About Products</Link></li>
                      <li><Link title="Privacy Policy" href='/privacy-policy'>Privacy Policy</Link></li>
                      <li><Link title="Terms and Condition" href='/terms-and-condition'>Terms and Condition</Link></li>
                    </ul>
                  </div>
                </div>
                <div className="md:col-span-3 sm:col-span-6 col-span-6">
                  <h2 className="heading">Products and Legal</h2>
                  <div className="info-section">
                    <ul>
                      <li><Link href='/' title="FAQs">FAQs</Link></li>
                      <li><Link href='/jewelry-care' title="Jewelry Care">Jewelery Care</Link></li>
                      <li><Link href='/' title="Gold Rate Guide">Gold Rate Guide</Link></li>
                      <li><Link href='/' title="Our Promise">Our Promise</Link></li>
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