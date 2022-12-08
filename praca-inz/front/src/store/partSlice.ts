import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "./index";
import PartService, { PartType } from "../services/PartService";


export interface PartDetails {
    partName: string,
    partPrice: number
}

export interface PartState {
    parts: PartType[]
    isLoaded: boolean,
    isShowAddingPartToOrderModal: boolean,
    isShowAddingPartToDatabase: boolean,
    partDetails: PartDetails
    error: string | undefined
}



const initialState : PartState = {

    parts: [],
    isLoaded: false,
    error: '',
    isShowAddingPartToOrderModal: false,
    isShowAddingPartToDatabase: false,
    partDetails: { partName: '', partPrice: 1}
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

export const addingPartThunk = createAsyncThunk(
    "parts/addPart",
    async (partData : PartDetails) => {
        try {
            await PartService.addPart(partData);
            const data = await PartService.getAllParts();
            return {data};
        } catch (e) {
            throw e;
        }
    }
)

export const deletingPartThunk = createAsyncThunk(
    'parts/deletePart',
    async (id : number) => {
        try {
            await PartService.deletePart(id);
            const data = await PartService.getAllParts();
            return { data };
        } catch (e) {
            throw e;
        }
    }
)

export const updatePartThunk = createAsyncThunk(
    'part/updatePart',
    async (newData : PartType ) => {
        try {
            await PartService.updatePart(newData);
            const data = await PartService.getAllParts();
            return { data };
        } catch (e) {
            throw e;
        }
    }
)

export const PartThunk = {
    fetchPartsThunk: fetchPartsThunk
}

export const getAllParts = (state : RootState)  => state.parts.parts;
export const getCommercialsError = (state : RootState) => state.parts.error;
export const getIsAddingModalOpen = (state: RootState) => state.parts.isShowAddingPartToOrderModal;
export const getIsAddingPartToDatabaseModalOpen = (state : RootState) => state.parts.isShowAddingPartToDatabase;
export const getPartDetails = (state : RootState) => state.parts.partDetails;


const partSlice = createSlice({
    name: 'parts',
    initialState,
    reducers: {
        changeModalVisibility(state, action: PayloadAction<boolean>) {
            state.isShowAddingPartToOrderModal = action.payload;
        },
        changeAddingPartToDatabaseVisibility(state, action: PayloadAction<boolean>) {
            state.isShowAddingPartToDatabase = action.payload;
        },
        setPartDetails(state,action: PayloadAction<PartDetails>) {
            state.partDetails = action.payload;
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
            .addCase(addingPartThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(addingPartThunk.fulfilled, (state, action) => {
                state.parts = action.payload.data;
                state.isLoaded = true;
            })
            .addCase(addingPartThunk.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(deletingPartThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(deletingPartThunk.fulfilled, (state, action) => {
                state.parts = action.payload.data;
            })
            .addCase(deletingPartThunk.rejected, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(updatePartThunk.fulfilled, (state, action) => {
                state.parts = action.payload.data;
            })
    }

})

export const { changeModalVisibility, changeAddingPartToDatabaseVisibility, setPartDetails } = partSlice.actions;
export default partSlice.reducer;

