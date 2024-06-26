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
        return axios({
            method: 'POST',
            url: `${URL}/car`,
            data: data,
            headers: {
            }
        })
    },

    deleteCarModelById : async (id : number) => {
        return axios.delete(`${URL}/car/deleteCarModelById/${id}`);
    },

    deleteCarModelWithCommercial: async (data : any ) => {
        return axios.delete(`${URL}/car/deleteCarModelWithCommercial/${data.carId}/${data.commercialId}`)
    },

    editCarModel: async (data : any) => {
        return axios({
            method: 'PUT',
            url: `${URL}/car/updateCar`,
            data: data,
        })
    }
}

export default CarModelService;