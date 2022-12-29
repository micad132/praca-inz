import styles from '../Dealers.module.scss';
import {CompanyType} from "../../../services/CompanyService";

interface Props  {
    dealerInfo: CompanyType,

}

const DealersInfo = ({dealerInfo} : Props) => {

    return(
        <section className={styles.dealersInfoWrapper}>
            {dealerInfo.streetName
                ? <div className={styles.mainInfo}>
                    <h3>Miasto: {dealerInfo.cityName}</h3>
                    <p><span className={styles.span}>Rok założenia: </span>{dealerInfo.yea_r}</p>
                    <p><span className={styles.span}>Ulica:</span> {dealerInfo.streetName}</p>
                    <p><span className={styles.span}>Kierownik:</span> {dealerInfo.directorName}</p>
                    <p><span className={styles.span}>Dodatkowe informacje:</span> {dealerInfo.additionalInfo}</p>
                </div>
                : <h2 className={styles.moreInfo}>Kliknij na salon aby uzyskać więcej informacji</h2>}
        </section>
    )
}

export default DealersInfo;
