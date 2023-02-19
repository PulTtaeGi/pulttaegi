import React from "react"
import { useState } from "react"
import Wrapper from "../layouts/Wrapper"
import HashTagBar from "../components/common/HashTagBar"
import PrimaryButton from "../components/PrimaryButton"
import { useAppSelector } from "../store/hooks/configureStore.hook"
import { useParams } from "react-router"

export default function Detail () {
    interface paramTitle {
        title: string
    }
    
    const params = useParams

    const markets = useAppSelector((state) => state.market)
    const reviews = useAppSelector((state) => state.review)
    const [like, setLike] = useState<boolean>(false)

    console.log(markets)
    console.log(reviews)

    interface menuListProps {
        name: string,
        price: string,
    }

    interface reviewListProps {
        nickname: string,
        content: string,
    }
    
    interface currentItemProps {
        id : number,
        title : string,
        address : string,
    }

    const hashTagList : string[] = ["샐러드맛집", "샌드위치맛집", "다이어트식", "다이어트"]
    const menuList : Array<menuListProps> = [
        {
            name : "닭가슴살 샐러드",
            price : "6,200"
        },
        {
            name : "BLT 샌드위치",
            price : "5,500"
        },
        {
            name : "에그듬뿍 마요 샌드위치",
            price : "3,500"
        },
    ]

    const reviewList : Array<reviewListProps> = [
        {
            nickname: "랑구",
            content: "재료가 신선하네요"
        },
        {
            nickname: "1234",
            content: "가성비가 좋아요"
        },
        {
            nickname: "5678",
            content: "샐러드맛집 답게 건강하고 맛있어요~"
        },
    ]

    const currentItem : currentItemProps = {
        id : 1,
        title : "나우잇 샐러드카페 부산대점",
        address : "부산 금정구",
    }

    function handleLike () {
        like === false ? setLike(true) : setLike(false)
    }

    return (
        <Wrapper>
            <div className="flex flex-col items-center w-full h-full mx-8 mt-12">
                <div className="flex items-center w-full items-centern justify-between mb-2">
                    <span className="text-xl font-bold tracking-tight text-green-4 whitespace-nowrap">
                        나우잇 샐러드카페 부산대점
                    </span>
                    <button type="button" onClick={handleLike}>
                        <img src={`../../src/assets/images/${like ? "starActive" : "star"}.png`} alt="backButton" className="w-[28px] h-[28px]"></img>
                    </button>
                </div>
                <div>
                    <img src="https://via.placeholder.com/350x260" alt="detail-image"
                         className="rounded-xl">
                    </img>
                </div>
                <div className="flex flex-col justify-end w-full mt-2">
                    <p className="text-lg tracking-tight font-bold mb-1">
                        부산 금정구 금강로 271-11
                    </p>
                    <HashTagBar list={hashTagList}></HashTagBar>
                </div>
                <div className="flex flex-col w-[320px] justify-start gap-4 mt-12 mb-12 text-xl font-bold">
                    <div className="flex items-center gap-2">
                        <span className="block w-[50px] text-center">웰빙</span>
                        <div className="h-[24px] w-1/2 bg-green-2 rounded-r-lg shadow"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="block w-[50px] text-center">맛</span>
                        <div className="h-[24px] w-3/4 bg-green-3 rounded-r-lg shadow"></div>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="block w-[50px] text-center">위생</span>
                        <div className="h-[24px] w-1/5 bg-green-4 rounded-r-lg shadow"></div>
                    </div>
                </div>
                <div className="flex flex-col w-full rounded-xl overflow-hidden mb-8 shadow-lg">
                    <ul className="flex p-4 pt-2 flex-col gap-2 w-full bg-gray-100">
                        <span className="block text-xl font-extrabold text-green-4">MENU</span>
                        {menuList.map((item : menuListProps, index : number) => {
                            return (
                                <div key={index} className="flex gap-2">
                                    <li className="max-w-[250px] font-bold tracking-tight whitespace-nowrap text-ellipsis overflow-hidden">
                                        {item.name}
                                    </li>
                                    <span className="text-green-3 font-bold tracking-tight">{`${item.price}원`}</span>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className="flex flex-col w-full rounded-xl overflow-hidden mb-16 shadow-lg">
                    <ul className="flex p-4 pt-2 pb-5 flex-col gap-2 w-full bg-gray-100">
                    <span className="block text-xl font-extrabold text-green-4">REVIEW</span>
                        {reviewList.map((item : reviewListProps, index : number) => {
                            return (
                                <div className="flex gap-2 font-semibold" key={index}>
                                    <span className="whitespace-nowrap">
                                        {item.nickname}님
                                    </span> 
                                    <li className="block max-w-[250px] text-gray-500 tracking-tight whitespace-nowrap text-ellipsis overflow-hidden">
                                        {item.content}
                                    </li>
                                </div>
                            )
                        })}
                    </ul>
                </div>
                <div className="relative flex w-full items-center justify-center pb-12">
                    <div className="flex flex-col gap-2">
                        <PrimaryButton color="green-3" link={`/review/${currentItem.title}`}>리뷰 작성하기</PrimaryButton>
                        <span className="w-full tracking-tight text-lg" >리뷰 작성은 로그인 후 이용 가능합니다.</span>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}