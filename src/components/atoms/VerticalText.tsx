
interface VerticalTextProps {
    w: 6 | 12 | 8 | 4 ,
    label: string,
    value: string,
}

export default function VerticalText({w,label,value}:VerticalTextProps){


    const getWstyle = (w: VerticalTextProps['w']) => {
        return `col-span-${w}`
    }

    return(
        <div className={`${getWstyle(w)} flex flex-col gap-1`}>
            <span className="text-xs text-gray-400">
                {label}
            </span>
            <div className="text-xs text-black font-bold">
                {value}
            </div>
        </div>
    )

}