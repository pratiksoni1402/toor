import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
export default function Filters() {
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
                <SheetTitle>Filters</SheetTitle>
                <SheetDescription>
                  {/* Make changes to your profile here. Click save when youre done. */}
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
                          <input type="radio" id="male" name="gender" value="male" />
                          <label htmlFor="male" className="font-andika text-sm items-center px-1">
                            Men
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="radio" id="female" name="gender" value="female" />
                          <label htmlFor="female" className="font-andika text-sm items-center px-1">
                            Women
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="price">
                      <div className="">
                        <div className="column-heading font-lora text-accent text-lg py-2">
                          Price
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="price-10k" name="gender" value="" />
                          <label htmlFor="price-10k" className="font-andika text-sm items-center px-1">
                            Under 10K
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="price-20k" name="gender" value="" />
                          <label htmlFor="price-20k" className="font-andika text-sm items-center px-1">
                            10k - 20k
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="price-30k" name="gender" value="" />
                          <label htmlFor="price-30k" className="font-andika text-sm items-center px-1">
                            20k - 30k
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="price-40k" name="gender" value="" />
                          <label htmlFor="price-40k" className="font-andika text-sm items-center px-1">
                            30k - 40k
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="price-50k" name="gender" value="" />
                          <label htmlFor="price-50k" className="font-andika text-sm items-center px-1">
                            40k -50k
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="metal-color">
                      <div className="">
                        <div className="column-heading font-lora text-accent text-lg py-2">
                          Metal Color
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="price-10k" name="gender" value="platinum" />
                          <label htmlFor="price-10k" className="font-andika text-sm items-center px-1">
                            Platinum
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="yellow-gold" name="gender" value="yellow-gold" />
                          <label htmlFor="yellow-gold" className="font-andika text-sm items-center px-1">
                            Yellow Gold
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="rose-gold" name="gender" value="rose-gold" />
                          <label htmlFor="rose-gold" className="font-andika text-sm items-center px-1">
                            Rose Gold
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="silver" name="gender" value="silver" />
                          <label htmlFor="silver" className="font-andika text-sm items-center px-1">
                            Silver
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="metal-type">
                      <div className="">
                        <div className="column-heading font-lora text-accent text-lg py-2">
                          Metal Type
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="18k" name="gender" value="18k" />
                          <label htmlFor="18k" className="font-andika text-sm items-center px-1">
                            18k
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="22k" name="gender" value="22k" />
                          <label htmlFor="22k" className="font-andika text-sm items-center px-1">
                            22k
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="ring-size">
                      <div className="">
                        <div className="column-heading font-lora text-accent text-lg py-2">
                          Ring Size
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-4mm" name="gender" value="4mm" />
                          <label htmlFor="ring-4mm" className="font-andika text-sm items-center px-1">
                            4 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-45mm" name="gender" value="4.5mm" />
                          <label htmlFor="ring-45mm" className="font-andika text-sm items-center px-1">
                            4.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-5mm" name="gender" value="5mm" />
                          <label htmlFor="ring-5mm" className="font-andika text-sm items-center px-1">
                            5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-55mm" name="gender" value="5.5mm" />
                          <label htmlFor="ring-55mm" className="font-andika text-sm items-center px-1">
                            5.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-6mm" name="gender" value="6mm" />
                          <label htmlFor="ring-6mm" className="font-andika text-sm items-center px-1">
                            6 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-65mm" name="gender" value="6.5mm" />
                          <label htmlFor="ring-65mm" className="font-andika text-sm items-center px-1">
                            6.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-7mm" name="gender" value="7mm" />
                          <label htmlFor="ring-7mm" className="font-andika text-sm items-center px-1">
                            7 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-75mm" name="gender" value="7.5mm" />
                          <label htmlFor="ring-75mm" className="font-andika text-sm items-center px-1">
                            7.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-8mm" name="gender" value="8mm" />
                          <label htmlFor="ring-8mm" className="font-andika text-sm items-center px-1">
                            8 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-85mm" name="gender" value="8.5mm" />
                          <label htmlFor="ring-85mm" className="font-andika text-sm items-center px-1">
                            8.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-9mm" name="gender" value="9mm" />
                          <label htmlFor="ring-9mm" className="font-andika text-sm items-center px-1">
                            9 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-95mm" name="gender" value="9.5mm" />
                          <label htmlFor="ring-95mm" className="font-andika text-sm items-center px-1">
                            9.5 (mm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="ring-100mm" name="gender" value="10mm" />
                          <label htmlFor="ring-100mm" className="font-andika text-sm items-center px-1">
                            10 (mm)
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="weight-range">
                      <div className="">
                        <div className="column-heading font-lora text-accent text-lg py-2">
                          Weight
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="weight-3gm" name="gender" value="3gm" />
                          <label htmlFor="weight-3gm" className="font-andika text-sm items-center px-1">
                            1.0 (gm) - 3.0 (gm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="weight-5gm" name="gender" value="5gm" />
                          <label htmlFor="weight-5gm" className="font-andika text-sm items-center px-1">
                            3.0 (gm) - 5.0 (gm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="weight-8gm" name="gender" value="8gm" />
                          <label htmlFor="weight-8gm" className="font-andika text-sm items-center px-1">
                            5.0 (gm) - 8.0 (gm)
                          </label>
                        </div>
                        <div className="flex items-center">
                          <input type="checkbox" id="weight-12gm" name="gender" value="12gm" />
                          <label htmlFor="12gm" className="font-andika text-sm items-center px-1">
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