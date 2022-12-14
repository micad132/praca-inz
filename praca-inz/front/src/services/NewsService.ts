import {ImageType} from "./ImageService";
import axios from "axios";
import {URL} from "../utils/GlobalVariables";
import {ReviewType} from "./ReviewService";


export type NewsTypeDTO  = {
    postId: number,
    author: string,
    title: string,
    date: string,
    description: string,
    postCategory: string,
    imageModel: ImageType,
    reviewModels: ReviewType[],
}

export type NewsTypeRequestDTO = {
    imageId: number,
    title: string,
    description: string,
    postCategory: string,
}

export type NewsToAddType = {
    title: string,
    description: string,
    postCategory: string,
}

const NewsService = {

    addNews: async (data: NewsTypeRequestDTO) => {
        return axios({
            method: 'POST',
            url: `${URL}/post/addPost`,
            data: data,
            headers: {
            }
        })
    },

    getAllNews: async () => {
        const res = await axios.get(`${URL}/post/getAllPosts`);
        return res.data;
    },

    getNewsById: async (id : number) => {
        const res = await axios.get(`${URL}/post/getPostById/${id}`);
        return res.data;
    }
}

export default  NewsService;