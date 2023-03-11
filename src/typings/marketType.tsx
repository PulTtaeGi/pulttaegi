export interface MenuType {
  menuName: string;
  price: string;
}
export interface MarketType {
  id: number;
  title: string;
  img: string;
  address: string;
  menu: Array<MenuType>;
  lat: number;
  lng: number;
  category: string;
  clean: number;
  taste: number;
  calorie: number;
  isfavorite: boolean;
}
