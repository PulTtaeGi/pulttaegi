import { MenuType } from "../../store/modules/market";

const MenuList = ({ menuList }: { menuList: MenuType[] }) => {
  return (
    <div className="flex flex-col w-full rounded-xl overflow-hidden mb-8 shadow-lg">
      <ul className="flex p-4 pt-2 flex-col gap-2 w-full bg-gray-100">
        <span className="block text-xl font-bold text-green-4">MENU</span>
        {menuList.map((item: MenuType, index: number) => {
          return (
            <div key={index} className="flex gap-2">
              <li className="max-w-[250px] font-bold tracking-tight whitespace-nowrap text-ellipsis overflow-hidden">
                {item.menuName}
              </li>
              <span className="text-green-3 font-bold tracking-tight">{`${item.price}원`}</span>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MenuList;
