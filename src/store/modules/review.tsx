import { createSlice } from "@reduxjs/toolkit";

const initialState: Array<any> = []

export const reviewSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        setData : (state, action) => {
            return [...state, ...action.payload]
        },

        deleteData : (state, action) => {
            return state.filter((item) => item.id !== action.payload.id)
        },

        addData : (state, action) => {
            return [...state, action.payload]
        },

        editData (state, action) {
            const { content, hashtag, img, rating } = action.payload
            const id = action.payload.id
            const targetReview = state.find((item) => item.id === id)
            if(targetReview) {
                targetReview.content = content
                targetReview.hashtag = hashtag
                targetReview.img = img
                targetReview.rating = rating
            }
        }
    }
})

export default reviewSlice.reducer
export const { setData, deleteData, addData, editData } = reviewSlice.actions