import {DealerInfoType} from "./DealersMap";
import styles from '../Dealers.module.scss';

interface Props  {
    dealerInfo: DealerInfoType,

}

const DealersInfo = ({dealerInfo} : Props) => {

    return(
        <div>
            <h3>Miasto: {dealerInfo.cityName}</h3>
            <p><span className={styles.span}>Rok założenia: </span>{dealerInfo.year}</p>
            <p>Ulica: {dealerInfo.street}</p>
            <p>Kierownik: {dealerInfo.director}</p>
            <p>Dodatkowe informacje: {dealerInfo.additionalInfo}</p>
        </div>
    )
}

export default DealersInfo;
