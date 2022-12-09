import axios from 'axios';
import { URL } from '../utils/GlobalVariables';
import { PartDetails } from "../store/partSlice";


export type PartType = {
    partId: number,
    partName: string,
    partPrice: number,
}

const PartService = {
    getAllParts: async () => {
        const res = await axios.get(`${URL}/part/getAllParts`)
        return res.data;
    },

    deletePart: async (id : number) => {
        return await  axios.delete(`${URL}/part/deletePart/${id}`)
    },

    addPart: async (partData : PartDetails ) => {
        return axios({
            method: 'POST',
            url: `${URL}/part/addPart`,
            data: partData,
            headers: {
            }
        })
    },

    updatePart: async (newData: PartType) => {
        return axios({
            method: 'PUT',
            url: `${URL}/part/updatePart`,
            data: newData,
        })
    }

}

export default PartService;