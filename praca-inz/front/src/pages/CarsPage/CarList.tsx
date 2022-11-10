import SingleCar from "./SingleCar";
import {CarModelType} from "../../services/CarModelService";
import styles from './CarsPage.module.scss';

interface Props {
    cars: CarModelType[]
}

const CarList = ({cars} : Props) => {

    console.log(cars);
    const carList = cars.map(car => <SingleCar id={car.id} src={car.imageModel.name} name={car.name} price={car.price} rating={car.rating} />)
    return(
        <section className={styles.carsWrapper}>
            <h1>Wszystkie modele aut na portalu</h1>
            {carList}
        </section>
    )
}

export default CarList;