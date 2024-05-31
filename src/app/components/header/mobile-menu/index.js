import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import TabList from "./menu-section";
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

export function Mobilemenu() {
  return (
    <>
      <Sheet className='h-96 mobile-menu-sheet'>
        <SheetTrigger asChild>
          <Button variant="outline" className=' hover:bg-white focus:bg-white xl:hidden lg:hidden md:block block rounded-none border-0 bg-transparent font-roboto text-accent text-base'>
            <Menu />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <SheetTitle className='text-primary font-crimson text-3xl text-center border-b'>SS Jewels</SheetTitle> */}
            <SheetDescription>
              {/* Make changes to your profile here. Click save when youre done. */}
            </SheetDescription>
          </SheetHeader>
          <div className="menu-content w-full">
            <TabList />
          </div>
          <SheetFooter>
            <SheetClose asChild>
              {/* <Button type="submit">Save changes</Button> */}
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>

    </>

  )
}
