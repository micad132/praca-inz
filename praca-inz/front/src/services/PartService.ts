import axios from 'axios';
import {URL} from '../utils/GlobalVariables';


export type PartType = {
    partId: string,
    partName: string,
    partPrice: number
}

const PartService = {
    getAllParts: async () => {
        const res = await axios.get(`${URL}/part/getAllParts`)
        return res.data;
    },

}

export default PartService;