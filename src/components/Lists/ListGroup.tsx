import React, { Children } from "react"

interface ListGroupProps {
    className?: string ,
    children: React.ReactNode,
    ordered?: boolean
}

export default function ListGroup({className,children,ordered = false}: ListGroupProps){
    const ListComponent = ordered ? 'ol' : 'ul';
    return (
        <ListComponent className={`${className}`}>
            {children}
        </ListComponent>
    )
}