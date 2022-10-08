import axios from 'axios';
import {RegisterValuesTypes} from "../utils/types/AuthorizationTypes";
import {URL} from "../utils/GlobalVariables";
import {NewUserDetailsType} from "../pages/ProfilePage/AccountSettings/UpdatingInfo";

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

    getUsers: async () => {
        const res = await axios.get(`${URL}/user/getAllUsers`)
        return res.data;
    },

    getLoggedUser: async () => {
        const res = await axios.get(`${URL}/user/getLoggedUser`)
        return res.data;
    },

    getUserDetailsDTO: async () => {
        const res = await axios.get(`${URL}/user/getUserDetails`)
        return res.data;
    },

    updateUserDetails: async (data : NewUserDetailsType) => {
        console.log('WTF', data);
        // await axios.put(`${URL}/user/updateUserDetails`,{ newUserDetails: data})
        const res = await axios({
            method: 'put',
            url: `${URL}/user/updateUserDetails`,
            // data: {
            //     newUserDetails: data
            // }
            data: data
        });
    },

    getUpdatedUser: async () => {
        const res = await axios.get(`${URL}/user/getUserById`)
        return res.data;
    }
}

export default RegisterService;
