import styles from './Commercials.module.scss';
import {fetchingImagesURL} from "../../utils/GlobalVariables";


interface Props {
    src: string,
    header: string
}


const Commercial = ({src, header}: Props) => {


    console.log(`${fetchingImagesURL}/${src}`);
    return (
        <div className={styles.commercial}>
            <img className={styles.commercial__img} src={`${fetchingImagesURL}/${src}`} alt="placeholder"></img>
            <h2>{header}</h2>
        </div>
    )
}

export default Commercial;