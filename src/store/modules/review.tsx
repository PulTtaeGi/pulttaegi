import { createSlice } from "@reduxjs/toolkit";

interface ratingProps {
    taste : number,
    sanitation : number,
    welbeing : number,
}

interface ReviewType {
    content : string,
    hashtag : string[],
    img : string,
    rating : ratingProps,
    title : string,
    userid : string,
}

const initialState: Array<any> = []

export const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        setData : (state, action) => {
            return [...state, ...action.payload]
        }
    }
})

export default reviewSlice.reducer
export const { setData } = reviewSlice.actions