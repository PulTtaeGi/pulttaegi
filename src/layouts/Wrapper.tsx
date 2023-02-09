import React from "react"

type WrapperProps = {
    children: any
}

export default function Wrapper({ children }: WrapperProps) {
    
    return (
        <div className="wrapper flex items-center justify-center h-full">
            {children}
        </div>
    )
}