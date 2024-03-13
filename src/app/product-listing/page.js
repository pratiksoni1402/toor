export const dynamic = 'force-dynamic';
export const fetchCache = 'force-no-store';
export const revalidate = 0;
export default function Listing({ params }) {
  return (
    <div className="product-listing-page">
      <div className="container">
        <div className="customization">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
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
                        <input type="radio" id="female" name="gender" value="male" />
                        <label htmlFor="female" className="font-andika text-sm items-center px-1">
                          Women
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="gender">
                    <div className="">
                      <div className="column-heading font-lora text-accent text-lg py-2">
                        Price
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male" className="font-andika text-sm items-center px-1">
                          Under 10K
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="female" name="gender" value="male" />
                        <label htmlFor="female" className="font-andika text-sm items-center px-1">
                          Women
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="female" name="gender" value="male" />
                        <label htmlFor="female" className="font-andika text-sm items-center px-1">
                          Women
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="female" name="gender" value="male" />
                        <label htmlFor="female" className="font-andika text-sm items-center px-1">
                          Women
                        </label>
                      </div>
                      <div className="flex items-center">
                        <input type="radio" id="female" name="gender" value="male" />
                        <label htmlFor="female" className="font-andika text-sm items-center px-1">
                          Women
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="col-span-9">
              <section>
                <div className="listing"></div>
              </section>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}