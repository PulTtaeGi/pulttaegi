import React, { useEffect, useState } from "react";
import eggimage from "../../assets/icons/pngegg.png"
import { Link } from "react-router-dom";
import HashTagBar from "../common/HashTagBar";

interface ReviewItemProps {
    title: string,
    img: any,
    content: string,
    hashtag: string[],
    userid: string,
}

export default function ReviewItem ({title, img, content, hashtag, userid} : ReviewItemProps) {
    const currentId = "admin"
    const [hashtags, setHashtags] = useState<string[]>()

    useEffect(() => {
        const array : string[] = []
        hashtag !== undefined &&
            hashtag.map((item) => {
                array.push(item.slice(1, item.length))
            }) 
        setHashtags(array)
    }, [])

    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between">
                <div className="flex text-[23px] text-green-4 font-bold items-center ">
                    <div className={"w-[200px] tracking-tight whitespace-nowrap text-ellipsis overflow-hidden"}>
                        {title}
                    </div>
                    <img src={eggimage} width="20"/>
                </div>
                {userid === currentId &&
                    <div className="flex gap-3">
                        <Link 
                            to={`/review/edit/${title}`}
                            className={`p-1 px-3 text-white bg-gray-400 text-base font-bold tracking-tight rounded-xl text-center whitespace-nowrap`}
                        >
                            수정
                        </Link> 
                        <Link 
                            to=""
                            className={`p-1 px-3 text-white bg-gray-400 text-base font-bold tracking-tight rounded-xl text-center whitespace-nowrap`}
                        >
                            삭제
                        </Link>
                    </div>
                }
            </div>
            <img src={img} className="w-[350px] h-[260px] mt-4 "/>
            <p className="mt-3 text-lg text-bold">{content}</p>
            {
                hashtags !== undefined &&
                    <HashTagBar list={hashtags}></HashTagBar>
            }
        </div>
    )
}