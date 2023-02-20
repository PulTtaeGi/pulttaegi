interface menuListProps {
  name: string;
  price: string;
}

const MenuList = () => {
  const menuList: Array<menuListProps> = [
    {
      name: "닭가슴살 샐러드",
      price: "6,200",
    },
    {
      name: "BLT 샌드위치",
      price: "5,500",
    },
    {
      name: "에그듬뿍 마요 샌드위치",
      price: "3,500",
    },
  ];
  return (
    <div className="flex flex-col w-full rounded-xl overflow-hidden mb-8 shadow-lg">
      <ul className="flex p-4 pt-2 flex-col gap-2 w-full bg-gray-100">
        <span className="block text-xl font-extrabold text-green-4">MENU</span>
        {menuList.map((item: menuListProps, index: number) => {
          return (
            <div key={index} className="flex gap-2">
              <li className="max-w-[250px] font-bold tracking-tight whitespace-nowrap text-ellipsis overflow-hidden">
                {item.name}
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
