import Orders from "./Orders";
import styles from './OrdersPage.module.scss';
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchOrdersThunk, getAllOrders} from "../../store/orderSlice";
import {useEffect} from "react";

const ConfigurationPage = () => {


    const dispatch = useAppDispatch();
    const orders = useAppSelector(getAllOrders);
    console.log('ZAMOWIENIA', orders);
    useEffect(() => {
        dispatch(fetchOrdersThunk());
    }, [dispatch]);

    return(
        <div className={styles.wrapper}>
            <h1>Wszystkie zamowienia ({orders?.length})</h1>
            <Orders orders={orders}/>
        </div>

    )
}

export default ConfigurationPage;
