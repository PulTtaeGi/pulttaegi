import "./tailwind.css";
import { useState } from "react";
import MyPage from "./pages/MyPage";
import Review from "./pages/Review";
import Main from "./pages/Main";
import "./tailwind.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import ErrorPage from "./pages/ErrorPage";
import First from "./components/First";
import Second from "./pages/Second";
import Total from "./pages/Total"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/review" element={<Review />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
          <Route path="/errorPage" element={<ErrorPage />}></Route>
          <Route path="/first" element={<First />}></Route>
          <Route path="/second" element={<Second />}></Route>
          <Route path="/total" element={<Total />}></Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
