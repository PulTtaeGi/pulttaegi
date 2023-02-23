// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ko from "../../assets/icons/food_ko_ico.png";
import cn from "../../assets/icons/food_cn_ico.png";
import us from "../../assets/icons/food_us_ico.png";
import jp from "../../assets/icons/food_jp_ico.png";
import { useAppSelector } from "../../store/hooks/configureStore.hook";

// Import Swiper styles
import "swiper/css";
import { filterMarker } from "../map/DrawMarker";
import { searchfilterMarker } from "../search/SearchMap";
export const Category = (coodsMarker: any) => {
  const kakaomaps = useAppSelector((state) => state.kakaomap);
  const cateFilter = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    const eventTarget = e.target as HTMLElement;
    const categoryName = eventTarget.innerText;
    filterMarker(categoryName, kakaomaps.map);
    searchfilterMarker(categoryName, kakaomaps.map);
  };
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
      <SwiperSlide
        onClick={cateFilter}
        style={{ padding: "5px 15px", background: "#fff", display: "flex" }}
        className="rounded-xl shadow-lg bg-slate-50  justify-around  border-stone-300 border-2 flex-auto flex"
      >
        <img src={ko} style={{ width: "20px" }}></img>

        <span>한식</span>
      </SwiperSlide>
      <SwiperSlide
        onClick={cateFilter}
        style={{ padding: "5px 15px", background: "#fff", display: "flex" }}
        className="rounded-xl shadow-lg bg-slate-50  justify-around  border-stone-300 border-2 flex-auto flex"
      >
        <img src={cn} style={{ width: "20px" }}></img>

        <span>일식</span>
      </SwiperSlide>
      <SwiperSlide
        onClick={cateFilter}
        style={{ padding: "5px 15px", background: "#fff", display: "flex" }}
        className="rounded-xl shadow-lg bg-slate-50  justify-around  border-stone-300 border-2 flex-auto flex"
      >
        <img src={us} style={{ width: "20px" }}></img>

        <span>양식</span>
      </SwiperSlide>
      <SwiperSlide
        onClick={cateFilter}
        style={{ padding: "5px 15px", background: "#fff", display: "flex" }}
        className="rounded-xl shadow-lg bg-slate-50  justify-around  border-stone-300 border-2 flex-auto flex"
      >
        <img src={jp} style={{ width: "20px" }}></img>

        <span>중식</span>
      </SwiperSlide>
    </Swiper>
  );
};
