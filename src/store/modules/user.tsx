import { createSlice } from "@reduxjs/toolkit";

interface menuType {
    name: string
    price: string
}

interface MarketType {
    title: string,
    img: string,
    address: string,
    menu: Array<menuType> 
    lat: number,
    lng: number
}

const initialState: MarketType = {
    title: "",
    img: "",
    address: "",
    menu: [],
    lat: 0,
    lng: 0,

    // calorie: 366,
    // taste: 5,
    // clean: 4,
}

export const userSlice = createSlice({
    name: "markets",
    initialState,
    reducers: {
        setData : (state, action) => {
            return {...state, ...action.payload}
        }
    }
})

export default userSlice.reducer
export const { setData } = userSlice.actions