import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import ImageService, {ImageType} from "../services/ImageService";
import {RootState} from "./index";


export interface ImageState {
    images: ImageType[],
    isLoaded: boolean,
    error: string | undefined,
    imageId: number,
}

const initialState : ImageState  = {
    images: [],
    isLoaded: false,
    error: '',
    imageId: 1,
}

export const fetchImagesThunk = createAsyncThunk(
    "images/getAllImages",
    async () => {
        try{
            const data = await ImageService.getAllImages();
            return { data };

        }catch(err){
            throw err;
        }
    }
)

export const addingImageThunk = createAsyncThunk(
    'images/uploadImage',
    async (newData : any) => {
        try{
            const imageData = await ImageService.addImage(newData);
            return { imageData };

        } catch (e) {
            throw e;
        }
    }
)


export const getAllImages = (state : RootState)  => state.images.images;
export const getImagesError = (state : RootState) => state.images.error;
export const getImageToAddId = (state : RootState) => state.images.imageId;


const imageSlice = createSlice({
    name: 'imagess',
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
            .addCase(addingImageThunk.fulfilled, (state, action) => {
                state.images = action.payload.imageData;
            })
    }

})

export default imageSlice.reducer;