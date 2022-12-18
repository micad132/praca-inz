import axios from 'axios';
import {URL} from '../utils/GlobalVariables';

export type ReviewType = {
    reviewModelId: number
    description: string,
    rate: number,
    date: string,
    userNick: string,
    isVulgar: boolean,
    reviewHeader: string
}

// export type ReviewForNewsType = {
//     reviewModelId: number
//     description: string,
//     rate: number,
//     date: string,
//     userNick: string,
//     isVulgar: boolean,
//     postTitle: string
// }

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
    },

    addReviewForNews: async (review : AddingReviewType, id: number) => {

        return axios({
            method: 'POST',
            url: `${URL}/postreview/addPostReview/${id}`,
            data: review,
        })
    },

    getReviewsForNews: async (id: number) => {
        const res = await axios.get(`${URL}/postreview/getPostReviews/${id}`);
        console.log('HUJ', res);
        return res.data;
    },

    updateReview: async (id: number, isVulgar: boolean) => {
        return axios({
            method: 'PUT',
            url: `${URL}/review/updateReview/${id}?isVulgar=${isVulgar}`,
            headers: {
            }
        })
    },

    deleteReviewById: async (id: number) => {
        return await axios.delete(`${URL}/review/deleteById/${id}`)
    }

}

export default ReviewService;