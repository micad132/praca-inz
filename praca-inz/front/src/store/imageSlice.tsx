import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import CommercialService from "../services/CommercialService";
import ImageService, {ImageType} from "../services/ImageService";


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

const fetchImagesThunk = createAsyncThunk(
    "image/getAllImages",
    async () => {
        try{
            const data = await ImageService.getAllImages();
            return { data };

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)

export const getAllImages = (state : ImageState)  => state.images;
export const getImagesError = (state : ImageState) => state.error;


export const imageSlice = createSlice({
    name: 'images',
    initialState,
    reducers: {
        fetchAllImages: (state,{payload}) => {

        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchImagesThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchImagesThunk.fulfilled, (state, action) => {
                state.isLoaded = true;

            })
            .addCase(fetchImagesThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
    }

})