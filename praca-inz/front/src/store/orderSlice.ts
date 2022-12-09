import {createSlice, createAsyncThunk, PayloadAction} from "@reduxjs/toolkit";
import { RootState } from "./index";
import PartService, { PartType } from "../services/PartService";
import OrderService, {AddingOrderType, OrderType} from "../services/OrderService";


export interface PartState {
    orders: OrderType[],
    partId: number,
    isLoaded: boolean,
    error: string | undefined
}



const initialState : PartState = {

    orders: [],
    partId: 1,
    isLoaded: false,
    error: '',
}

export const fetchOrdersThunk = createAsyncThunk(
    "orders/getAllOrders",
    async () => {
        try{
            const data = await OrderService.getAllOrders();
            return { data }

        }catch(err){
            console.log(err);
            throw err;
        }
    }
)

export const addOrderThunk = createAsyncThunk(
    "orders/addOrder",
    async (data: AddingOrderType) => {
        try{
            await OrderService.addOrder(data);
        } catch (e) {
            throw e;
        }
    }
)

export const deletingOrderThunk = createAsyncThunk(
    "orders/deleteOrder",
    async (id: number) => {
        try {
            await OrderService.deleteOrder(id);
            const data = await OrderService.getAllOrders();
            return { data }
        } catch (e) {
            throw e;
        }
    }
)



export const getAllOrders = (state : RootState)  => state.orders.orders;
export const getOrdersError = (state : RootState) => state.orders.error;
export const getPartId = (state : RootState) => state.orders.partId;



const orderSlice = createSlice({
    name: 'orders',
    initialState,
    reducers: {

        setPartId(state, action: PayloadAction<number>) {
            state.partId = action.payload;
        }
    },
    extraReducers(builder) {
        builder
            .addCase(fetchOrdersThunk.pending, (state, action) => {
                state.isLoaded = false;
            })
            .addCase(fetchOrdersThunk.fulfilled, (state, action) => {
                state.isLoaded = true;
                state.orders = action.payload.data;

            })
            .addCase(fetchOrdersThunk.rejected, (state, action) => {
                state.isLoaded = false;
                state.error = action.error.message;
            })
            .addCase(deletingOrderThunk.fulfilled, (state, action) => {
                state.orders = action.payload.data;
            })
    }

})

export const { setPartId } = orderSlice.actions;
export default orderSlice.reducer;

