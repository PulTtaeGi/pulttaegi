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
        }
    }
})

export default reviewSlice.reducer
export const { setData, deleteData, addData } = reviewSlice.actions