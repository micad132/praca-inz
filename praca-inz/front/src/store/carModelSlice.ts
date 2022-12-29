import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import CarModelService, {CarModelType} from "../services/CarModelService";
import {RootState} from "./index";
import CommercialService, {CommercialType} from "../services/CommercialService";


export interface CarModelState {
    singleCarModel : CarModelType
    carModels: CarModelType[],
    commercials: CommercialType[],
    isLoaded: boolean,
    error: string | undefined
}

const initialCarModel : CarModelType = {
    carModelId: 1,
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
    commercials: [],
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

export const addingCarModelThunk = createAsyncThunk(
    'cars/addCarModel',
    async (newData : any) => {
        try{
            await CarModelService.addCarModel(newData);
            const data = await CarModelService.getAllCarModels();
            return { data };
        } catch (e) {
            throw e;
        }
    }
)

export const deletingCarModelThunk = createAsyncThunk(
    "cars/deleteCarModelById",
    async (id : number) => {
        try {
            await CarModelService.deleteCarModelById(id);
            const data = await CarModelService.getAllCarModels();
            return { data };
        } catch (e) {
            throw e;
        }
    }
)

export const deletingCarModelWithCommercialThunk = createAsyncThunk(
    "cars/deleteCarModelWithCommercial",
    async (newData : any) => {
        try {
            await CarModelService.deleteCarModelWithCommercial(newData);
            const  data = await CarModelService.getAllCarModels();
            const commercialsData = await CommercialService.getAllCommercials();
            return { data, commercialsData };
        } catch (e) {
            throw e;
        }
    }
)

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

export const deleteCommercialThunk = createAsyncThunk(
    "commercial/deleteCommercial",
    async (commercialId : number) => {
        try{
            console.log('COMMERCIAL ID');
            await CommercialService.deleteCommercial(commercialId);
            const data = await CommercialService.getAllCommercials();
            return { data };
        }catch (e) {
            throw e;
        }
    }
)

export const addCommercialThunk = createAsyncThunk(
    'commercial/addCommercial',
    async ({id,name} : any) => {
        try{
            console.log('co jest 5');
            await CommercialService.addNewCommercial(id,name);
            const data = await CommercialService.getAllCommercials();
            return { data };
        } catch (e) {
            throw e;
        }
    }
)

export const getAllCarModels = (state : RootState)  => state.carModels.carModels;
export const getImagesError = (state : RootState) => state.carModels.error;
export const getCarModelById = (state : RootState) => state.carModels.singleCarModel;
export const getIsCarModelFetched = (state : RootState) => state.carModels.isLoaded;
export const getAllCommercials = (state : RootState)  => state.carModels.commercials;


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
                state.carModels = action.payload.data;
                state.isLoaded = true;
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
            .addCase(addingCarModelThunk.rejected, (state, action) => {

            })
            .addCase(addingCarModelThunk.fulfilled, (state, action) => {
                state.carModels = action.payload.data;
            })
            .addCase(deletingCarModelThunk.fulfilled, (state, action) => {
                state.carModels = action.payload.data;
            })
            .addCase(deletingCarModelWithCommercialThunk.fulfilled, (state, action) => {
                state.carModels = action.payload.data;
                state.commercials = action.payload.commercialsData;
            })
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
            .addCase(deleteCommercialThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(deleteCommercialThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.commercials = action.payload.data;
            })
            .addCase(deleteCommercialThunk.rejected, (state, action) => {
                state.error = action.error.message;
            })
            .addCase(addCommercialThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(addCommercialThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.commercials = action.payload.data;
            })
            .addCase(addCommercialThunk.rejected, (state, action) => {
                state.error = action.error.message;
            })
    }

})

export default carModelSlice.reducer;