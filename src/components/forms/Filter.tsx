

export default function Filter({

}){

    return (
        <div>
            <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative flex items-center gap-1">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <i className="fi fi-rr-search text-black"></i>
                    </div>
                    <input type="search" id="default-search" 
                    className="block w-full p-3 ps-10 text-sm 
                    text-gray-900 border border-gray-100 
                    rounded-md bg-gray-50 hover:outline-none focus:outline-none"
                    placeholder="Container IDs, shipment number, BL"/>
                    <button type="submit" 
                    className="text-white border bg-white font-medium 
                    rounded-md text-sm p-3  h-full">
                        <i className="fi fi-rr-settings-sliders text-black"></i>
                    </button>
                </div>
        </div>
    )

}