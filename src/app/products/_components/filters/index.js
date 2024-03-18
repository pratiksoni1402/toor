'use client'
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import React from "react";
// SliderProps = React.ComponentProps
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useRouter } from "next/navigation";
import { useCallback } from "react";
import { usePathname, useSearchParams } from "next/navigation";
export default function Filters({ className, ...props }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const filterProducts = (type, value) => {
    let filters = {
      gender: searchParams.get('gender'),
      'metal-color': (searchParams.get('metal-color') || '').split(','),
      'metal-type': searchParams.get('metal-type'),
      weight: searchParams.get('weight')
    }


    if (type == 'gender') {
      // filters.gender = value
    }
    // console.log("This is gender filter", filters.gender);

    if (type == 'metal-color') {
      let index = filters["metal-color"].findIndex(v => v == value)

      if (index == -1) {
        filters['metal-color'].push(value);
      } else {
        filters['metal-color'].splice(index, 1)
      }
    }
    // console.log("This is metal color", filters.metalColor);

    if (type == 'metal-type') {
      // filters['metal-type'].push(value);
    }
    // console.log("This is metal type", filters.metalType);

    if (type == 'weight') {
      // filters.weight.push(value)
    }
    // console.log("This is weight", filters.weight)
    const params = new URLSearchParams(searchParams)

    if (filters[type]) {
if (typeof filters[type]) {

}
    } else {
    params.delete(type)

    }
    params.set(type, filters[type].join(','))

    router.replace(pathname + '?' + params.toString())
  }

  return (
    <div className="filter-component">
      <div className="customization">
        <div className="col-span-3">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className='rounded-none bg-white font-andika text-base hover:bg-primary hover:text-white'>Filters</Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle></SheetTitle>
                <SheetDescription>
                </SheetDescription>
              </SheetHeader>
              <div className="">
                <section>
                  <div className="customization">

                    <div className="gender">
                      <div className="">
                        <div className="column-heading font-lora text-accent text-lg py-2">
                          Gender
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="male" name="gender" value="male" onChange={() => filterProducts('gender', 'male')} />
                          <label htmlFor="male" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            Men
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="female" name="gender" value="female" onChange={() => filterProducts('gender', 'female')} />
                          <label htmlFor="female" className="font-andika text-sm  hover:cursor-pointer items-center px-1">
                            Women
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="price">
                      <div className="">
                        <div className="column-heading font-lora font-semibold text-accent text-lg py-2">
                          Price
                        </div>
                        <div className="flex items-center">
                          <Slider
                            defaultValue={[50]}
                            max={100}
                            step={1}
                            className={cn("w-[100%]", className)}
                            {...props}
                          />

                        </div>

                      </div>
                    </div>

                    <div className="metal-color">
                      <div className="">
                        <div className="column-heading font-semibold  font-lora text-accent text-lg py-2">
                          Metal Color
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="platinum" name="gender" value="platinum" onChange={() => filterProducts('metal-color', 'platinum')} />
                          <label htmlFor="platinum" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            Platinum
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="yellow-gold" name="gender" value="yellow-gold" onChange={() => filterProducts('metal-color', 'yellow-gold')} />
                          <label htmlFor="yellow-gold" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            Yellow Gold
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="rose-gold" name="gender" value="rose-gold" onChange={() => filterProducts('metal-color', 'rose-gold')} />
                          <label htmlFor="rose-gold" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            Rose Gold
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="silver" name="gender" value="silver" onChange={() => filterProducts('metal-color', 'silver')} />
                          <label htmlFor="silver" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            Silver
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="metal-type">
                      <div className="">
                        <div className="column-heading font-lora  font-semibold text-accent text-lg py-2">
                          Metal Type
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="18k" name="gender" value="18k" onChange={() => filterProducts('metal-type', '18k')} />
                          <label htmlFor="18k" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            18k
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="22k" name="gender" value="22k" onChange={() => filterProducts('metal-type', '22k')} />
                          <label htmlFor="22k" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            22k
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <div className="ring-size">
                      <div className="">
                        <div className="column-heading font-lora text-accent  font-semibold text-lg py-2">
                          Ring Size
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-4mm" name="gender" value="4mm" />
                          <label htmlFor="ring-4mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            4 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-45mm" name="gender" value="4.5mm" />
                          <label htmlFor="ring-45mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            4.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-5mm" name="gender" value="5mm" />
                          <label htmlFor="ring-5mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-55mm" name="gender" value="5.5mm" />
                          <label htmlFor="ring-55mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            5.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-6mm" name="gender" value="6mm" />
                          <label htmlFor="ring-6mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            6 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-65mm" name="gender" value="6.5mm" />
                          <label htmlFor="ring-65mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            6.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-7mm" name="gender" value="7mm" />
                          <label htmlFor="ring-7mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            7 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-75mm" name="gender" value="7.5mm" />
                          <label htmlFor="ring-75mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            7.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-8mm" name="gender" value="8mm" />
                          <label htmlFor="ring-8mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            8 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-85mm" name="gender" value="8.5mm" />
                          <label htmlFor="ring-85mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            8.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-9mm" name="gender" value="9mm" />
                          <label htmlFor="ring-9mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            9 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-95mm" name="gender" value="9.5mm" />
                          <label htmlFor="ring-95mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            9.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-100mm" name="gender" value="10mm" />
                          <label htmlFor="ring-100mm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            10 (mm)
                          </label>
                        </div>
                      </div>
                    </div> */}

                    <div className="weight-range">
                      <div className="">
                        <div className="column-heading font-lora text-accent text-lg py-2 font-semibold ">
                          Weight
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="weight-3gm" name="gender" value="3gm" onChange={() => filterProducts('weight', '1.0 (gm) - 3.0 (gm)')} />
                          <label htmlFor="weight-3gm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            1.0 (gm) - 3.0 (gm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="weight-5gm" name="gender" value="5gm" onChange={() => filterProducts('weight', '3.0 (gm) - 5.0 (gm)')} />
                          <label htmlFor="weight-5gm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            3.0 (gm) - 5.0 (gm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="weight-8gm" name="gender" value="8gm" onChange={() => filterProducts('weight', '5.0 (gm) - 8.0 (gm)')} />
                          <label htmlFor="weight-8gm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            5.0 (gm) - 8.0 (gm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="weight-12gm" name="gender" value="12gm" onChange={() => filterProducts('weight', '8.0 (gm) - 12.0 (gm)')} />
                          <label htmlFor="12gm" className=" hover:cursor-pointer font-andika text-sm items-center px-1">
                            8.0 (gm) - 12.0 (gm)
                          </label>
                        </div>

                      </div>
                    </div>
                  </div>
                </section>

              </div>
              <SheetFooter>
                <SheetClose asChild>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  )
}