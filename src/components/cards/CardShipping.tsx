import VerticalText from "../atoms/VerticalText";
import Badge from "../badges";

interface CardShippingProps {
    container_id: string,
    end_customer: string,
    customer_reference: string,
    status: string,
}


export default function CardShipping(){
    return(
        <div className="border rounded-md shadow-sm p-3">
            <div className="grid grid-cols-12 gap-3">

                <VerticalText w={6} label="Container ID" value="H5323277482348348"/>
                <VerticalText w={6} label="End Customer" value="end_customer_demo"/>
                <VerticalText w={6} label="Customer Reference" value="demo 0610"/>
                <VerticalText w={6} label="Status" value="In Progress"/>
                
                <div className="col-span-8 mt-5">
                    <ol className="relative border-gray-200 dark:border-gray-700">
                        {/* VERTICAL LINE */}
                        <div className="border-l border-black top-1 h-full absolute left-4"></div>
                        <li className="mb-5">
                          <div className="flex items-center">
                              <span className="absolute left-1 flex items-center justify-center w-6 h-6 bg-white rounded-full z-10 -start-3 ring-1 ring-green-400 ">
                                <svg className="w-2.5 h-2.5 text-green-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                              </span>
                              <div className="flex mx-10 items-center gap-3">
                                <span className="text-xs text-black">2023</span>
                                <h3 className="flex items-center text-xs font-semibold text-gray-900">New York </h3>
                              </div>
                          </div>
                        </li>
                        <li className="mb-5">
                          <div className="flex items-center">
                              <span className="absolute left-1 flex items-center justify-center w-6 h-6 bg-white rounded-full z-10 -start-3 ring-1 ring-green-400 ">
                                <svg className="w-2.5 h-2.5 text-green-400 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                                </svg>
                              </span>
                              <div className="flex mx-10 items-center gap-3">
                                <span className="text-xs text-black">2023</span>
                                <h3 className="flex items-center text-xs font-semibold text-gray-900">New York </h3>
                              </div>
                          </div>
                        </li>
                    </ol>
                </div>

                <div className="col-span-4 flex flex-col justify-end pb-4">
                    <Badge variant="success" value="COMPLETE"  />
                </div>
                <div className="col-span-12 flex flex-col gap-1">
                    <span className="text-xs text-gray-400">
                        Currently
                    </span>
                    <div className="flex items-center">
                        <div className="text-black me-3">
                        <i className="fi fi-rs-ship-side"></i>
                        </div>
                        <div className="flex gap-2 items-center text-xs text-black font-bold">
                            <div>
                                New York 
                            </div>
                            <div>
                                <i className="fi fi-rr-arrow-right"></i>
                            </div>
                            <div>
                                KLAPEDA 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}