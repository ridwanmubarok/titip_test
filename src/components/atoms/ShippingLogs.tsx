
interface ShippingLogsProps {
    className: string,
    logs: Array<Log>
}

interface Log {
    name: string,
    icon: string,
    variant: 'success' | 'warning' | 'danger' | 'info'
}

export default function ShippingLogs({className}:ShippingLogsProps){
    return (
        <div className={className}>
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
    )
}