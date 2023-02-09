import { useState } from "react";
import MyPage from "./pages/MyPage";
import Review from "./pages/Review";

import "./tailwind.css";

function App() {
  return (
    <div className="App h-screen">
      {/* <MyPage /> */}
      <Review />
    </div>
  );
}

export default App;
