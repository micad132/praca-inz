import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import CommercialService from "../services/CommercialService";


export interface CommercialsState {
    commercials: SingleCommercialState[]
}


export interface  SingleCommercialState  {
    id: number,
    idForCommercial: number,
    title: string,
    imgSrc: string
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
    commercials: []
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

export const commercialSlice = createSlice({
    name: 'commercials',
    initialState,
    reducers: {
        fetchAllCommercials: (state,{payload}) => {

        }
    }

})

