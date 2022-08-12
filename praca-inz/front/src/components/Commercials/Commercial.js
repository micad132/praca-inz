
import styles from './Commercials.module.scss';

const Commercial = ({src,header}) => {

    return(
    <div className={styles.commercial}>
        <img className={styles.commercial__img} src={src}></img>
        <h2>{header}</h2>
    </div>
    )
}

export default Commercial;