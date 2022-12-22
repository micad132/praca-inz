import styles from './Opinions.module.scss';
import Rating from "@mui/material/Rating";
import moment from "moment";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DeleteIcon from '@mui/icons-material/Delete';
import {toast} from "react-toastify";
import {useAppDispatch} from "../../utils/types/hooks";
import {deletePostReviewById, deleteReviewById, updatingReview} from "../../store/reviewSlice";
import {useState} from "react";

interface Props {
    id: number
    nick: string,
    rating: number,
    description: string,
    date: string,
    isVulgar: boolean,
    isProperScreen: boolean,
    isAdminPanel : boolean,
    userRole?: string,
    reviewHeader: string,
    isCarModel?: boolean,
    postId?: number,
    isCarReview?: boolean,
}

const Opinion = ({id,nick,rating,description,date, isVulgar, isProperScreen, isAdminPanel, userRole, reviewHeader,isCarModel, postId,isCarReview} : Props) => {

    const [isOpinionVulgar,setIsOpinionVulgar] = useState<boolean>(isVulgar);
    const formattedDate = moment(date).format('MM/DD/YYYY');
    const formattedDateHours = moment(date).format('HH:mm');
    const dispatch = useAppDispatch();
    console.log('ISCARREVIEW, POSTID', isCarReview,postId,id);

    const showAddingToListInfo = () => {
         const isVulgarChanged = !isVulgar;
         console.log('ZMIANA NA', isVulgarChanged);
        // console.log(isVulgarChanged);
        // console.log('PRZED ZMIANA', isOpinionVulgar);
        setIsOpinionVulgar((prevState) => !prevState);
        // console.log('PO ZMIANIE', isOpinionVulgar);
        // let isOpinionVulgar = !isVulgar;
        const toastMsg = !isOpinionVulgar
            ? 'Dodano do listy niewłaściwych komentarzy'
            : 'Usunieto z listy niewlasciwych komentarzy';
        toast.success(toastMsg, {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log('PRZED WYSLANIEM', !isOpinionVulgar);
        dispatch(updatingReview({id: id, isVulgar: !isOpinionVulgar}));
    }

    const deleteVulgarReview = () => {

        if(isCarReview){
            dispatch(deleteReviewById(id));
        } else if(!isCarReview && postId) {
            console.log('HALOJD');
            dispatch(deletePostReviewById(postId));
        }

        toast.success('Usunieto komentarz!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }

    console.log('ROLA', userRole);
    const showIcon = (isProperScreen || isAdminPanel) && userRole === 'ADMIN';


    const opinionStyle = isOpinionVulgar
        ? {
            margin: '20px auto',
            maxWidth: '800px',
            border: '2px solid red',
            borderRadius: '5px',
            display: 'flex',
            padding: '20px',
        }
        : {
            margin: '20px auto',
            maxWidth: '800px',
            border: '1px solid black',
            borderRadius: '5px',
            display: 'flex',
            padding: '20px',
        }

    const showProperIcon = isAdminPanel
        ? <div className={styles.iconsDiv}>
            <PriorityHighIcon className={styles.badCommentIcon} onClick={showAddingToListInfo}/>
            <DeleteIcon className={styles.deletingIcon} onClick={deleteVulgarReview} />
          </div>
        : <PriorityHighIcon className={styles.badCommentIcon} onClick={showAddingToListInfo}/>


    return(

            <div style={opinionStyle}>
                <div className={styles.opinionDetails}>
                    <h3>{nick}</h3>
                    <h5>Dla ,,{reviewHeader}"</h5>
                    <p><span className={styles.boldFont}>Ocena:</span> <Rating name="read-only" value={rating} precision={0.5} readOnly /></p>
                    <div>
                        <p className={styles.date}>Data wystawienia:</p>
                        <p className={styles.formattedDate}>{formattedDateHours}</p>
                        <p className={styles.formattedDate}>{formattedDate}</p>
                    </div>
                </div>
                <div className={styles.opinionText}>
                    <p>{description}</p>
                </div>
                {showIcon &&
                  <div>
                    {showProperIcon}
                  </div>
                }

            </div>
    )
}

export default Opinion;