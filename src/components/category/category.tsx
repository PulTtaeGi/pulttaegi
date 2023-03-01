// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ko from "../../assets/icons/bibimbap.png";
import cn from "../../assets/icons/catering.png";
import us from "../../assets/icons/salad.png";
import jp from "../../assets/icons/brunch.png";
import { useAppSelector } from "../../store/hooks/configureStore.hook";
import { useLocation } from "react-router";
// Import Swiper styles
import "swiper/css";
import { filterMarker } from "../map/DrawMarker";
export const Category = (coodsMarker: any) => {
  const kakaomaps = useAppSelector((state) => state.kakaomap);
  const marketAddress = useAppSelector((state) => state.search.keyword);

  const cateFilter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();

    const eventTarget = e.target as HTMLElement;
    const categoryName = eventTarget.innerText;

    filterMarker(categoryName, kakaomaps.map);
  };

  const cateArr = [
    { title: "한식", img: ko },
    { title: "브런치", img: jp },
    { title: "샐러드", img: us },
    { title: "뷔페", img: cn },
  ];

  return (
    <Swiper
      style={{
        top: "100px",
        position: "fixed",
        zIndex: "20",
        width: "96%",
        padding: "20px",
        right: "0",
      }}
      className=" text-gray-500 font-bold text-lg"
      spaceBetween={30}
      slidesPerView={2.5}
    >
      {cateArr.map((cate, i) => (
        <SwiperSlide
          key={i}
          title={cate.title}
          onClick={cateFilter}
          style={{ padding: "3px 20px", background: "#fff", display: "flex" }}
          className="rounded-xl shadow-lg bg-slate-50  justify-around  border-stone-300 border-2 flex-auto flex"
        >
          <img src={cate.img} style={{ width: "20px" }}></img>
          <span>{cate.title}</span>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
