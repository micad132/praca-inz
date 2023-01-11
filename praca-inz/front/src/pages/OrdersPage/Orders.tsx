import SingleOrder from "./SingleOrder";
import {useEffect, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchOrdersThunk, getAllOrders} from "../../store/orderSlice";
import {OrderType} from "../../services/OrderService";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SortingWrapper from "../../components/Wrappers/SortingWrapper";

interface Props {
    orders: OrderType[],
    userRole: string,
}

const Orders = ({orders,userRole} : Props) => {


    const [isAscSorted,setIsAscSorted] = useState<boolean>(false);

    let ordersSortedAsc : OrderType[] = [];
    let ordersSortedDesc: OrderType[] = [];


    if(orders){
       ordersSortedAsc = orders?.map( order => {
            return {...order, newDate: new  Date(order.orderDate)}
        }).sort((a,b) => b.newDate.getTime() - a.newDate.getTime());

        ordersSortedDesc = orders?.map( order => {
            return {...order, newDate: new  Date(order.orderDate)}
        }).sort((a,b) => a.newDate.getTime() - b.newDate.getTime());
    }

    const ordersSorted = isAscSorted ? [...ordersSortedAsc] : [...ordersSortedDesc];

    const ordersMapped = ordersSorted.map( order => (
        <SingleOrder
            id={order.orderId} key={order.orderId} orderDate={order.orderDate}
            userNick={order.userNick} partName={order.partModelDTO.partName}
            partPrice={order.partModelDTO.partPrice} partAmount={order.partAmount}
            totalPrice={order.totalPrice} userRole={userRole}
        />
    ));

    return(
        <div data-testid={"orders-container"}>
            <SortingWrapper isAscSorted={isAscSorted} setIsAscSorted={setIsAscSorted} />
            {ordersMapped}
        </div>
    )
}

export default Orders;
