import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./index";
import CompanyService, { CompanyType } from "../services/CompanyService";


export interface CompaniesState {
    companies: CompanyType[]
    isLoaded: boolean,
    error: string | undefined
}



const initialState : CompaniesState = {

    companies: [],
    isLoaded: false,
    error: '',
}

export const fetchCompaniesThunk = createAsyncThunk(
    "companies/getAllCompanies",
    async () => {
        try{
            const data = await CompanyService.getAllCompanies();
            return { data }

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)


export const CommercialThunk = {
    fetchCompaniesThunk: fetchCompaniesThunk
}

export const getAllCompanies = (state : RootState)  => state.companies.companies;
export const getCommercialsError = (state : RootState) => state.companies.error;


const companiesSlice = createSlice({
    name: 'companies',
    initialState,
    reducers: {
        fetchAllCompanies: (state,{payload}) => {

        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchCompaniesThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchCompaniesThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.companies = action.payload.data;

            })
            .addCase(fetchCompaniesThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
    }

})

export default companiesSlice.reducer;

