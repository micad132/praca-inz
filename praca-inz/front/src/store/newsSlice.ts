import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./index";
import NewsService, {NewsToEditType, NewsTypeDTO, NewsTypeRequestDTO} from "../services/NewsService";



export interface NewsState {
    news: NewsTypeDTO[],
    singleNews: NewsTypeDTO,
    isLoaded: boolean,
    error: string | undefined
}



const initialState : NewsState = {

    news: [],
    singleNews: {
        postId: 1,
        author: '',
        date: '',
        imageModel: {
            id: 1,
            image: '',
            name: '',
            type: ''},
        description: '',
        title: '',
        postCategory: '',
        reviewModels: [],
    },
    isLoaded: false,
    error: '',
}

export const fetchAlNewsThunk = createAsyncThunk(
    "posts/getAllPosts",
    async () => {
        try{
            const data = await NewsService.getAllNews();
            return { data }

        }catch(err){
            throw err;
        }
    }
)

export const addingNewsThunk = createAsyncThunk(
    "posts/addPost",
    async (newData : NewsTypeRequestDTO) => {
        try {
            await NewsService.addNews(newData);
            const data = await NewsService.getAllNews();
            return { data };
        } catch (e) {
            throw e;
        }
    }
)

export const fetchNewsByIdThunk = createAsyncThunk(
    "posts/getPostById",
    async (id : number) => {
        try {
            const data = await NewsService.getNewsById(id);
            return { data };
        } catch (e) {
            throw e;
        }
    }
)

export const deleteNewsByIdThunk = createAsyncThunk(
    "posts/deletePostById",
    async (id: number) => {
        try {
            await NewsService.deleteNewsById(id);
            const data = await NewsService.getAllNews();
            return { data };
        } catch (e) {
            throw e;
        }
    }
)

export const editingNewsThunk = createAsyncThunk(
    "posts/editPost",
    async (newData : NewsToEditType) => {
        try {
            await NewsService.updateNews(newData);
            const data = await NewsService.getAllNews();
            return { data };
        } catch (e) {
            throw e;
        }
    }
)


export const getAllNews = (state : RootState)  => state.posts.news;
export const getCommercialsError = (state : RootState) => state.posts.error;
export const getNewsData = (state : RootState) => state.posts.singleNews;


const newsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchAlNewsThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchAlNewsThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.news = action.payload.data;

            })
            .addCase(fetchAlNewsThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
            .addCase(addingNewsThunk.fulfilled, (state, action) => {
                state.news = action.payload.data;
            })
            .addCase(fetchNewsByIdThunk.fulfilled, (state, action ) => {
                state.singleNews = action.payload.data;
            })
            .addCase(deleteNewsByIdThunk.fulfilled, (state, action) => {
                state.news = action.payload.data;
            })
            .addCase(editingNewsThunk.fulfilled, (state, action) => {
                state.news = action.payload.data;
            })
    }

})

export default newsSlice.reducer;

