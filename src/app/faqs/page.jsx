export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import './style.css';
export default function Faq() {
  return (
    <div className="faq-page">
      <div className="container">
        <div className="content-wrapper">
          <section>
            <h1 className="text-center font-crimson text-4xl text-primary">FAQs</h1>
            <p className="mb-5 text-base text-accent font-roboto text-center">Here you can find all the answer to your different queries. If you still have queries and help need you can always contact us, Our support team will get back to you as soon as possible </p>
          </section>
          <section>
            <Accordion type="single" collapsible className="w-full">

              <AccordionItem value="item-1">
                <AccordionTrigger className='accordion-title'>What materials are your jewelry pieces made of?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Our jewelry pieces are crafted from high-quality materials such as sterling silver, gold, platinum, and gemstones.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger className='accordion-title'>How should I care for my jewelry to maintain its shine and quality</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  We recommend cleaning your jewelry regularly with a soft cloth and avoiding exposure to harsh chemicals or extreme temperatures.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger className='accordion-title'>Do you offer customization or personalized jewelry options?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, we provide customization services for certain jewelry pieces. Please contact our customer service team for more information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger className='accordion-title'>What is your return and exchange policy?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Our return and exchange policy allows customers to return or exchange unworn jewelry within [insert number] days of purchase. Please refer to our Returns page for detailed instructions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger className='accordion-title'>Are your products hypoallergenic??</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, we offer hypoallergenic options for customers with sensitive skin. Look for products labeled as hypoallergenic in our collection.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger className='accordion-title'>How can I determine my ring size?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  You can find your ring size using our online ring size guide or by visiting a local jewelry store for professional sizing.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7">
                <AccordionTrigger className='accordion-title'>Do you offer international shipping?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, we provide international shipping to select countries. Shipping rates and delivery times may vary depending on the destination.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8">
                <AccordionTrigger className='accordion-title'>Can I track my order once its been shipped?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, you will receive a tracking number via email once your order has been shipped. You can use this tracking number to monitor the status of your delivery.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-9">
                <AccordionTrigger className='accordion-title'>Do you offer gift wrapping services?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, we offer gift wrapping services for an additional fee. You can select this option during the checkout process.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-10">
                <AccordionTrigger className='accordion-title'>Are your diamonds ethically sourced?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, we are committed to sourcing diamonds and gemstones ethically and responsibly, ensuring fair labor practices and environmental sustainability.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-11">
                <AccordionTrigger className='accordion-title'>What payment methods do you accept?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. You can view all accepted payment options at checkout.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-12">
                <AccordionTrigger className='accordion-title'>How can I contact your customer service team?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, we provide customization services for certain jewelry pieces. Please contact our customer service team for more information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-13">
                <AccordionTrigger className='accordion-title'>Do you offer customization or personalized jewelry options?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, we provide customization services for certain jewelry pieces. Please contact our customer service team for more information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-14">
                <AccordionTrigger className='accordion-title'>Can I resize my jewelry if it doesnt fit properly?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, certain jewelry pieces can be resized for a perfect fit. Please contact our customer service team for assistance with resizing requests.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-15">
                <AccordionTrigger className='accordion-title'>Are your products covered by a warranty?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, we offer a warranty on all our jewelry products against manufacturing defects. Please refer to our Warranty page for more information.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-16">
                <AccordionTrigger className='accordion-title'>Do you have a physical store location where I can view the jewelry in person?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Currently, we operate as an online-only store. However, we occasionally participate in pop-up events or exhibitions. Stay updated on our website for any announcements.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-17">
                <AccordionTrigger className='accordion-title'>Can I cancel or modify my order after it has been placed?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Orders can be canceled or modified within 1 hours of placing the order. Please contact our customer service team as soon as possible to request changes.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-18">
                <AccordionTrigger className='accordion-title'>How can I care for my jewelry during travel?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  We recommend storing your jewelry in a soft pouch or jewelry case to prevent tangling and damage during travel. Avoid exposing jewelry to moisture or extreme conditions.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-19">
                <AccordionTrigger className='accordion-title'>Can I engrave a special message on my jewelry?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  Yes, certain jewelry pieces can be engraved with a personalized message. Look for products with engraving options or contact our customer service team for assistance.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-20">
                <AccordionTrigger className='accordion-title'>Q: How do I know if a jewelry piece is authentic and genuine?</AccordionTrigger>
                <AccordionContent className='accordion-content'>
                  We guarantee the authenticity of all our jewelry pieces. Each item is accompanied by a certificate of authenticity and is stamped with the appropriate hallmark for verification.
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </section>
        </div>
      </div>
    </div>
  )
} 