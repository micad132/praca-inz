import {useParams} from "react-router-dom";
import SingleCarImage from "./SingleCarImage";
import SingleCarDetails from "./SingleCarDetails";
import CommercialsList from "../../pages/ProfilePage/CommercialsPage/CommercialsList";
import Opinions from "../Opinions/Opinions";
import styles from './SingleCarPage.module.scss';
import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchCarModelById, getCarModelById} from "../../store/carModelSlice";


const dummyOpinions = [
    {
        id: 1,
        nick: 'micad132',
        rating: 4.5,
        description: 'NIEZLE AUTKO KURDE',
    },
    {
        id: 2,
        nick: 'noscanx',
        rating: 2.5,
        description: 'calkiem ladne',
    },
    {
        id: 3,
        nick: 'repix',
        rating: 1.7,
        description: 'nie podoba sie dla mnie',
    },

]

const SingleCarPage = () => {

    const dispatch = useAppDispatch();

    const { carId } = useParams();
    console.log(carId);
    useEffect(() => {
       console.log('halo');
       dispatch(fetchCarModelById(Number(carId)));
    }, [dispatch,carId]);

    const carModel = useAppSelector(getCarModelById);
    console.log( carId);
    console.log('CARMODEL WCZYTANY', carModel);
    return(
        <div className={styles.wrapper}>
            <div className={styles.singleCar}>
                <SingleCarImage  name={carModel.name} src={carModel.imageModel.name}/>
                <SingleCarDetails carModel={carModel}/>
            </div>
            <Opinions dummyOpinions={dummyOpinions}/>
        </div>
    )
}

export default SingleCarPage;