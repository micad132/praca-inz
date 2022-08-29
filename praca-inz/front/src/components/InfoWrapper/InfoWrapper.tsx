import styles from './InfoWrapper.module.scss';
import {PolandInfoType} from "../../pages/Home/Home";

interface Props {
    title: string,
    details: PolandInfoType[]
}

const InfoWrapper = ({title,details} : Props) => {

    return(
    <section className={styles.wrapper}>
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
        <div className={styles.content}>
            {details.map( detail =>
                <div className={styles.content__details}>
                    <img src={detail.src}/>
                    <h3>{detail.title}</h3>
                </div>)}
        </div>
    </section>)
}

export default InfoWrapper;