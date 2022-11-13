import axios from 'axios';
import {URL} from '../utils/GlobalVariables';

export type ReviewType = {
    description: string,
    rate: number,
    date: string,
    nick: string
}

export type AddingReviewType = {
    description: string,
    rate: number
}

const ReviewService = {
    getAllReviewsForCarModels: async ()   => {
        const res = await axios.get<ReviewType[]>(`${URL}/review/getAllReviews`)
        return res.data;
    },

    getReviewsForCarModel: async (id: number)  => {
        const res = await axios.get<ReviewType[]>(`${URL}/review/${id}`)
        return res.data;
    },

    addReviewForCarModel: async (review : AddingReviewType ,id : number) => {
        return axios({
            method: 'POST',
            url: `${URL}/review/${id}`,
            data: review,
            headers: {
            }
        })
    }

}

export default ReviewService;