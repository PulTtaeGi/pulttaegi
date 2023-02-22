import {MouseEvent, useEffect } from "react";
import { useState } from "react";

interface RatingProps {
  title: string,
  color: string,
  getRating: (currentdata : string[]) => void,
  category: string,
  defaulted: number | undefined
}

const Rating = ({ title, color, getRating, category, defaulted }: RatingProps) => {
  interface ratingDataProps {
    index: string
    ratings: any
    class: string
  }

  const [ ratingData, setRatingData ] = useState<ratingDataProps>()
  
  function getIndex (e : MouseEvent<HTMLElement>) {
    const event = e.target as HTMLElement
    const totalRating : any = event.parentElement?.childNodes
    const currentIndex = event.id

    setRatingData((prevState : any) => {
      return {...prevState, index: currentIndex, ratings: totalRating}
    }) 
  }

  useEffect(() => {
    const totalRating = document.querySelector(`.btns-${category}`)?.childNodes
    setRatingData((prevState : any) => {
      return {...prevState, class : category, ratings : totalRating }
    })
  }, [])

  useEffect(() => { 
    if(defaulted !== undefined && ratingData) {
      for(let i = 0; i < defaulted; i++) {
        ratingData.ratings[i].classList.remove("bg-gray-300")
        ratingData.ratings[i].classList.add(`bg-${color}`)
      } 
  
      for(let i = Number(ratingData.index); i < 5; i++) {
        ratingData.ratings[i].classList.add("bg-gray-300")
        ratingData.ratings[i].classList.remove(`bg-${color}`)
      }
    }

    setRatingData((prevState : any) => {
      return {...prevState, index: defaulted}
    })
  }, [defaulted])
  
  useEffect(() => {
    if(ratingData !== undefined) {
      for(let i = 0; i < Number(ratingData.index); i++) {
        ratingData.ratings[i].classList.remove("bg-gray-300")
        ratingData.ratings[i].classList.add(`bg-${color}`)
      } 

      for(let i = Number(ratingData.index); i < 5; i++) {
        ratingData.ratings[i].classList.add("bg-gray-300")
        ratingData.ratings[i].classList.remove(`bg-${color}`)
      }
    } 
    getRating(ratingData ? [ratingData.index, ratingData?.class] : [] )
  }, [ratingData])

  return (
    <div className="flex flex-row items-center gap-4 pl-4 ">
      <div className="block w-[36px] font-bold">{title}</div>
      <div className={`btns-${category} flex gap-2 h-[24px]`}>
        <button onClick={getIndex} id="1" className={`block w-[36px] h-[24px] bg-gray-300 rounded-lg shadow`}></button>
        <button onClick={getIndex} id="2" className={`block w-[36px] h-[24px] bg-gray-300 rounded-lg shadow`}></button>
        <button onClick={getIndex} id="3" className={`block w-[36px] h-[24px] bg-gray-300 rounded-lg shadow`}></button>
        <button onClick={getIndex} id="4" className={`block w-[36px] h-[24px] bg-gray-300 rounded-lg shadow`}></button>
        <button onClick={getIndex} id="5" className={`block w-[36px] h-[24px] bg-gray-300 rounded-lg shadow`}></button>
      </div>
    </div>
  );
};

export default Rating;
