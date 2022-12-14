import styles from './InfoWrapper.module.scss';
import {useNavigate} from "react-router-dom";
import {fetchingImagesURL} from "../../utils/GlobalVariables";
import {NewsPreview} from "../../pages/Home/Home";

interface Props {
    title: string,
    details: NewsPreview[],
    about?: string,
    id?: number,
}

const InfoWrapper = ({title,details,about,id} : Props) => {

    let navigate = useNavigate();



    const newsPreview = details.map( detail =>
        <div className={styles.content__details} onClick={() => navigate(`/${about}/${detail.id}`,{ replace: true})}>
            <img src={`${fetchingImagesURL}/${detail.src}`} alt={'best rated car'}/>
            <h3>{detail.title}</h3>
        </div>)

    return(
    <section className={styles.wrapper}>
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
        <div className={styles.content}>
            {details.length > 0
                ? newsPreview
                : <h3>Brak postow</h3>
            }
        </div>
    </section>)
}

export default InfoWrapper;