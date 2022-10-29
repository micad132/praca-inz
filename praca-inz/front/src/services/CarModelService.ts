import axios from 'axios';
import {URL} from '../utils/GlobalVariables';
import {ImageType} from "./ImageService";

export type CarModelType = {
    id: number
    name: string,
    price: number,
    rating: number,
    description: string,
    enginePower: number,
    engineCapacity: number,
    gearbox: string,
    carBody: string,
    productionCountry: string,
    imageModel: ImageType

}

const CarModelService = {
    getAllCarModels: async () => {
        const res = await axios.get(`${URL}/car/getAllCarModels`)
        return res.data;

    },

    getCarModelById: async (id: number) => {
        const res = await axios.get(`${URL}/car/getCarModelById/${id}`)
        return res.data;
    },

    addNewCommercial: async () => {

    }
}

export default CarModelService;