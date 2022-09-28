import axios from 'axios';
import {URL} from '../utils/GlobalVariables';

export type ImageType = {
    id: number
    image: string,
    name: string,
    type: string
}

const ImageService = {
    getAllImages: async () => {
        const res = await axios.get(`${URL}/image/getAllImages`)
        console.log('DANE Z BACKU', res.data);
        return res.data;

    },

    addNewCommercial: async () => {

    }
}

export default ImageService;