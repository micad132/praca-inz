import {useAppSelector} from "../../../utils/types/hooks";
import {getAllCarModels} from "../../../store/carModelSlice";


const CarmodelsPage = () => {

    const carModels = useAppSelector(getAllCarModels);
    return(
        <section>
            <h1>Podgląd modeli aut dostępnych w bazie</h1>
            {carModels.map((car) => {
                return car.name;
            })}
        </section>
    )
}

export default CarmodelsPage;