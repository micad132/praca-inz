import {useAppSelector} from "../../../utils/types/hooks";
import {getAllCarModels} from "../../../store/carModelSlice";
import CarmodelsList from "./CarmodelsList";


const CarmodelsPage = () => {

    const carModels = useAppSelector(getAllCarModels);
    return(
        <section>
            {carModels.length>0 ? <h1>Podgląd modeli aut dostępnych w bazie</h1>
                : <h1 style={{color: 'red'}}>Brak dostępnych modeli aut</h1>}
            <CarmodelsList carModels={carModels} />
        </section>
    )
}

export default CarmodelsPage;