import React from "react";

type BreadCrumbProps = {
    children: React.ReactNode
    count: number | string
}

export default function BreadCrumb ({children, count} : BreadCrumbProps ) {
    return (
        <div className="block flex items-center gap-4 pb-4 border-b-2 font-bold text-2xl text-green-4 tracking-tight">
          {children}
          {
            count !== "no" &&
                <div className="relative bottom-[3px] text-[28px] text-black">
                    {`(${count})`}
                </div>       
          }
        </div>
    )
}