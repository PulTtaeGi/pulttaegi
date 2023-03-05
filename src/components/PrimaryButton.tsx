import React from "react";
import { Link } from "react-router-dom"
import "../tailwind.css"

type PrimaryButtonProps = {
    children: React.ReactNode
    color: string
    link: string 
}

export default function PrimaryButton({ children, color, link }: PrimaryButtonProps) {
    return (
        link === "no"
            ?
            <button className={`w-full p-3 text-white bg-${color} text-[20px] font-bold rounded-xl text-center whitespace-nowrap`}>
                {children}
            </button>
            :
            <Link 
                to={link} 
                className={`w-full p-3 text-white bg-${color} text-[20px] font-bold rounded-xl text-center whitespace-nowrap`}
            >
                    {children}
            </Link>   
    )
}