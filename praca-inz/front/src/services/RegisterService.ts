import axios from 'axios';
import {RegisterValuesTypes} from "../utils/types/AuthorizationTypes";
import {URL} from "../utils/GlobalVariables";

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
    }
}

export default RegisterService;
