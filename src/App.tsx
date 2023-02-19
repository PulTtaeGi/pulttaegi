import "./tailwind.css";
import { useEffect, useState } from "react";
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
import Second from "./pages/SearchResult";
import Total from "./pages/Total";
import useMarket from "./hooks/useMarket";
import { useAppDispatch } from "./store/hooks/configureStore.hook";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    useMarket(dispatch);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<ErrorPage />}></Route>
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
