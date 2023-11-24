import ReactCountryFlag from "react-country-flag"


export default function FleetMonitorinMapgTimeplan(){
    return(
        <div className="flex flex-col rounded-md bg-white">
             <div className="flex items-center border-b p-3">
                <i className="fi fi-rr-earth-americas me-3 mt-1 text-black"></i>
                <h3 className="text-black font-bold">Timeline</h3>
             </div>
             
            <div className="p-3 overflow-x-auto">
              <ol className="items-center sm:flex space-x-1">
                  <li className="relative mb-6 sm:mb-0">
                      <div className="flex items-center">
                          <div className="z-10 flex items-center border rounded-full border-black justify-center w-6 h-6 shrink-0">
                              
                          </div>
                          <div className="hidden sm:flex w-full h-0.5 bg-gray-700"></div>
                      </div>
                      <div className="mt-3 p-3 rounded-md bg-gray-100 text-black min-w-[400px] max-w-[400px]">
                          <div className="flex justify-between items-center">
                              <div className="flex items-center">
                                  <i className="fi fi-sr-warehouse-alt me-3 mt-1"></i>
                                  <h5 className="text-md font-bold">SAVANNAH</h5>
                              </div>
                              <div className="flex items-center">
                                  <i className="fi fi-rr-marker me-3 mt-1"></i>
                                  <ReactCountryFlag
                                      countryCode="US"
                                      svg
                                      style={{
                                          width: '1.5em',
                                          height: '1.5em',
                                      }}
                                      title="US"
                                  />
                              </div>
                          </div>
                          
                          <ul className="mt-5 space-y-1">
                            <li>
                              <div className="flex items-center">
                                  <span className="text-xs me-3">2023-11-10 12:02</span>
                                  <span className="text-xs font-semibold">Laden container Arrived</span>
                              </div>
                            </li>
                            <li>
                              <div className="flex items-center">
                                  <span className="text-xs me-3">2023-11-10 12:02</span>
                                  <span className="text-xs font-semibold">Loaded on ship</span>
                              </div>
                            </li>
                          </ul>
                      </div>
                  </li>

              </ol>
            </div>


        </div>
    )
}