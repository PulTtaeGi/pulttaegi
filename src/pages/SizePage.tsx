import mainLogo from "../assets/icons/main_logo.png";
import styled, { keyframes } from "styled-components";
export const SizePage = () => {
  return (
    <div
      id="sizepage"
      className="fixed z-50 top-0  left-0 bg-slate-100  h-full w-full flex justify-center items-center"
    >
      <div>
        <img src={mainLogo} alt="로고 이미지"></img>
        <h1 className="text-green-4 text-3xl font-black tracking-tight  whitespace-nowrap text-center m-10">
          풀 때 기
        </h1>
        <div className="text-black font-bold  text-center">
          <p>지원하지 않는 해상도 입니다.</p>
          <p>화면을 줄여주세요.</p>
        </div>
        <Monitor></Monitor>
        <div className="mt-4 text-xs text-gray-400 text-center">
          copyright 2023. pulttaegi
        </div>
      </div>
    </div>
  );
};

const ani = keyframes`
    0 {
        width : 100%   
    }
 
    100% {
        width: 50%
    }
`;

const Monitor = styled.div`
  margin-top: 50px;
  margin-bottom: 30px;
  position: relative;
  transform: translateX(-50%);
  left: 50%;
  width: 100%;
  height: 80px;
  border-radius: 10px;
  background: transparent;
  border: 5px solid #285943;
  animation: ${ani} 2s ease infinite;
`;
