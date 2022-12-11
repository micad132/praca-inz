import axios from 'axios';
import {URL} from '../utils/GlobalVariables';
import {ImageType} from "./ImageService";

export type CarModelType = {
    carModelId: number
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

export type CarModelToAddType = {
    name: string,
    price: number,
    rating: number | null,
    description: string,
    enginePower: number,
    engineCapacity: number,
    gearbox: string,
    carBody: string,
    productionCountry: string,
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

    },

    addCarModel: async (data : any) => {
        console.log('DANE REDUX', data);
        return axios({
            method: 'POST',
            url: `${URL}/car`,
            data: data,
            headers: {
            }
        })
    }
}

export default CarModelService;