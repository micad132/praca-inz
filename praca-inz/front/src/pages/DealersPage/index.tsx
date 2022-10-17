import DealersMap from "./Dealers/DealersMap";
import styles from './Dealers.module.scss';
import DealersInfo from "./Dealers/DealersInfo";

const DealersPage = () => {
    return(
        <div className={styles.wrapper}>
            <h1>Salony z którymi współpracujemy</h1>
            <DealersMap />
        </div>

    )
}

export default DealersPage;
