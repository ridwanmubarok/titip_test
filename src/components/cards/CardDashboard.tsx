import Hstack from "../Stacks/Hstack";
import VStack from "../Stacks/Vstack";


interface CardDashboardProps {
    label: string,
    value: string,
    icon: string,
    size: 2 | 4 | 6
}

export default function CardDashboard({label,value,icon,size}: CardDashboardProps) {

    return (
        <Hstack className={`border col-span-${size} bg-white p-5 justify-between rounded-lg items-center`}>
            <i className={`fi fi-rr-${'box-open'} text-2xl mt-1 me-3`}></i>
            <VStack>
                <h3 className="text-2xl font-bold">{value}</h3>
                <span className="text-xs">{label}</span> 
            </VStack>
        </Hstack>
    )
}