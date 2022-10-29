import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import CarModelService, {CarModelType} from "../services/CarModelService";
import {RootState} from "./index";


export interface CarModelState {
    singleCarModel : CarModelType
    carModels: CarModelType[],
    isLoaded: boolean,
    error: string | undefined
}

const initialCarModel : CarModelType = {
    id: 1,
    name: '',
    price: 0,
    rating: 0,
    description: '',
    enginePower: 0,
    engineCapacity: 0,
    gearbox: '',
    carBody: '',
    productionCountry: '',
    imageModel: { id: 1, image: '', name: '', type: ''}
}

const initialState : CarModelState  = {
    singleCarModel: initialCarModel,
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

export const fetchCarModelById = createAsyncThunk(
    "cars/getCarModelById",
    async (id : number) => {
        try{
            const data = await CarModelService.getCarModelById(id);
            return { data };
        }catch (e) {
            throw e;
        }
    }
)

export const getAllCarModels = (state : RootState)  => state.carModels.carModels;
export const getImagesError = (state : RootState) => state.carModels.error;
export const getCarModelById = (state : RootState) => state.carModels.singleCarModel;


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
            .addCase(fetchCarModelById.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchCarModelById.fulfilled, (state, action) => {
                state.singleCarModel = action.payload.data;
                state.isLoaded = true;
            })
            .addCase(fetchCarModelById.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }

})

export default carModelSlice.reducer;