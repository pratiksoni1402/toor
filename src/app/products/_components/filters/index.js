'use client'
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

import { Checkbox } from "@/components/ui/checkbox";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

import { ChevronDown } from 'lucide-react';
import { useRouter } from "next/navigation";
import { usePathname, useSearchParams } from "next/navigation";

import './style.css';

export default function Productfilters({ className, ...props }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isOpen, setIsOpen] = useState('item-1');
  const [isVisible, setIsVisible] = useState('item-2');
  const [isMetalFinish, setIsMetalFinish] = useState('item-3');
  const [isMetalWeight, setIsMetalWeight] = useState('item-4');
  const [isPrice, setIsPrice] = useState('item-5');


  const filterProducts = (type, value) => {
    let filters = {
      gender: searchParams.get('gender'),
      price: searchParams.get('price'),
      'metal-color': (searchParams.get('metal-color') || '').split(',').filter(v => v),
      'metal-type': (searchParams.get('metal-type') || '').split(',').filter(x => x),
      weight: searchParams.get('weight')
    }

    // Price Filter
    if (type == 'price') {
      filters['price'] = value

    }
    // End

    // Gender Filter
    if (type == 'gender') {
      filters.gender = value
    }
    // End

    // Metal Color Filter
    if (type == 'metal-color') {
      let index = filters["metal-color"].findIndex(v => v == value)

      if (index == -1) {
        filters['metal-color'].push(value);
      } else {
        filters['metal-color'].splice(index, 1)
      }
    }
    // End

    // Metal Type Filter
    if (type == 'metal-type') {
      let metalIndex = filters["metal-type"].findIndex(x => x == value)
      if (metalIndex == -1) {
        filters['metal-type'].push(value);
      } else {
        filters['metal-type'].splice(metalIndex, 1)
      }
    }
    // End

    // Product Weight Filter
    if (type == 'weight') {
      filters['weight'] = value

    }
    // End

    // Params Updating in URl
    const params = new URLSearchParams(searchParams)
    if (filters[type]) {
      console.log("Before sending to URL", filters[type])
      if (Array.isArray(filters[type])) {
        console.log("Checking inside Array Before sending to URL", filters[type])
        if (filters[type].length > 0) {
          console.log("Checking Length Before sending to URL", filters[type])

          params.set(type, filters[type].join(','))

        } else {
          params.delete(type)
        }
      } else {
        params.set(type, filters[type])
      }
    } else {
      params.delete(type)
    }

    router.replace(pathname + '?' + params.toString())
  }
  // End
  // Reset Filter Button
  const resetFilter = () => {
    router.replace(pathname)
  }

  return (
    <div className="filter-component bg-white text-accent font-roboto">
      {/* <div className="customization">
        <div className="font-roboto text-base">
          <section>
            <div className="customization">
              <div className="grid grid-cols-5 gap-5">
                <div className="col">
                  <div className="dropdown-wrapper">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full px-5 py-4 focus:outline-0 focus-visible:outline-0 hover:text-white hover:bg-primary text-accent">
                        <div>Gender</div>
                        <ChevronDown />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem className='hover:bg-white'>
                          <div class="flex items-center">
                            <input type="radio" id="male" hidden name="gender" value="male" onChange={() => filterProducts('gender', 'male')} />
                            <label for="male" class="flex radio-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              Men
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="female" name="gender" hidden value="female" onChange={() => filterProducts('gender', 'female')} />
                            <label htmlFor="female" className="flex radio-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              Women
                            </label>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="col">
                  <div className="dropdown-wrapper">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full px-5 py-4 focus:outline-0 focus-visible:outline-0 hover:text-white hover:bg-primary text-accent">
                        <div>Price</div>
                        <ChevronDown />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="under-10k" name="price" value="10k" onChange={() => filterProducts('price', '0, 10000')} />
                            <label htmlFor="under-10k" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              Under 10,000
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="under-20k" name="price" value="20k" onChange={() => filterProducts('price', '10000, 20000')} />
                            <label htmlFor="under-20k" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              10,000 - 20,000
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="under-40k" name="price" value="40k" onChange={() => filterProducts('price', '20000, 40000')} />
                            <label htmlFor="under-40k" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              20,000 - 40,000
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="under-60k" name="price" value="60k" onChange={() => filterProducts('price', '40000, 60000')} />
                            <label htmlFor="under-60k" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              40,000 - 60,000
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="under-80k" name="price" value="80k" onChange={() => filterProducts('price', '60000, 80000')} />
                            <label htmlFor="under-80k" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              60,000 - 80,000
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                        <div className="flex items-center">
                          <input type="radio" id="under-100k" name="price" value="100k" onChange={() => filterProducts('price', '80000 ,100000')} />
                          <label htmlFor="under-100k" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            80,000 - 1,00,000
                          </label>
                        </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="above-100k" name="price" value="101k" onChange={() => filterProducts('price', '100000')} />
                            <label htmlFor="above-100k" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              Above 1,00,000
                            </label>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="col">
                  <div className="dropdown-wrapper">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full px-5 py-4 focus:outline-0 focus-visible:outline-0 hover:text-white hover:bg-primary text-accent">
                        <div>Metal Color</div>
                        <ChevronDown />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <div class="flex items-center">
                            <input type="checkbox" id="platinum" name="gender" value="platinum" onChange={() => filterProducts('metal-color', 'platinum')} />
                            <label for="platinum" class="flex checkbox-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-checkbox"></span>
                              Platinum
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="checkbox" id="yellow-gold" name="gender" value="yellow-gold" onChange={() => filterProducts('metal-color', 'yellow-gold')} />
                            <label htmlFor="yellow-gold" className="flex checkbox-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-checkbox"></span>
                              Yellow Gold
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="checkbox" id="rose-gold" name="gender" value="rose-gold" onChange={() => filterProducts('metal-color', 'rose-gold')} />
                            <label htmlFor="rose-gold" className="flex checkbox-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-checkbox"></span>
                              Rose Gold
                            </label>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="col">
                  <div className="dropdown-wrapper">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full px-5 py-4 focus:outline-0 focus-visible:outline-0 hover:text-white hover:bg-primary text-accent">
                        <div>Finish</div>
                        <ChevronDown />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="checkbox" id="18k" name="gender" value="18k" onChange={() => filterProducts('metal-type', '18k')} />
                            <label htmlFor="18k" className="flex checkbox-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-checkbox"></span>
                              Dual Tone
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="checkbox" id="22k" name="gender" value="22k" onChange={() => filterProducts('metal-type', '22k')} />
                            <label htmlFor="22k" className="flex checkbox-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-checkbox"></span>
                              Hammered
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="checkbox" id="22k" name="gender" value="22k" onChange={() => filterProducts('metal-type', '22k')} />
                            <label htmlFor="22k" className="flex checkbox-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-checkbox"></span>
                              Brushed
                            </label>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
                <div className="col">
                  <div className="dropdown-wrapper">
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center justify-between w-full px-5 py-4 focus:outline-0 focus-visible:outline-0 hover:text-white hover:bg-primary text-accent">
                        <div>Weight</div>
                        <ChevronDown />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="weight-3gm" name="gender" value="3gm" onChange={() => filterProducts('weight', '1, 3')} />
                            <label htmlFor="weight-3gm" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>

                              1.0 gm - 3.0 gm
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="weight-5gm" name="gender" value="5gm" onChange={() => filterProducts('weight', '3.0, 5.0')} />
                            <label htmlFor="weight-5gm" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              3.0 gm - 5.0 gm
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="weight-8gm" name="gender" value="8gm" onChange={() => filterProducts('weight', '5.0, 8.0')} />
                            <label htmlFor="weight-8gm" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              5.0 gm - 8.0 gm
                            </label>
                          </div>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <div className="flex items-center">
                            <input type="radio" id="weight-12gm" name="gender" value="12gm" onChange={() => filterProducts('weight', '8.0, 12.0')} />
                            <label htmlFor="weight-12gm" className="flex radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                              <span class="custom-radio"></span>
                              8.0 gm - 12.0 gm
                            </label>
                          </div>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </div>

            </div>
          </section>
        </div>
      </div> */}
      <div className="grid grid-cols-5 gap-5">

        <div className="col">
          <div className='content-wrapper'>
            <Accordion type="single" collapsible className="w-full border-b-0" value={isOpen} onValueChange={setIsOpen}>
              <AccordionItem value="item-1">
                <AccordionTrigger>Gender</AccordionTrigger>
                <AccordionContent className='border-b-0'>
                  <div className="swiper-box">
                    <Swiper
                      spaceBetween={5}
                      // slidesPerView={3}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      breakpoints={{
                        280: {
                          width: 280,
                          slidesPerView: 1,
                        },
                        576: {
                          width: 576,
                          slidesPerView: 2,
                        },
                        768: {
                          width: 768,
                          slidesPerView: 2,
                        },
                        992: {
                          width: 992,
                          slidesPerView: 2,
                        },
                        1200: {
                          width: 1200,
                          slidesPerView: 3,
                        },
                        1400: {
                          width: 1400,
                          slidesPerView: 3,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="flex items-center justify-center">
                          <input type="radio" id="male" hidden name="gender" value="male" onChange={() => filterProducts('gender', 'male')} />
                          <label for="male" class="flex flex-col  radio-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            Men
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center justify-center">
                          <input type="radio" id="female" name="gender" hidden value="female" onChange={() => filterProducts('gender', 'female')} />
                          <label htmlFor="female" className="flex flex-col radio-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            Women
                          </label>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

          </div>
        </div>

        <div className="col">
          <div className='content-wrapper'>
            <Accordion type="single" collapsible className="w-full" value={isVisible} onValueChange={setIsVisible}>
              <AccordionItem value="item-2">
                <AccordionTrigger>Metal Color</AccordionTrigger>
                <AccordionContent>
                  <div className="swiper-box">
                    <Swiper
                      spaceBetween={5}
                      // slidesPerView={3}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      breakpoints={{
                        280: {
                          width: 280,
                          slidesPerView: 1,
                        },
                        576: {
                          width: 576,
                          slidesPerView: 2,
                        },
                        768: {
                          width: 768,
                          slidesPerView: 2,
                        },
                        992: {
                          width: 992,
                          slidesPerView: 2,
                        },
                        1200: {
                          width: 1200,
                          slidesPerView: 3,
                        },
                        1400: {
                          width: 1400,
                          slidesPerView: 3,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div>
                          <input type="checkbox" id="platinum" name="gender" value="platinum" onChange={() => filterProducts('metal-color', 'platinum')} />
                          <label for="platinum" className="flex flex-col justify-center items-center checkbox-label hover:cursor-pointer font-roboto text-sm px-1">
                            <span className="custom-checkbox"></span>
                            Platinum
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div>
                          <input type="checkbox" id="yellow-gold" name="gender" value="yellow-gold" onChange={() => filterProducts('metal-color', 'yellow-gold')} />
                          <label htmlFor="yellow-gold" className="flex flex-col justify-center items-center  checkbox-label hover:cursor-pointer font-roboto text-sm px-1 whitespace-nowrap">
                            <span class="custom-checkbox"></span>
                            Yellow Gold
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div>
                          <input type="checkbox" id="rose-gold" name="gender" value="rose-gold" onChange={() => filterProducts('metal-color', 'rose-gold')} />
                          <label htmlFor="rose-gold" className="flex flex-col justify-center items-center  checkbox-label hover:cursor-pointer font-roboto text-sm  px-1">
                            <span class="custom-checkbox"></span>
                            Rose Gold
                          </label>
                        </div>
                      </SwiperSlide>

                    </Swiper>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="col">
          <div className='content-wrapper'>
            <Accordion type="single" collapsible className="w-full" value={isMetalFinish} onValueChange={setIsMetalFinish}>
              <AccordionItem value="item-3">
                <AccordionTrigger>Finish</AccordionTrigger>
                <AccordionContent>
                  <div className="swiper-box">
                    <Swiper
                      spaceBetween={5}
                      // slidesPerView={3}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      breakpoints={{
                        280: {
                          width: 280,
                          slidesPerView: 1,
                        },
                        576: {
                          width: 576,
                          slidesPerView: 2,
                        },
                        768: {
                          width: 768,
                          slidesPerView: 2,
                        },
                        992: {
                          width: 992,
                          slidesPerView: 2,
                        },
                        1200: {
                          width: 1200,
                          slidesPerView: 3,
                        },
                        1400: {
                          width: 1400,
                          slidesPerView: 3,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="checkbox" id="18k" name="gender" value="18k" onChange={() => filterProducts('metal-type', '18k')} />
                          <label htmlFor="18k" className="flex flex-col checkbox-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-checkbox"></span>
                            Dual Tone
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="checkbox" id="22k" name="gender" value="22k" onChange={() => filterProducts('metal-type', '22k')} />
                          <label htmlFor="22k" className="flex flex-col checkbox-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-checkbox"></span>
                            Hammered
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="checkbox" id="22k" name="gender" value="22k" onChange={() => filterProducts('metal-type', '22k')} />
                          <label htmlFor="22k" className="flex flex-col checkbox-label hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-checkbox"></span>
                            Brushed
                          </label>
                        </div>
                      </SwiperSlide>

                    </Swiper>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="col">
          <div className='content-wrapper'>
            <Accordion type="single" collapsible className="w-full" value={isMetalWeight} onValueChange={setIsMetalWeight}>
              <AccordionItem value="item-4">
                <AccordionTrigger>Weight</AccordionTrigger>
                <AccordionContent>
                  <div className="swiper-box">
                    <Swiper
                      spaceBetween={5}
                      // slidesPerView={3}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      breakpoints={{
                        280: {
                          width: 280,
                          slidesPerView: 1,
                        },
                        576: {
                          width: 576,
                          slidesPerView: 2,
                        },
                        768: {
                          width: 768,
                          slidesPerView: 2,
                        },
                        992: {
                          width: 992,
                          slidesPerView: 2,
                        },
                        1200: {
                          width: 1200,
                          slidesPerView: 3,
                        },
                        1400: {
                          width: 1400,
                          slidesPerView: 3,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="weight-3gm" name="gender" value="3gm" onChange={() => filterProducts('weight', '1, 3')} />
                          <label htmlFor="weight-3gm" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            1 gm - 3 gm
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="weight-5gm" name="gender" value="5gm" onChange={() => filterProducts('weight', '3.0, 5.0')} />
                          <label htmlFor="weight-5gm" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            3 gm - 5 gm
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="weight-8gm" name="gender" value="8gm" onChange={() => filterProducts('weight', '5.0, 8.0')} />
                          <label htmlFor="weight-8gm" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            5 gm - 8 gm
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="weight-12gm" name="gender" value="12gm" onChange={() => filterProducts('weight', '8.0, 12.0')} />
                          <label htmlFor="weight-12gm" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            8 gm - 12 gm
                          </label>
                        </div>
                      </SwiperSlide>

                    </Swiper>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="col">
          <div className='content-wrapper'>
            <Accordion type="single" collapsible className="w-full" value={isPrice} onValueChange={setIsPrice}>
              <AccordionItem value="item-5">
                <AccordionTrigger>Price</AccordionTrigger>
                <AccordionContent>
                  <div className="swiper-box">
                    <Swiper
                      spaceBetween={5}
                      // slidesPerView={3}
                      onSlideChange={() => console.log('slide change')}
                      onSwiper={(swiper) => console.log(swiper)}
                      breakpoints={{
                        280: {
                          width: 280,
                          slidesPerView: 1,
                        },
                        576: {
                          width: 576,
                          slidesPerView: 2,
                        },
                        768: {
                          width: 768,
                          slidesPerView: 2,
                        },
                        992: {
                          width: 992,
                          slidesPerView: 2,
                        },
                        1200: {
                          width: 1200,
                          slidesPerView: 3,
                        },
                        1400: {
                          width: 1400,
                          slidesPerView: 3,
                        },
                      }}
                    >
                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="under-10k" name="price" value="10k" onChange={() => filterProducts('price', '0, 10000')} />
                          <label htmlFor="under-10k" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            Under 10k
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="under-20k" name="price" value="20k" onChange={() => filterProducts('price', '10000, 20000')} />
                          <label htmlFor="under-20k" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            10k - 20k
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="under-40k" name="price" value="40k" onChange={() => filterProducts('price', '20000, 40000')} />
                          <label htmlFor="under-40k" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            20k - 40k
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="under-60k" name="price" value="60k" onChange={() => filterProducts('price', '40000, 60000')} />
                          <label htmlFor="under-60k" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            40k - 60k
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="under-80k" name="price" value="80k" onChange={() => filterProducts('price', '60000, 80000')} />
                          <label htmlFor="under-80k" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            60k - 80k
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="under-100k" name="price" value="100k" onChange={() => filterProducts('price', '80000 ,100000')} />
                          <label htmlFor="under-100k" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            80k - 1L
                          </label>
                        </div>
                      </SwiperSlide>

                      <SwiperSlide>
                        <div className="flex items-center">
                          <input type="radio" id="above-100k" name="price" value="101k" onChange={() => filterProducts('price', '100000')} />
                          <label htmlFor="above-100k" className="flex flex-col whitespace-nowrap radio-label  hover:cursor-pointer font-roboto text-sm items-center px-1">
                            <span class="custom-radio"></span>
                            Above 1L
                          </label>
                        </div>
                      </SwiperSlide>

                    </Swiper>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

      </div>
    </div >

  )
}