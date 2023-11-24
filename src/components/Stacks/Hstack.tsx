import React from "react"

interface HstackProps {
    children: React.ReactNode,
    className?: string
}


export default function Hstack({children,className}:HstackProps){
    return (
        <div className={`flex flex-row ${className}`}>
            {children}
        </div>
    )
}