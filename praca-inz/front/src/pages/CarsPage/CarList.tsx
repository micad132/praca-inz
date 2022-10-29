import SingleCar from "./SingleCar";
import {CarModelType} from "../../services/CarModelService";


interface Props {
    cars: CarModelType[]
}

const CarList = ({cars} : Props) => {

    console.log(cars);
    const carList = cars.map(car => <SingleCar id={car.id} src={car.imageModel.name} name={car.name} />)
    return(
        <section>
            {carList}
        </section>
    )
}

export default CarList;