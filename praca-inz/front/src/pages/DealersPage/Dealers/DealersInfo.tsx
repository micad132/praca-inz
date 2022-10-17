import {DealerInfoType} from "./DealersMap";
import styles from '../Dealers.module.scss';

interface Props  {
    dealerInfo: DealerInfoType,

}

const DealersInfo = ({dealerInfo} : Props) => {

    return(
        <section className={styles.dealersInfoWrapper}>
            {dealerInfo.img ? <div className={styles.mainInfo}>
                <h3>Miasto: {dealerInfo.cityName}</h3>
                <p><span className={styles.span}>Rok założenia: </span>{dealerInfo.year}</p>
                <p><span className={styles.span}>Ulica:</span> {dealerInfo.street}</p>
                <p><span className={styles.span}>Kierownik:</span> {dealerInfo.director}</p>
                <p><span className={styles.span}>Dodatkowe informacje:</span> {dealerInfo.additionalInfo}</p>
            </div> : <h2 className={styles.moreInfo}>Kliknij na salon aby uzyskać więcej informacji</h2>}
        </section>
    )
}

export default DealersInfo;
