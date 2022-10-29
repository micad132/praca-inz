import {useAppSelector} from "../../utils/types/hooks";
import {getAllCarModels} from "../../store/carModelSlice";
import SingleCar from "./SingleCar";
import CarList from "./CarList";


const CarsPage = () => {


    const cars = useAppSelector(getAllCarModels)


    return <section>
        <CarList cars={cars}/>
    </section>
};

export default CarsPage;