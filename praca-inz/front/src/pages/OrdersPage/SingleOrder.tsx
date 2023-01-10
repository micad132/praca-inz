import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import styles from './OrdersPage.module.scss';
import {useAppDispatch} from "../../utils/types/hooks";
import {deletingOrderThunk} from "../../store/orderSlice";
import {toast} from "react-toastify";
import moment from "moment";
import EditingOrder from "./EditingOrder";
import { useState } from "react";


interface Props {
    id: number,
    orderDate: string,
    userNick: string,
    partName: string,
    partPrice: number,
    partAmount: number,
    totalPrice: number
}

const SingleOrder = ({id,orderDate,userNick,partName,partPrice, partAmount,totalPrice} : Props) => {

    const [isModalShow,setIsModalShow] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const deleteOrder = () => {
        dispatch(deletingOrderThunk(id));
        toast.success('Usunieto zamowienie!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    const formattedDate = moment(orderDate).format('MM/DD/YYYY');
    const formattedDateHours = moment(orderDate).format('HH:mm');
    const dataToEditingModal = {orderId: id,partName};

    return(
        <section className={styles.singleOrderWrapper}>
            <h3>Zamowienie numer: {id}</h3>
            <BookmarkBorderIcon className={styles.bookmarkIcon} />
            <div className={styles.icons}>
                <EditIcon onClick={() => setIsModalShow(true)}/>
                <DeleteIcon className={styles.deletingIcon} onClick={deleteOrder} data-testid={"deleting-icon"}/>
            </div>
            <p className={styles.orderMainInfo}><span>Złozone/Ostatnio edytowane:</span> {formattedDate} {formattedDateHours}</p>
            <p className={styles.orderMainInfo}><span>Przez uzytkownika:</span> {userNick}</p>
            <div className={styles.orderPartInfo}>
                <p className={styles.partName}>{partName}</p>
                <div className={styles.partDetails}>
                    <p>x{partAmount}</p>
                    <p>{totalPrice}zł</p>
                </div>
            </div>
            <EditingOrder isModalShow={isModalShow} setIsModalShow={setIsModalShow} orderId={id} partName={partName}/>
        </section>
    )
}

export default SingleOrder;
