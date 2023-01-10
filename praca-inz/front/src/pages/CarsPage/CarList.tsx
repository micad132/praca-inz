import SingleCar from "./SingleCar";
import {CarModelType} from "../../services/CarModelService";
import styles from './CarsPage.module.scss';
import AddingCar from "./AddingCar";
import {useAppSelector} from "../../utils/types/hooks";
import {getLoggedUserRole} from "../../store/userSlice";
import CarsPageHeader from "./CarsPageHeader";

interface Props {
    cars: CarModelType[]
}

const CarList = ({cars} : Props) => {

    console.log('AUCIKI', cars);
    const userRole = useAppSelector(getLoggedUserRole);
    const carList = cars.map(car => <SingleCar id={car.carModelId} src={car.imageModel.name} name={car.name} price={car.price} rating={car.rating} />)
    return(
        <section className={styles.carsWrapper}>
            {
                <CarsPageHeader carListLength={carList.length}/>
            }
            {userRole === 'MODERATOR'
                ? <AddingCar/>
                : <h2 className={styles.roleError}>Aby dodać auto musisz miec uprawnienia moderatora</h2>
            }
            {carList}
        </section>
    )
}

export default CarList;