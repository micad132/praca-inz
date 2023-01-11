import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import RegisterService, {UpdateUserRoleType, UserDTOType, UserType} from "../services/RegisterService";
import {NewUserDetailsType, UserUpdateDetailsType} from "../pages/ProfilePage/AccountSettings/UpdatingInfo";
import {RootState} from "./index";


interface UserInitialStateType {
    userDetailsDTO: UserDTOType,
    allUsersDetailsDTO: UserDTOType[],
    allUsers: UserType[],
    userRole: UserType,
    isLoaded: boolean
}

const initialState : UserInitialStateType = {

    userDetailsDTO: {
        id: 1,
        name: '',
        cityName: '',
        postalCode: '',
        userRole: 'USER'
    },
    allUsers: [],
    allUsersDetailsDTO: [],
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
            return { data };

        }catch(err){
            throw err;
        }
    }
)

export const fetchUserDTODetailsThunk = createAsyncThunk(
    'user/getUserDetails',
    async (userId: number) => {
        try{
            const data = await RegisterService.getUserDetailsDTO(userId);
            return { data };
        }catch (e) {
            throw e;
        }
    }
)

export const updateUserDetailsThunk = createAsyncThunk(
    'user/updateUserDetails',
    async (data : UserUpdateDetailsType) => {
        try{
            await RegisterService.updateUserDetails(data);
            const newData = await RegisterService.getUserDetailsDTO(data.id);
            return { newData };
        }catch (e){
            throw e;
        }
    }
)

export const fetchUpdatedUser = createAsyncThunk(
    'user/getUpdatedUser',
    async () => {
        try{
            const data = await RegisterService.getUpdatedUser();
            return { data }
        }catch (e) {
            throw e;
        }
}
)


export const fetchAllUsersDTOThunk = createAsyncThunk(
    'user/getAllUsers',
    async () => {
        try {
            const data = await RegisterService.getAllUsersDTO();
            return { data }
        } catch (e) {
            throw e;
        }
    }
)

export const updateUserRoleThunk = createAsyncThunk(
    'user/updateUserRole',
    async (newData : UpdateUserRoleType) => {
        try {
            await RegisterService.updateUserRole(newData);
            const data = await RegisterService.getAllUsersDTO();
            return { data }
        } catch (e) {
            throw e;
        }
    }
)

export const deletingUserThunk = createAsyncThunk(
    'user/deleteUserById',
    async (id: number) => {
        try{
            await RegisterService.deleteUser(id);
            const data = await RegisterService.getAllUsersDTO();
            return { data }
        } catch (e) {
            throw e;
        }
    }
)

export const getAllUsersThunk = createAsyncThunk(
    'user/getAllUsersFull',
    async () => {
        try {
           const data =  await RegisterService.getAllUsers();
           return { data };
        } catch (e) {
            throw e;
        }
    }
)

export const getLoggedUser = (state : any) => state.user.userRole;
export const getLoggedUserRole = (state : any) => state.user.userRole.role;
export const getLoggedUserDetailsDTO = (state : any) => state.user.userDetailsDTO;
export const getLoggedUserNickname = (state : RootState) => state.user.userRole.name;
export const getAllUsers = (state: RootState) => state.user.allUsersDetailsDTO;
export const getAllUsersFullData = (state : RootState) => state.user.allUsers;

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
            .addCase(updateUserDetailsThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(updateUserDetailsThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.userDetailsDTO = action.payload.newData;
            })
            .addCase(updateUserDetailsThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.userDetailsDTO = initialState.userDetailsDTO;
            })
            .addCase(fetchAllUsersDTOThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchAllUsersDTOThunk.fulfilled, (state, action) => {
                state.allUsersDetailsDTO = action.payload.data;
                state.isLoaded = true;
            })
            .addCase(fetchAllUsersDTOThunk.rejected, (state, action) => {
            })
            .addCase(deletingUserThunk.fulfilled, (state, action) => {
                state.allUsersDetailsDTO = action.payload.data;
            })
            .addCase(updateUserRoleThunk.fulfilled, (state, action) => {
                state.allUsersDetailsDTO = action.payload.data;
            })
            .addCase(getAllUsersThunk.fulfilled, (state, action) => {
                state.allUsers = action.payload.data;
            })
    }

})

export default userSlice.reducer;