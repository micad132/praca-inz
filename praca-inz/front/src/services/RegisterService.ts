import axios from 'axios';
import {RegisterValuesTypes} from "../utils/types/AuthorizationTypes";
import {URL} from "../utils/GlobalVariables";
import {NewUserDetailsType} from "../pages/ProfilePage/AccountSettings/UpdatingInfo";


export type UserDTOType = {
    id: number,
    name: string,
    cityName: string,
    postalCode: string,
    userRole: string
}

export type UserType = {
    id: number,
    name: string,
    email: string,
    password: string,
    cityName: string,
    postalCode: string,
    role: string
}

export type UpdateUserRoleType = {
    id: number,
    role: string
}


const RegisterService = {

    addUser: async (user : RegisterValuesTypes) => {
        return axios({
            method: 'POST',
            url: 'http://localhost:8080/api/v1/user',
            data: user,
            headers: {
                
            }
        })
    },

    getAllUsers: async () => {
        const res = await axios.get(`${URL}/user/getAllUsers`)
        return res.data;
    },

    getAllUsersDTO: async () => {
        const res = await axios.get(`${URL}/user/getAllUsersDTO`)
        return res.data;
    },
    getLoggedUser: async () => {
        const res = await axios.get(`${URL}/user/getLoggedUser`)
        return res.data;
    },

    getUserDetailsDTO: async (userId : number) => {
        const res = await axios.get(`${URL}/user/getUserDetails/${userId}`)
        return res.data;
    },

    updateUserDetails: async (data : NewUserDetailsType) => {
        // await axios.put(`${URL}/user/updateUserDetails`,{ newUserDetails: data})
        await axios({
            method: 'put',
            url: `${URL}/user/updateUserDetails`,
            // data: {
            //     newUserDetails: data
            // }
            data: data
        });
    },

    updateUserRole: async ({id,role} : UpdateUserRoleType)  => {
        await axios({
            method: 'put',
            url: `${URL}/user/updateUserRole/${id}/${role}`
        });
    },
    getUpdatedUser: async () => {
        const res = await axios.get(`${URL}/user/getUserById`)
        return res.data;
    },

    deleteUser: async (id : number) => {
        await axios.delete(`${URL}/user/deleteUserById/${id}`)
    }
}

export default RegisterService;
