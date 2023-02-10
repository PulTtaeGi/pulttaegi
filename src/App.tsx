import { useState } from "react";
import "./tailwind.css";
import ErrorPage from "./pages/ErrorPage";
import First from "./components/First";
import Second from "./pages/Second";
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Total from "./pages/Total"


function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
        <Routes>

          <Route path="/errorPage" element={<ErrorPage />}></Route>
          <Route path="/first" element={<First />}></Route>
          <Route path="/second" element={<Second />}></Route>
          <Route path="/total" element={<Total />}></Route>
          
        </Routes>
      </BrowserRouter>
  );
}

export default App;
