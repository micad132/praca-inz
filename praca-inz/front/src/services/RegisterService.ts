import axios from 'axios';
import {RegisterValuesTypes} from "../utils/types/AuthorizationTypes";

const RegisterService = {

    addUser: async (user : RegisterValuesTypes) => {
        return axios({
            method: 'POST',
            url: 'http://localhost:8080/api/v1/user',
            data: user,
            headers: {
                
            }
        })
    }
}

export default RegisterService;
