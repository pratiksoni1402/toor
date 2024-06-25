'use client';
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MoveLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

import './style.css';

export default function TabList() {
  // State to manage the active tab and whether to show the tab list or content
  const [activeTab, setActiveTab] = useState(null);
  const [showTabContent, setShowTabContent] = useState(false);

  const handleTabClick = (value) => {
    setActiveTab(value);
    setShowTabContent(true);
  };

  const handleBackClick = () => {
    setShowTabContent(false);
  };

  return (
    <div className="mobile-menu">
      <div className="content-wrapper">
        <Tabs value={activeTab} className="tabbing" onValueChange={handleTabClick} activationMode="manual">
          {!activeTab ? (
            <TabsList className="tablist">
              <TabsTrigger className="tablistvalue" value="rings">Rings</TabsTrigger>
              <TabsTrigger className="tablistvalue" value="earrings">Earrings</TabsTrigger>
              <TabsTrigger className="tablistvalue" value="bracelets">Bracelets</TabsTrigger>
              <TabsTrigger className="tablistvalue" value="jewelry-pure-metals">Jewelry and Pure Metals</TabsTrigger>
            </TabsList>
          ) : (
            ''
          )}

          <TabsContent value="rings">
            <div className="tab-content h-full">
              <div className='mobile-header flex justify-between border-b border-secondary'>
                <button onClick={() => setActiveTab(null)} className='text-base font-roboto text-primary hover:font-semibold hover:underline'>
                  <MoveLeft />
                </button>
                <h1 className='ml-[-35px] text-3xl text-center font-crimson text-primary'>Rings</h1>
                <div></div>
              </div>
              <div className='product-menu'>
                <div className='grid grid-cols-2 gap-5'>
                  <div className='col'>
                    <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Shop By Style</h3>
                      <ul>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Engagement Rings</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Couple Rings</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Casual Rings</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Navratna Rings</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Mangalsutra Rings</Link></li>
                      </ul>
                    </div>
                  </div>
                  <div className='col'>
                    <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Shop By Metal</h3>
                      <ul>
                        <li className="product-list">
                          <Link href='/platinum' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span>
                              <Image src='/uploads/images/swatch/platinum.svg' alt="Platinum" width={20} height={20} />
                            </span>
                            <span className="pl-1">Platinum</span>
                          </Link>
                        </li>

                        <li className="product-list py-1">
                          <Link href='/yellow-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span>
                              <Image src='/uploads/images/swatch/yellow-gold.svg' alt="Platinum" width={20} height={20} />
                            </span>
                            <span className="pl-1">Yellow Gold</span>
                          </Link>
                        </li>

                        <li className="product-list">
                          <Link href='/rose-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span>
                              <Image src='/uploads/images/swatch/rose-gold.svg' alt="Platinum" width={20} height={20} />
                            </span>
                            <span className="pl-1">Rose Gold</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className='col'>
                    <h2 className="inner-heading text-base text-secondary font-semibold pt-2">Gemstone Rings</h2>
                    <ul className="product-list-wrapper">


                      <li className="product-list" >
                        <Link href='/yellow-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/blue-sapphire.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Blue Sapphire</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/rose-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/emerald.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Emerald </span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/aquamarine.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Aquamarine </span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/morganite.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Morganite</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/ruby.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Ruby</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/alexandrite.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Alexendrite</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/pink-sapphire.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Pink Sapphire</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/yellow-sapphire.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Yellow Sapphire</span>
                        </Link>
                      </li>

                    </ul>
                  </div>
                </div>

              </div>
            </div>
          </TabsContent>
          <TabsContent value="earrings">
            <div className="tab-content h-full">
              <div className=' flex justify-between border-b border-secondary'>
                <button onClick={() => setActiveTab(null)} className='text-base font-roboto text-primary hover:font-semibold hover:underline'>
                  <MoveLeft />
                </button>
                <h1 className='ml-[-30px] text-3xl text-center font-crimson text-primary'>Earrings</h1>
                <div></div>
              </div>
              <div className='product-menu'>
                <div className='grid grid-cols-2 gap-5'>

                  <div className='col'>
                    <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Shop By Style</h3>
                      <ul>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>All Earrings</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Drop n Dangler</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Solitaire</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Sui Dhaga</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Huggie</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Hoop</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Jhomkas</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Tops</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className='col'>
                    <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Shop By Metal</h3>
                      <ul>
                        <li className="product-list">
                          <Link href='/platinum' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span>
                              <Image src='/uploads/images/swatch/platinum.svg' alt="Platinum" width={20} height={20} />
                            </span>
                            <span className="pl-1">Platinum</span>
                          </Link>
                        </li>

                        <li className="product-list py-1">
                          <Link href='/yellow-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span>
                              <Image src='/uploads/images/swatch/yellow-gold.svg' alt="Platinum" width={20} height={20} />
                            </span>
                            <span className="pl-1">Yellow Gold</span>
                          </Link>
                        </li>

                        <li className="product-list">
                          <Link href='/rose-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span>
                              <Image src='/uploads/images/swatch/rose-gold.svg' alt="Platinum" width={20} height={20} />
                            </span>
                            <span className="pl-1">Rose Gold</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='col'>
                    <h2 className="inner-heading text-base text-secondary font-semibold pt-2">Gemstone Earrings</h2>
                    <ul className="product-list-wrapper">


                      <li className="product-list" >
                        <Link href='/yellow-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/blue-sapphire.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Blue Sapphire</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/rose-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/emerald.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Emerald </span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/aquamarine.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Aquamarine </span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/morganite.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Morganite</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/ruby.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Ruby</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/pink-sapphire.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Pink Sapphire</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/yellow-sapphire.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Yellow Sapphire</span>
                        </Link>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="bracelets">
            <div className="tab-content h-full">
              <div className=' flex justify-between border-b border-secondary'>
                <button onClick={() => setActiveTab(null)} className='text-base font-roboto text-primary hover:font-semibold hover:underline'>
                  <MoveLeft />
                </button>
                <h1 className='ml-[-30px] text-3xl text-center font-crimson text-primary'>Bracelets</h1>
                <div></div>
              </div>
              <div className='product-menu'>
                <div className='grid grid-cols-2 gap-5'>

                  <div className='col'>
                    <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Shop By Style</h3>
                      <ul>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Chain</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Cuff</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Cable</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Hinged</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Open Bangle</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Bangle</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className='col'>
                    <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Shop By Metal</h3>
                      <ul>
                        <li className="product-list">
                          <Link href='/platinum' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span>
                              <Image src='/uploads/images/swatch/platinum.svg' alt="Platinum" width={20} height={20} />
                            </span>
                            <span className="pl-1">Platinum</span>
                          </Link>
                        </li>

                        <li className="product-list py-1">
                          <Link href='/yellow-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span>
                              <Image src='/uploads/images/swatch/yellow-gold.svg' alt="Platinum" width={20} height={20} />
                            </span>
                            <span className="pl-1">Yellow Gold</span>
                          </Link>
                        </li>

                        <li className="product-list">
                          <Link href='/rose-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span>
                              <Image src='/uploads/images/swatch/rose-gold.svg' alt="Platinum" width={20} height={20} />
                            </span>
                            <span className="pl-1">Rose Gold</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='col'>
                    <h2 className="inner-heading text-base text-secondary font-semibold pt-2">Gemstone Bracelets</h2>
                    <ul className="product-list-wrapper">


                      <li className="product-list" >
                        <Link href='/yellow-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/blue-sapphire.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Blue Sapphire</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/rose-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/emerald.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Emerald </span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/aquamarine.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Aquamarine </span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/morganite.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Morganite</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/ruby.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Ruby</span>
                        </Link>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="jewelry-pure-metals">
            <div className="tab-content h-full">
              <div className=' flex justify-between border-b border-secondary'>
                <button onClick={() => setActiveTab(null)} className='text-base font-roboto text-primary hover:font-semibold hover:underline'>
                  <MoveLeft />
                </button>
                <h1 className='ml-[-30px] text-3xl text-center font-crimson text-primary'>Jewelry and Pure Metals</h1>
                <div></div>
              </div>
              <div className='product-menu'>
                <div className='grid grid-cols-2 gap-5'>

                  <div className='col'>
                    <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Pure Metals</h3>
                      <ul>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Gold Bars</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Gold Coins</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Silver Bars</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Silver Coins</Link></li>

                      </ul>
                    </div>
                  </div>

                  <div className='col'>
                    <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Silver Sets</h3>
                      <ul>
                        <li className="product-list">
                          <Link href='/platinum' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span className="pl-1">Thali</span>
                          </Link>
                        </li>

                        <li className="product-list py-1">
                          <Link href='/yellow-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span className="pl-1">Glass Sets</span>
                          </Link>
                        </li>

                        <li className="product-list">
                          <Link href='/rose-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span className="pl-1">Thali and Bowl Sets</span>
                          </Link>
                        </li>

                        <li className="product-list">
                          <Link href='/rose-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                            <span className="pl-1">Glass and Jug Sets</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className='col'>
                    <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Gifts</h3>
                      <ul>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>For Him</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>For Her</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>For Kids</Link></li>


                      </ul>
                    </div>
                  </div>

                  <div className='col'>
                  <div className='shop-by-style'>
                      <h3 className='text-base text-secondary font-semibold pt-2'>Accessories</h3>
                      <ul>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Nose Pins</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Anklets</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Evil Eyes</Link></li>
                        <li><Link href='#' className='text-base text-accent font-roboto hover:text-primary hover:font-semibold'>Pendants</Link></li>
                      </ul>
                    </div>
                  </div>

                  <div className='col'>
                    <h2 className="inner-heading text-base text-secondary font-semibold pt-2">Gemstone Bracelets</h2>
                    <ul className="product-list-wrapper">

                      <li className="product-list" >
                        <Link href='/yellow-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/blue-sapphire.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Blue Sapphire</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/rose-gold' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/emerald.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Emerald </span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/aquamarine.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Aquamarine </span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/morganite.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Morganite</span>
                        </Link>
                      </li>

                      <li className="product-list">
                        <Link href='/silver' className="flex items-center text-base text-accent font-roboto hover:text-primary hover:font-semibold">
                          <span>
                            <Image src='/uploads/images/swatch/ruby.svg' alt="Platinum" width={20} height={20} />
                          </span>
                          <span className="pl-1">Ruby</span>
                        </Link>
                      </li>

                    </ul>
                  </div>

                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
