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
            {carModels.length>0
                ? <>
                    <h1>Podgląd modeli aut dostępnych w bazie ({carModels.length})</h1>
                    <h4>Usunięcie auta z reklamą na nie spowoduje także usunięcie reklamy</h4>
                </>
                : <h1 style={{color: 'red'}}>Brak dostępnych modeli aut</h1>}
            {isCarModelsFetched
                ? <CarmodelsList carModels={carModels} />
                : <CircularProgress />
            }
        </section>
    )
}

export default CarmodelsPage;