import styles from '../../../utils/styles/Utils.module.scss';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppDispatch} from "../../../utils/types/hooks";
import {deleteCommercialThunk} from "../../../store/commercialSlice";

interface Props {
    imgSrc: string,
    title: string,
    id: number
}

const CommercialPreview = ({imgSrc,title,id} : Props)  => {

    const dispatch = useAppDispatch();
    const [isShowButtons,setIsShowButtons] = useState<boolean>(false);
    return(
        <div className={styles.previewItem} onMouseEnter={()=> setIsShowButtons(true)} onMouseLeave={() => setIsShowButtons(false)}>
            <img src={imgSrc} />
            <h4>{title}</h4>
            {isShowButtons && <IconButton aria-label="delete" sx={{position: "absolute", top: "10px", right: "10px"}} onClick={() => dispatch(deleteCommercialThunk(id))}>
                <DeleteIcon />
            </IconButton> }
        </div>
    )
}

export default CommercialPreview;