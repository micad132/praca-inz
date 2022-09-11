import styles from './CommercialsPage.module.scss';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
    imgSrc: string,
    title: string
}

const CommercialPreview = ({imgSrc,title} : Props)  => {

    const [isShowButtons,setIsShowButtons] = useState(false);
    return(
        <div className={styles.commercialDiv} onMouseEnter={()=> setIsShowButtons(true)} onMouseLeave={() => setIsShowButtons(false)}>
            <img src={imgSrc} />
            <h4>{title}</h4>
            {isShowButtons && <IconButton aria-label="delete" sx={{position: "absolute", top: "10px", right: "10px"}}>
                <DeleteIcon />
            </IconButton> }
        </div>
    )
}

export default CommercialPreview;