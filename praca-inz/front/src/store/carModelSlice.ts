import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import CarModelService, {CarModelType} from "../services/CarModelService";
import {RootState} from "./index";


export interface CarModelState {
    carModels: CarModelType[],
    isLoaded: boolean,
    error: string | undefined
}

const initialState : CarModelState  = {
    carModels: [],
    isLoaded: false,
    error: ''
}

export const fetchCarModelsThunk = createAsyncThunk(
    "cars/getAllCarModels",
    async () => {
        try{
            const data = await CarModelService.getAllCarModels();
            console.log('DANE REDUX', data.data);
            return { data };

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)

export const getAllCarModels = (state : RootState)  => state.carModels.carModels;
export const getImagesError = (state : RootState) => state.carModels.error;


const carModelSlice = createSlice({
    name: 'cars',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCarModelsThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchCarModelsThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.carModels = action.payload.data;
                // return action.payload.data;
            })
            .addCase(fetchCarModelsThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
    }

})

export default carModelSlice.reducer;