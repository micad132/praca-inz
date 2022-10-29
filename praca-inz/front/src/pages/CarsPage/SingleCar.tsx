import {fetchingImagesURL} from "../../utils/GlobalVariables";
import {useNavigate} from "react-router-dom";

interface Props {
    id: number
    src: string,
    name: string
}

const SingleCar = ({id,src,name} : Props) => {

    let navigate = useNavigate();
    return(
        <div onClick={()=> navigate(`/cars/${id}`)}>
            <p>{name}</p>
            <img  src={`${fetchingImagesURL}/${src}`} alt={'dummy_car'}/>

        </div>
    )
}

export default SingleCar;