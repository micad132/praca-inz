import axios from 'axios';
import {URL} from '../utils/GlobalVariables';

export type CommercialType = {
    id: number
    title: string,
    imgSrc: string,
    idForCommercial: number
}

const CommercialService = {
    getAllCommercials: async () => {
        const res = await axios.get(`${URL}/getAllCommercials`)
        return res.data;
    }
}

export default CommercialService;