import SingleCar from "./SingleCar";
import {CarModelType} from "../../services/CarModelService";
import styles from './CarsPage.module.scss';
import AddingCar from "./AddingCar";

interface Props {
    cars: CarModelType[]
}

const CarList = ({cars} : Props) => {

    console.log('AUCIKI', cars);
    const carList = cars.map(car => <SingleCar id={car.carModelId} src={car.imageModel.name} name={car.name} price={car.price} rating={car.rating} />)
    return(
        <section className={styles.carsWrapper}>
            {carList.length > 0
                ? <h1>Wszystkie modele aut na portalu ({carList.length})</h1>
                : <h1 className={styles.errorTitle}>Brak dostepnych aut</h1>
            }
            <AddingCar />
            {carList}
        </section>
    )
}

export default CarList;