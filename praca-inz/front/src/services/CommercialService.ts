import axios from 'axios';
import {URL} from '../utils/GlobalVariables';
import {CarModelType} from "./CarModelService";

export type CommercialType = {
    commercialId: number
    name: string,
    description: string,
    carModelId: number,
    imageName: string

}

const CommercialService = {
    getAllCommercials: async () => {
        const res = await axios.get(`${URL}/commercial/getAllCommercials`)
        return res.data;
    },

    addNewCommercial:  (id : string  , name : string ) => {
        return axios({
            method: 'POST',
            url: `${URL}/commercial/${id}`,
            data: {
                name,
                description: 'siemanko',
                carModel: { id }
            },
            headers: {
            }
        })
    },

    deleteCommercial: async (id: number) => {
        return await axios.delete(`${URL}/commercial/delete/${id}`)
    }
}

export default CommercialService;