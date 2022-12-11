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

    addImage: async (image : any) => {
       const res =  await axios({
            method: 'POST',
            url: `${URL}/image/upload/image`,
            data: image,
        })
        return res.data;
    }
}

export default ImageService;