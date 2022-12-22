import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "./index";

export interface PageType {
    pageNumber: number
}

const initialState : PageType = {
    pageNumber: 1,
}

export const getPageNumber = (state: RootState) => state.page.pageNumber;

const pageSlice = createSlice({
    name: 'page',
    initialState,
    reducers: {
        changePageNumber(state, action: PayloadAction<number>) {
            state.pageNumber = action.payload;
        }
    }
})

export const { changePageNumber } =  pageSlice.actions;
export default pageSlice.reducer;