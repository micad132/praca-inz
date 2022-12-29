import styles from '../../../utils/styles/Utils.module.scss';
import {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppDispatch} from "../../../utils/types/hooks";
import {deleteCommercialThunk} from "../../../store/carModelSlice";
import {toast} from "react-toastify";

interface Props {
    imgSrc: string,
    title: string,
    commercialId: number
}

const CommercialPreview = ({imgSrc,title,commercialId} : Props)  => {

    const dispatch = useAppDispatch();
    const [isShowButtons,setIsShowButtons] = useState<boolean>(false);

    const deleteCommercial = () => {
        dispatch(deleteCommercialThunk(commercialId));
        toast.success('Usunieto reklame!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return(
        <div className={styles.previewItem} onMouseEnter={()=> setIsShowButtons(true)} onMouseLeave={() => setIsShowButtons(false)}>
            <img src={imgSrc} />
            <h4>{title}</h4>
            {isShowButtons &&
            <IconButton aria-label="delete" sx={{position: "absolute", top: "10px", right: "10px"}} onClick={deleteCommercial}>
                <DeleteIcon />
            </IconButton> }
        </div>
    )
}

export default CommercialPreview;