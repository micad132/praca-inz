import styles from './SingleCarPage.module.scss';
import {CarModelType} from "../../services/CarModelService";
import Rating from '@mui/material/Rating';


interface Props {
    carModel : CarModelType
}

const SingleCarDetails = ({carModel : {enginePower,engineCapacity,gearbox,carBody,price,rating,productionCountry,description}} : Props) => {

    return(
        <section className={styles.singleCarDetailsWrapper}>
            <h3>Szczegóły auta</h3>
            <p><span>Moc silnika:</span> {enginePower}KM</p>
            <p><span>Pojemność silnika:</span> {engineCapacity}L</p>
            <p><span>Typ skrzyni biegów:</span> {gearbox}</p>
            <p><span>Rodzaj nadwozia:</span> {carBody}</p>
            <p><span>Cena auta:</span>{price}zł</p>
            <p><span>Średnia ocena:</span> <Rating name="read-only" value={rating} precision={0.5} readOnly /></p>
            <p><span>Kraj produkcji:</span> {productionCountry}</p>
            <p><span>Opis:</span>{description}</p>
        </section>
    )
}

export default SingleCarDetails;