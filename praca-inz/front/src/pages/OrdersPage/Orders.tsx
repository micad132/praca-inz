import SingleOrder from "./SingleOrder";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchOrdersThunk, getAllOrders} from "../../store/orderSlice";
import {OrderType} from "../../services/OrderService";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

interface Props {
    orders: OrderType[]
}

const Orders = ({orders} : Props) => {


    const [isAscSorted,setIsAscSorted] = useState<boolean>(false);

    let ordersSortedAsc : OrderType[] = [];
    let ordersSortedDesc: OrderType[] = [];

    const ordersMapped = orders.map( order => (
        <SingleOrder
            id={order.orderId} key={order.orderId} orderDate={order.orderDate}
            userNick={order.userNick} partName={order.partModelDTO.partName}
            partPrice={order.partModelDTO.partPrice} partAmount={order.partAmount}
            totalPrice={order.totalPrice}
        />
    ));

    return(
        <div>
            <div onClick={() => setIsAscSorted(!isAscSorted)}>
                {isAscSorted  ?
                    <KeyboardArrowUpIcon  /> :
                    <KeyboardArrowDownIcon />
                }
            </div>
            {ordersMapped}
        </div>
    )
}

export default Orders;
