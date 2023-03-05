import { AppDispatch } from "../store/configureStore";
import { fetchMarkets } from "../store/modules/market";

const useMarket = async (dispatch: AppDispatch) => {
  try {
    const markets = await dispatch(fetchMarkets()).unwrap();
    return markets;
  } catch (err) {
    console.log(err);
  }
};

export default useMarket;
