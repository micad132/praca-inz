import axios from 'axios';
import { URL } from '../utils/GlobalVariables';
import { PartDetails } from "../store/partSlice";


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

    addPart: async (partData : PartDetails ) => {
        return axios({
            method: 'POST',
            url: `${URL}/part/addPart`,
            data: partData,
            headers: {
            }
        })
    }

}

export default PartService;