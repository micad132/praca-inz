import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchCarModelsThunk, getAllCarModels, getIsCarModelFetched} from "../../store/carModelSlice";
import SingleCar from "./SingleCar";
import CarList from "./CarList";
import {useEffect} from "react";




const CarsPage = () => {


    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCarModelsThunk());
    }, [dispatch]);


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