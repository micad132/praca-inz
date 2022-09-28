
import styles from './Commercials.module.scss';


interface Props {
    src: string,
    header: string
}


const Commercial = ({src,header} : Props) => {

    console.log(src);
    return(
    <div className={styles.commercial}>
        <img className={styles.commercial__img} src={'Users/micha/OneDrive/Desktop/front/bmw2.jpg'} alt="placeholder"></img>
        <h2>{header}</h2>
    </div>
    )
}

export default Commercial;