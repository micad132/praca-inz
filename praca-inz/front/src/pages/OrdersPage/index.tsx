import Orders from "./Orders";
import styles from './OrdersPage.module.scss';
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchOrdersThunk, getAllOrders} from "../../store/orderSlice";
import {useEffect} from "react";
import {getLoggedUserRole} from "../../store/userSlice";

const ConfigurationPage = () => {


    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchOrdersThunk());
    }, [dispatch]);

    const userRole = useAppSelector(getLoggedUserRole);
    const orders = useAppSelector(getAllOrders);

    const ordersHeader = userRole === 'MODERATOR'
        ? <>
            <h3>Kliknij przycisk z ikoną długopisa aby edytować</h3>
            <h3>Kliknij przycisk z ikoną kosza aby usunąć</h3>
          </>
        : <h3 style={{color: 'red'}}>Musisz mieć uprawnienia moderatora aby usuwać i edytować zamówienia</h3>

    return(
        <div className={styles.wrapper}>
            <h1>Wszystkie zamowienia ({orders?.length})</h1>
            {ordersHeader}
            <Orders orders={orders} userRole={userRole}/>
        </div>

    )
}

export default ConfigurationPage;
