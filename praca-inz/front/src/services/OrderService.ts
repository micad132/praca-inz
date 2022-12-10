import axios from 'axios';
import {URL} from '../utils/GlobalVariables';
import {PartType} from "./PartService";


export type OrderType = {
    orderId: number,
    orderDate: string,
    userNick: string,
    partAmount: number,
    totalPrice: number,
    partModelDTO: PartType
}

export type AddingOrderType = {
    partId: number,
    partAmount: number
}

export type OrderEditType = {
    orderId: number,
    partAmount: string,
    partId: number,
}

const OrderService = {
    getAllOrders: async () => {
        const res = await axios.get(`${URL}/order/getAllOrders`)
        return res.data;
    },

    addOrder: async (data : AddingOrderType) => {
        const {partId, partAmount} = data;
         return axios({
            method: 'POST',
            url: `${URL}/order/addOrder/${partId}/${partAmount}`,
            headers: {
            }
    })
    },

    deleteOrder: async (id: number) => {
        return await axios.delete(`${URL}/order/deleteOrder/${id}`)
    },

    editOrder: async (newData : OrderEditType) => {
        const {orderId, partAmount, partId} = newData;
        return axios({
            method: 'put',
            url: `${URL}/order/editOrder/${orderId}/${partAmount}/${partId}`
        })
    }

}

export default OrderService;