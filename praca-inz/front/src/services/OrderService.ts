import axios from 'axios';
import {URL} from '../utils/GlobalVariables';
import {PartType} from "./PartService";


export type OrderType = {
    orderId: number,
    orderDate: string,
    userNick: string,
    partModelDTO: PartType
}

const OrderService = {
    getAllOrders: async () => {
        const res = await axios.get(`${URL}/order/getAllOrders`)
        return res.data;
    },

    addOrder: async (id : number) => {
         return axios({
            method: 'POST',
            url: `${URL}/order/addOrder/${id}`,
            data: id,
            headers: {
            }
    })
    }

}

export default OrderService;