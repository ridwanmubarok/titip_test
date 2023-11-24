import React from "react"

interface VStackProps {
    children: React.ReactNode,
    className?: string
}


export default function VStack({children,className}:VStackProps){
    return (
        <div className={`flex flex-col ${className}`}>
            {children}
        </div>
    )
}