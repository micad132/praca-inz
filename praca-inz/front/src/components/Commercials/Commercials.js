
import styles from './Commercials.module.scss';
import Commercial from "./Commercial";

const Commercials = () => {
    return(
        <div className={styles.wrapper}>
            <Commercial src='https://picsum.photos/400/500' header='Reklamka numer1' />
            <Commercial src='https://picsum.photos/400/500' header='Reklamka numer2'/>
            <Commercial src='https://picsum.photos/400/500' header='Reklamka numer3'/>
        </div>

    )
}

export default Commercials;