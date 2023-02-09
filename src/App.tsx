import { useState } from "react";
import MyPage from "./pages/MyPage";
import Review from "./pages/Review";

import "./tailwind.css";
import { Route, Routes } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      {/* <div className="App text-3xl underline ">
        <button className="btn btn-primary">Pulttaegi</button>
      </div> */}
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/detail" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
