import axios from 'axios';
import {URL} from '../utils/GlobalVariables';

export type CommercialType = {
    id: number
    title: string,
    imgSrc: string,
    carModelId: number
}

const CommercialService = {
    getAllCommercials: async () => {
        const res = await axios.get(`${URL}/getAllCommercials`)
        return res.data;
    },

    addNewCommercial: async () => {

    }
}

export default CommercialService;