import React from "react"

interface StackProps {
    children?: React.ReactNode,
    className?: string
}


export default function Stack({children,className}:StackProps){
    return (
        <div className={`${className}`}>
            {children}
        </div>
    )
}