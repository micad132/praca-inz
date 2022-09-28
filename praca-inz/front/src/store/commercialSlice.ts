import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import CommercialService, {CommercialType} from "../services/CommercialService";
import {RootState} from "./index";


export interface CommercialsState {
    commercials: CommercialType[]
    isLoaded: boolean,
    error: string | undefined
}



const initialState : CommercialsState = {

    commercials: [],
    isLoaded: false,
    error: '',
}

export const fetchCommercialsThunk = createAsyncThunk(
    "commercial/getAllCommercials",
    async () => {
        try{
            const data = await CommercialService.getAllCommercials();
            return { data }

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)

export const CommercialThunk = {
    fetchCommercialsThunk: fetchCommercialsThunk
}

export const getAllCommercials = (state : RootState)  => state.commercials.commercials;
export const getCommercialsError = (state : RootState) => state.commercials.error;


const commercialSlice = createSlice({
    name: 'commercials',
    initialState,
    reducers: {
        fetchAllCommercials: (state,{payload}) => {

        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCommercialsThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchCommercialsThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.commercials = action.payload.data;

            })
            .addCase(fetchCommercialsThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
    }

})

export default commercialSlice.reducer;

