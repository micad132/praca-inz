import {fetchingImagesURL} from "../../utils/GlobalVariables";
import {useNavigate} from "react-router-dom";
import styles from './CarsPage.module.scss';
import Rating from '@mui/material/Rating';

interface Props {
    id: number
    src: string,
    name: string,
    price: number,
    rating: number
}

const SingleCar = ({id,src,name,price,rating} : Props) => {

    let navigate = useNavigate();
    return(
        <div className={styles.singleCar} onClick={()=> navigate(`/cars/${id}`)}>
            <img  src={`${fetchingImagesURL}/${src}`} alt={'dummy_car'} loading={"lazy"}/>
            <p>{name}</p>
            <Rating name="read-only" value={rating} precision={0.5} readOnly />
            <p>{price}zł</p>
        </div>
    )
}

export default SingleCar;