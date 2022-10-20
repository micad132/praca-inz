import axios from 'axios';
import {URL} from '../utils/GlobalVariables';
import {ImageType} from "./ImageService";

export type CompanyType = {
    id: number
    cityName: string,
    yea_r: string,
    streetName: string,
    directorName: string,
    additionalInfo: string,
    imageModel: ImageType
}

const CompanyService = {
    getAllCompanies: async () => {
        const res = await axios.get(`${URL}/company/getAllCompanies`)
        return res.data;
    },

    // addNewCommercial:  (id : string  , name : string ) => {
    //     return axios({
    //         method: 'POST',
    //         url: `${URL}/commercial/${id}`,
    //         data: {
    //             name,
    //             description: 'siemanko',
    //             carModel: { id }
    //         },
    //         headers: {
    //         }
    //     })
    // },

    // deleteCommercial: async (id: number) => {
    //     return await axios.delete(`${URL}/commercial/delete/${id}`)
    // }
}

export default CompanyService;