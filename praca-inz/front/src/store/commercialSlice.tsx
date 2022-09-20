import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import CommercialService, {CommercialType} from "../services/CommercialService";


export interface CommercialsState {
    commercials: CommercialType[]
    isLoaded: boolean,
    error: string | undefined
}



const initialState : CommercialsState = {
    // {
    //     id: 1,
    //     title: 'testowa reklama',
    //     imgSrc: 'https://picsum.photos/200/300'
    // },
    // {
    //     id: 2,
    //     title: 'druga reklama',
    //     imgSrc: 'https://picsum.photos/200/300'
    // },
    // {
    //     id: 3,
    //     title: 'trzecia reklama',
    //     imgSrc: 'https://picsum.photos/200/300'
    // }
    commercials: [],
    isLoaded: false,
    error: '',
}

const fetchCommercialsThunk = createAsyncThunk(
    "commercial/getAllCommercials",
    async () => {
        try{
            const data = await CommercialService.getAllCommercials();
            return { data };

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)

export const CommercialThunk = {
    fetchCommercialsThunk: fetchCommercialsThunk
}

export const getAllCommercials = (state : CommercialsState)  => state.commercials;
export const getCommercialsError = (state : CommercialsState) => state.error;


export const commercialSlice = createSlice({
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

            })
            .addCase(fetchCommercialsThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
    }

})

