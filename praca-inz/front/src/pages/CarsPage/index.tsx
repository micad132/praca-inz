import {useAppSelector} from "../../utils/types/hooks";
import {getAllCarModels, getIsCarModelFetched} from "../../store/carModelSlice";
import SingleCar from "./SingleCar";
import CarList from "./CarList";




const CarsPage = () => {



    const cars = useAppSelector(getAllCarModels)
    const isCarsLoaded = useAppSelector(getIsCarModelFetched);


    return <section>
        {isCarsLoaded
            ? <CarList cars={cars}/>
            : <h3>Not loaded yet</h3>
        }
    </section>
};

export default CarsPage;