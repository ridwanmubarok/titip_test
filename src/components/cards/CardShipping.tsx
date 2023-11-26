"use client";

import Hstack from "../Stacks/Hstack";
import Stack from "../Stacks/Stack";
import ShippingLogs from "../atoms/ShippingLogs";
import VerticalText from "../atoms/VerticalText";
import Badge from "../badges";

interface CardShippingProps {
    group_name: string,
    id: number,
    onClick: (id: number) => void;
}


export default function CardShipping({group_name,onClick,id}: CardShippingProps){

    const handleCardClick = () => {
        onClick(id);
    };

    return(
        <div onClick={handleCardClick} className="border rounded-md shadow-sm p-3">
            <Stack className="grid grid-cols-12 gap-3">
                <VerticalText w={6} label="Group Name" value={group_name}/>
                <VerticalText w={6} label="End Customer" value="NOT PROVIDE API"/>
                <VerticalText w={6} label="Customer Reference" value="NOT PROVIDE API"/>
                <VerticalText w={6} label="Status" value="NOT PROVIDE API"/>

                <ShippingLogs className="mt-5 col-span-8" logs={[]}/>
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
            </Stack>
        </div>
    )
}