import {configureStore} from "@reduxjs/toolkit";
import imageReducer from "./imageSlice";
import carModelReducer from './carModelSlice';
import commercialReducer from './commercialSlice';
import userReducer from './userSlice';
import companyReducer from './companySlice';
import reviewReducer from './reviewSlice';
import partReducer from './partSlice';
import orderReducer from './orderSlice';
import newsReducer from './newsSlice';
import pageReducer from './pageSlice';

export const store = configureStore({
    reducer: {
        images: imageReducer,
        carModels: carModelReducer,
        commercials: commercialReducer,
        user: userReducer,
        companies: companyReducer,
        reviews: reviewReducer,
        parts: partReducer,
        orders: orderReducer,
        posts: newsReducer,
        page: pageReducer,

    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch