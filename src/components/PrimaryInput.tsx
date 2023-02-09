import React from "react";
import "../tailwind.css"

type PrimaryButtonProps = {
    children: string,
    type: string,
}

export default function PrimaryInput ({ children, type }: PrimaryButtonProps) {
    return (
        <input type={type} placeholder={children} className="w-full pl-8 p-3 text-xl text-green-4 font-bold tracking-tighter bg-gray-100 placeholder-primary rounded-xl outline-0"></input>
    )
}