import Link from "next/link"
import Image from "next/image"
export default function Notfound() {
  return (
    <div className="not-found-page">
      <div className="container">
        <section>
          <div className="content-wrapper flex items-center justify-center">
            <div className="text-[423px] font-lora text-accent">4</div>
            <div>
              <Image src='/uploads/images/all/not-found.png' alt='Not Found ' width={423} height={423}></Image>
            </div>
            <div className="text-[423px] font-lora text-accent">4</div>
          </div>
          <div className="text-4xl font-lora text-accent text-center pt-0 mt-0">Page not found</div>
          <div className="text-center w-full py-5">
            <Link href='/' className=" border py-2 px-3 font-lora text-base text-accent">Go To Home</Link>
          </div>
        </section>
      </div>
    </div>
  )
}