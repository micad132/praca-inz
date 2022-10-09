import Opinion from "./Opinion";
import styles from './Opinions.module.scss';

const Opinions = () => {

    return(
        <div className={styles.opinionsWrapper}>
            <h3>Opinie</h3>
            <Opinion />
            <Opinion />
            <Opinion />
        </div>
    )
}

export default Opinions;