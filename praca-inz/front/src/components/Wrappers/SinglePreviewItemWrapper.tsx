import {fetchingImagesURL} from "../../utils/GlobalVariables";
import styles from './Wrappers.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from "react";

interface Props {
    title: string,
    src: string,
}

const SinglePreviewItemWrapper = ({title,src} : Props) => {

    const [isIconVisible,setIconVisible] = useState<boolean>(false);

    return(
        <div className={styles.singlePreviewItemWrapper} onMouseEnter={() => setIconVisible(true)} onMouseLeave={() => setIconVisible(false)}>
            <img src={`${fetchingImagesURL}/${src}`} alt={'carmodel'} />
            <p>{title}</p>
            {isIconVisible && <DeleteIcon className={styles.deletingIcon} />}
        </div>
    )
}

export default  SinglePreviewItemWrapper;