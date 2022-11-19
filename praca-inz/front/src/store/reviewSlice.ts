import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {RootState} from "./index";
import ReviewService, {AddingReviewType, ReviewType} from "../services/ReviewService";




export interface ReviewState {
    singleReview: ReviewType
    allReviews: ReviewType[],
    reviewsForCarModel : ReviewType[],
    isLoaded: boolean,
    error: string | undefined
}



const initialState : ReviewState  = {
    singleReview: {reviewModelId: 1, description: '', date: '', rate: 0, userNick: '', isVulgar: false},
    allReviews: [],
    reviewsForCarModel: [],
    isLoaded: false,
    error: ''
}

export const fetchAllReviewsForCarModels = createAsyncThunk(
    "review/getAllReviews",
    async () => {
        try{
            const data = await ReviewService.getAllReviewsForCarModels();
            return { data };

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)

export const fetchReviewsForCarModel = createAsyncThunk(
    "review/getReviewForCarModel",
    async (id : number) => {
        try{
            const data = await ReviewService.getReviewsForCarModel(id);
            return { data };
        }catch (e) {
            throw e;
        }
    }
)

export const addingReviewForCarModel = createAsyncThunk(
    "review/adding",
    async ({ id, review} : any) => {
        try{
            await ReviewService.addReviewForCarModel(review,id);
            const data = await ReviewService.getReviewsForCarModel(id);
            return { data };
        }catch (e) {
            throw e;
        }
    }
)

export const updatingReview = createAsyncThunk(
    "review/updateReview",
    async ({id,isVulgar} : any) => {
        try{
            await ReviewService.updateReview(id,isVulgar);
        } catch (e) {
            throw e;
        }
    }
)

export const deleteReviewById = createAsyncThunk(
    "review/deleteReview",
    async (id : number) => {
        try{
            await ReviewService.deleteReviewById(id);
            const data = await ReviewService.getAllReviewsForCarModels();
            return { data };
        }catch (e) {
            throw e;
        }
    }
)

export const getAllReviewsForCarModel = (state : RootState)  => state.reviews.allReviews;
export const getReviewsForCarModel = (state : RootState) => state.reviews.reviewsForCarModel;


const carModelSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAllReviewsForCarModels.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchAllReviewsForCarModels.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.allReviews = action.payload.data;
                // return action.payload.data;
            })
            .addCase(fetchAllReviewsForCarModels.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
            .addCase(fetchReviewsForCarModel.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchReviewsForCarModel.fulfilled, (state, action) => {
                state.reviewsForCarModel = action.payload.data;
                state.isLoaded = true;
            })
            .addCase(fetchReviewsForCarModel.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(addingReviewForCarModel.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(addingReviewForCarModel.fulfilled, (state, action) => {
                state.reviewsForCarModel = action.payload.data;
                state.isLoaded = true;
            })
            .addCase(addingReviewForCarModel.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(updatingReview.pending, (state, action) => {
            })
            .addCase(updatingReview.fulfilled, (state, action) => {
            })
    }

})

export default carModelSlice.reducer;