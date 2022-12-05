import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './OrdersPage.module.scss';


interface Props {
    id: number,
    orderDate: string,
    userNick: string,
    partName: string,
    partPrice: number
}

const SingleOrder = ({id,orderDate,userNick,partName,partPrice} : Props) => {

    return(
        <section className={styles.singleOrderWrapper}>
            <h3>Zamowienie numer: {id}</h3>
            <BookmarkBorderIcon className={styles.bookmarkIcon} />
            <DeleteIcon className={styles.deletingIcon} />
            <p className={styles.orderMainInfo}><span>Złozone:</span> 23.11.2022 16:50</p>
            <p className={styles.orderMainInfo}><span>Przez uzytkownika:</span> {userNick}</p>
            <div className={styles.orderPartInfo}>
                <p className={styles.partName}>{partName}</p>
                <div className={styles.partDetails}>
                    <p>x3</p>
                    <p>{partPrice}zł</p>
                </div>
            </div>

        </section>
    )
}

export default SingleOrder;
