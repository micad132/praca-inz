import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import RegisterService from "../services/RegisterService";

const initialState = {
    userRole: {
        id: 1,
        name: '',
        email: '',
        password: '',
        cityName: '',
        postalCode: '',
        role: 'USER'
    },
    userDetailsDTO: {
        id: 1,
        name: '',
        cityName: '',
        postalCode: '',
    },
    isLoaded: false
}

export const fetchUserDetailsThunk = createAsyncThunk(
    "user/getUserInfo",
    async () => {
        try{
            const data = await RegisterService.getLoggedUser();
            console.log('DANE REDUX USER', data);
            return { data };

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)

export const fetchUserDTODetailsThunk = createAsyncThunk(
    'user/getUserDetails',
    async () => {
        try{
            const data = await RegisterService.getUserDetailsDTO();
            return { data };
        }catch (e) {
            throw e;
        }
    }
)

export const getLoggedUser = (state : any) => state.user.userRole;
export const getLoggedUserDetailsDTO = (state : any) => state.user.userDetailsDTO;

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchUserDetailsThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchUserDetailsThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.userRole = action.payload.data;
                // return action.payload.data;
            })
            .addCase(fetchUserDetailsThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.userRole = initialState.userRole;

            })
            .addCase(fetchUserDTODetailsThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchUserDTODetailsThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.userDetailsDTO = action.payload.data;
            })
            .addCase(fetchUserDTODetailsThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.userDetailsDTO = initialState.userDetailsDTO;
            })
    }

})

export default userSlice.reducer;