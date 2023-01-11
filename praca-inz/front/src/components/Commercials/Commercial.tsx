import styles from './Commercials.module.scss';
import {fetchingImagesURL} from "../../utils/GlobalVariables";
import {useNavigate} from "react-router-dom";


interface Props {
    id: number,
    src: string,
    header: string
}


const Commercial = ({id,src, header}: Props) => {


    const navigate = useNavigate();
    return (
        <div className={styles.commercial} onClick={() => navigate(`/cars/${id}`, { replace: true})}>
            <img className={styles.commercial__img} src={`${fetchingImagesURL}/${src}`} alt="placeholder"></img>
            <h2>{header}</h2>
        </div>
    )
}

export default Commercial;