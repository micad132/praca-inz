import axios from 'axios';
import {RegisterTypes} from "../utils/types/AuthorizationTypes";

const RegisterService = {

    addUser: async (user : RegisterTypes) => {
        return axios({
            method: 'POST',
            url: 'localhost:8080/api/v1/user',
            data: user,
        })
    }
}

export default RegisterService;
