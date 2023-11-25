"use client";

import Hstack from "../Stacks/Hstack";
import VerticalText from "../atoms/VerticalText";

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
        <div onClick={handleCardClick} className="border rounded-md shadow-sm p-3 hover:bg-gray-50">
            <Hstack className="items-center justify-between">
                    <Hstack className="item-center">
                        <i className="fi fi-rr-ship mt-1 me-3 text-[1.5rem]"></i>
                        <VerticalText w={6} label="Group Name" value={group_name}/>
                    </Hstack>
                    <i className="fi fi-rr-angle-small-right"></i>
            </Hstack>
        </div>
    )
}