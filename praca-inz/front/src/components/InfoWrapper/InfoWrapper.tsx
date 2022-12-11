import styles from './InfoWrapper.module.scss';
import {PolandInfoType} from "../../pages/Home/Home";
import {useNavigate} from "react-router-dom";
import {fetchingImagesURL} from "../../utils/GlobalVariables";

interface Props {
    title: string,
    details: PolandInfoType[]
}

const InfoWrapper = ({title,details} : Props) => {

    let navigate = useNavigate();
    return(
    <section className={styles.wrapper} onClick={() => navigate('/news/1',{ replace: true})}>
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
        <div className={styles.content}>
            {details.map( detail =>
                <div className={styles.content__details}>
                    <img src={`${fetchingImagesURL}/${detail.src}`} alt={'best rated car'}/>
                    <h3>{detail.title}</h3>
                </div>)}
        </div>
    </section>)
}

export default InfoWrapper;