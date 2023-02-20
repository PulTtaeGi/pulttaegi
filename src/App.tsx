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
// import First from "./components/First";
// import Second from "./pages/Second";
import Total from "./pages/Total";
import MyReview from "./pages/MyReview";
import TotalReview from "./pages/TotalReview";
import { useAppDispatch } from "./store/hooks/configureStore.hook";
import { fetchMarkets } from "./store/modules/market";
import { firestore } from "./api/firebase";
import { setData } from "./store/modules/review";
import EditReview from "./pages/EditReview";
import useMarket from "./hooks/useMarket";
import SearchResult from "./pages/SearchResult";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    useMarket(dispatch);
  }, []);

  const [getReviews, setGetReviews] = useState<Array<any>>();

  useEffect(() => {
    const reviewList = firestore.collection("review");
    const totalData: any = [];
    reviewList.get().then((docs) => {
      docs.forEach((doc) => {
        if (doc.exists) {
          totalData.push(doc.data());
        }
      });
      totalData !== getReviews ? setGetReviews(totalData) : null;
    });
  }, []);

  useEffect(() => {
    getReviews !== undefined ? dispatch(setData(getReviews)) : null;
  }, getReviews);

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
          <Route path="/review/my" element={<MyReview />}></Route>
          <Route path="/searchResult" element={<SearchResult />}></Route>
          {/* <Route path="/second" element={<Second />}></Route> */}
          {/* <Route path="/total" element={<Total />}></Route> */}
          <Route path="/review/:title" element={<Review />}></Route>
          <Route path="review/total" element={<TotalReview />}></Route>
          <Route path="review/edit/:title" element={<EditReview />}></Route>
          <Route path="/detail/:title" element={<Detail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
