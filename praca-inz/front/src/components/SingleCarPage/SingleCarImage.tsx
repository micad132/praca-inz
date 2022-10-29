import styles from './SingleCarPage.module.scss';
import {fetchingImagesURL} from "../../utils/GlobalVariables";

interface Props {
    name: string,
    src: string
}

const SingleCarImage = ({name,src} : Props) => {

    return(
        <section className={styles.singleCarImageWrapper}>
            <h1>{name}</h1>
            <div className={styles.imageWrapper}>
                <img src={`${fetchingImagesURL}/${src}`} alt={'dummy_photo'}/>
            </div>
        </section>
    )
}

export default SingleCarImage;