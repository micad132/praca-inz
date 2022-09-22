import axios from 'axios';
import {URL} from '../utils/GlobalVariables';

export type CarModelType = {
    id: number
    name: string,
    price: number,
    rating: number,
    description: string,

}

const CarModelService = {
    getAllCarModels: async () => {
        const res = await axios.get(`${URL}/car/getAllCarModels`)
        return res.data;

    },

    addNewCommercial: async () => {

    }
}

export default CarModelService;