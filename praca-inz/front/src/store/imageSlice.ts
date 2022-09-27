import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import ImageService, {ImageType} from "../services/ImageService";
import {RootState} from "./index";


export interface ImageState {
    images: ImageType[],
    isLoaded: boolean,
    error: string | undefined
}

const initialState : ImageState  = {
    images: [],
    isLoaded: false,
    error: ''
}

export const fetchImagesThunk = createAsyncThunk(
    "images/getAllImages",
    async () => {
        try{
            const data = await ImageService.getAllImages();
            console.log('DANE REDUX', data.data);
            return { data };

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)


export const getAllImages = (state : RootState)  => state.images.images;
export const getImagesError = (state : RootState) => state.images.error;


const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchImagesThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchImagesThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.images = action.payload.data;
                // return action.payload.data;
            })
            .addCase(fetchImagesThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
    }

})

export default imageSlice.reducer;