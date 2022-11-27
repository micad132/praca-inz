import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "./index";
import PartService, { PartType } from "../services/PartService";


export interface PartState {
    parts: PartType[]
    isLoaded: boolean,
    isShowModal: boolean,
    error: string | undefined
}



const initialState : PartState = {

    parts: [],
    isLoaded: false,
    error: '',
    isShowModal: false
}

export const fetchPartsThunk = createAsyncThunk(
    "parts/getAllParts",
    async () => {
        try{
            const data = await PartService.getAllParts();
            return { data }

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)


export const PartThunk = {
    fetchPartsThunk: fetchPartsThunk
}

export const getAllParts = (state : RootState)  => state.parts.parts;
export const getCommercialsError = (state : RootState) => state.parts.error;
export const getIsAddingModalOpen = (state: RootState) => state.parts.isShowModal;


const partSlice = createSlice({
    name: 'parts',
    initialState,
    reducers: {
        changeModalVisibility(state, action: PayloadAction<boolean>) {
            state.isShowModal = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPartsThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchPartsThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.parts = action.payload.data;

            })
            .addCase(fetchPartsThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
    }

})

export const { changeModalVisibility } = partSlice.actions;
export default partSlice.reducer;

