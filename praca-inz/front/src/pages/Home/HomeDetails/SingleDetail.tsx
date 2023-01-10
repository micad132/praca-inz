import styles from '../Home.module.scss';

interface Props {
    title: string,
    amount: number,
}

const SingleDetail = ({title,amount} : Props) => {

    return(
        <div className={styles.singleDetail}>
            <p>{title}</p>
            <p className={styles.amount}>{amount}</p>
        </div>
    )
}

export default  SingleDetail;