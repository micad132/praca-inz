import {fetchingImagesURL} from "../../utils/GlobalVariables";
import styles from './Wrappers.module.scss';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from "react";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {deletingCarModelThunk, deletingCarModelWithCommercialThunk} from "../../store/carModelSlice";
import {deleteNewsByIdThunk} from "../../store/newsSlice";
import {toast} from "react-toastify";
import {getAllCommercials} from "../../store/carModelSlice";
import EditingCarmodelModal from "../../pages/ProfilePage/CarmodelsPage/EditingCarmodelModal";
import EditingNewsModal from "../../pages/ProfilePage/NewsPreviewPage/EditingNewsModal";

interface Props {
    id: number,
    title: string,
    src: string,
    isCar: boolean,
}

const SinglePreviewItemWrapper = ({id,title,src,isCar} : Props) => {

    const commercials = useAppSelector(getAllCommercials);
    const [isIconVisible,setIconVisible] = useState<boolean>(false);
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const deleteItem = () => {

        let msg = '';
        if(isCar) {
            //
            const singleCommercial =  commercials.find(commercial => commercial.carModelId === id);
            if(singleCommercial){
                const data = {carId: id, commercialId: singleCommercial.commercialId}
                dispatch(deletingCarModelWithCommercialThunk(data));
            } else {
                dispatch(deletingCarModelThunk(id));
            }
            msg = 'Model auta usunięty!';
        } else if(!isCar) {
            dispatch(deleteNewsByIdThunk(id));
            msg = 'Post usunięty!';
        }
        toast.success(msg, {
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
        <div className={styles.singlePreviewItemWrapper} onMouseEnter={() => setIconVisible(true)} onMouseLeave={() => setIconVisible(false)}>
            <img src={`${fetchingImagesURL}/${src}`} alt={'carmodel'} />
            <p>{title}</p>
            {isIconVisible &&
                <>
                    <EditIcon className={styles.editingIcon} onClick={() => setIsOpen(true)}/>
                    <DeleteIcon className={styles.deletingIcon} onClick={deleteItem} />
                </>
            }

            {isCar
                ? <EditingCarmodelModal isOpen={isOpen} setIsOpen={setIsOpen} carId={id} />
                : <EditingNewsModal isOpen={isOpen} setIsOpen={setIsOpen} postId={id} />
            }

        </div>
    )
}

export default  SinglePreviewItemWrapper;