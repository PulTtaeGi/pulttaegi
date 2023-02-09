import "./tailwind.css";

function Total() {
  return (
    <div className="text-black bg-white flex flex-col h-screen gap-7 justify-center items-center">
      <Component title="전체" />
    </div>
  );
}

export default Total;

const Component = ({ title }: { title: string }) => {
  return (
    <div className="flex flex-col gap-4">
      {title}
      <div className="flex justify-between w-80 items-center	">
        <div className="flex items-center	gap-4">
          <img className="rounded-full" src="/public/1-6.png" width="80" />
          <div>
            인천 맛집<div>대표 메뉴</div>
          </div>
        </div>

        <img
          className="rounded-full"
          src="/public/pngwing.com.png"
          width="60"
        />
      </div>
      <div className="flex justify-between w-80 items-center	">
        <div className="flex items-center	gap-4">
          <img className="rounded-full" src="/public/1-6.png" width="80" />
          <div>
            인천 맛집<div>대표 메뉴</div>
          </div>
        </div>

        <img
          className="rounded-full"
          src="/public/pngwing.com.png"
          width="60"
        />
      </div>
      <div className="flex justify-between w-80 items-center	">
        <div className="flex items-center	gap-4">
          <img className="rounded-full" src="/public/1-6.png" width="80" />
          <div>
            인천 맛집<div>대표 메뉴</div>
          </div>
        </div>

        <img
          className="rounded-full"
          src="/public/pngwing.com.png"
          width="60"
        />
      </div>
    </div>
  );
};
