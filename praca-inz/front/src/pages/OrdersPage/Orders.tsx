import SingleOrder from "./SingleOrder";
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchOrdersThunk, getAllOrders} from "../../store/orderSlice";
import {OrderType} from "../../services/OrderService";

interface Props {
    orders: OrderType[]
}

const Orders = ({orders} : Props) => {

    const ordersMapped = orders.map( order => (
        <SingleOrder
            id={order.orderId} key={order.orderId} orderDate={order.orderDate}
            userNick={order.userNick} partName={order.partModelDTO.partName} partPrice={order.partModelDTO.partPrice}
        />
    ));

    return(
        <div>
            {ordersMapped}
        </div>
    )
}

export default Orders;
