import {useParams} from "react-router-dom";
import SingleCarImage from "./SingleCarImage";
import SingleCarDetails from "./SingleCarDetails";
import CommercialsList from "../../pages/ProfilePage/CommercialsPage/CommercialsList";
import Opinions from "../Opinions/Opinions";
import styles from './SingleCarPage.module.scss';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchCarModelById, getCarModelById} from "../../store/carModelSlice";
import {fetchReviewsForCarModel, getReviewsForCarModel} from "../../store/reviewSlice";





const SingleCarPage = () => {

    const dispatch = useAppDispatch();

    const { carId } = useParams();
    useEffect(() => {
       dispatch(fetchCarModelById(Number(carId)));
       dispatch(fetchReviewsForCarModel(Number(carId)));
    }, [dispatch,carId]);

    const carModel = useAppSelector(getCarModelById);
    const opinions = useAppSelector(getReviewsForCarModel);


    return(
        <div className={styles.wrapper}>
            <div className={styles.singleCar}>
                <SingleCarImage  name={carModel.name} src={carModel.imageModel.name}/>
                <SingleCarDetails carModel={carModel}/>
            </div>
            <Opinions opinions={opinions} carModelId={carId}  isAddingAvailable={true}
                      headerTitle={'Sekcja komentarzy'} isAdminPanel={false} isCarModelScreen={true}/>
        </div>
    )
}

export default SingleCarPage;