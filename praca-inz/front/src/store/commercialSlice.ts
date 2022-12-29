 import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import CommercialService, {CommercialType} from "../services/CommercialService";
// import {RootState} from "./index";
//
//
// export interface CommercialsState {
//     commercials: CommercialType[]
//     isLoaded: boolean,
//     error: string | undefined
// }
//
//
//
// const initialState : CommercialsState = {
//
//     commercials: [],
//     isLoaded: false,
//     error: '',
// }
//
//
//
// export const CommercialThunk = {
//     fetchCommercialsThunk: fetchCommercialsThunk
// }
//
// export const getAllCommercials = (state : RootState)  => state.commercials.commercials;
// export const getCommercialsError = (state : RootState) => state.commercials.error;
//
//
// const commercialSlice = createSlice({
//     name: 'commercials',
//     initialState,
//     reducers: {
//         fetchAllCommercials: (state,{payload}) => {
//
//         }
//     },
//     extraReducers(builder) {
//         builder
//             .addCase(fetchCommercialsThunk.pending, (state, action) => {
//                 state.isLoaded = false;
//             })
//             .addCase(fetchCommercialsThunk.fulfilled, (state, action) => {
//                 state.isLoaded = true;
//                 state.commercials = action.payload.data;
//
//             })
//             .addCase(fetchCommercialsThunk.rejected, (state, action) => {
//                 state.isLoaded = false;
//                 state.error = action.error.message;
//             })
//             .addCase(deleteCommercialThunk.pending, (state, action) => {
//                 state.isLoaded = false;
//             })
//             .addCase(deleteCommercialThunk.fulfilled, (state, action) => {
//                 state.isLoaded = true;
//                 state.commercials = action.payload.data;
//             })
//             .addCase(deleteCommercialThunk.rejected, (state, action) => {
//                 state.error = action.error.message;
//             })
//             .addCase(addCommercialThunk.pending, (state, action) => {
//                 state.isLoaded = false;
//             })
//             .addCase(addCommercialThunk.fulfilled, (state, action) => {
//                 state.isLoaded = true;
//                 state.commercials = action.payload.data;
//             })
//             .addCase(addCommercialThunk.rejected, (state, action) => {
//                 state.error = action.error.message;
//             })
//     }
//
// })
//
// export default commercialSlice.reducer;
//
