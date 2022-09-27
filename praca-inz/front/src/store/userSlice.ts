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

export const getLoggedUser = (state : any) => state.user.userRole;

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
    }

})

export default userSlice.reducer;