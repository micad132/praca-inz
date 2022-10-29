import styles from '../../../utils/styles/Utils.module.scss';
import {fetchingImagesURL} from "../../../utils/GlobalVariables";

interface Props {
    title: string,
    src: string
}

const SingleCarmodel = ({title, src} : Props) => {
    return(
        <div className={styles.previewItem}>
            <img src={`${fetchingImagesURL}/${src}`} alt={'carmodel'} />
            <p>{title}</p>
        </div>
    )
}

export default SingleCarmodel;