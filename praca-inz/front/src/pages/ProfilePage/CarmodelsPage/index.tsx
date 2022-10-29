import {useAppSelector} from "../../../utils/types/hooks";
import {getAllCarModels, getIsCarModelFetched} from "../../../store/carModelSlice";
import CircularProgress from '@mui/material/CircularProgress';
import CarmodelsList from "./CarmodelsList";


const CarmodelsPage = () => {

    const carModels = useAppSelector(getAllCarModels);
    const isCarModelsFetched = useAppSelector(getIsCarModelFetched);
    console.log('boolean', isCarModelsFetched);
    return(
        <section>
            {carModels.length>0 ? <h1>Podgląd modeli aut dostępnych w bazie</h1>
                : <h1 style={{color: 'red'}}>Brak dostępnych modeli aut</h1>}
            {isCarModelsFetched
                ? <CarmodelsList carModels={carModels} />
                : <CircularProgress />
            }
        </section>
    )
}

export default CarmodelsPage;