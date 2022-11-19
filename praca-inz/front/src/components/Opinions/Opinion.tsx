import styles from './Opinions.module.scss';
import Rating from "@mui/material/Rating";
import moment from "moment";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import DeleteIcon from '@mui/icons-material/Delete';
import {toast} from "react-toastify";
import {useAppDispatch} from "../../utils/types/hooks";
import {deleteReviewById, updatingReview} from "../../store/reviewSlice";

interface Props {
    id: number
    nick: string,
    rating: number,
    description: string,
    date: string,
    isVulgar: boolean,
    isProperScreen: boolean,
    isAdminPanel : boolean
}

const Opinion = ({id,nick,rating,description,date, isVulgar, isProperScreen, isAdminPanel} : Props) => {

    console.log(nick);
    const formattedDate = moment(date).format('MM/DD/YYYY');
    const formattedDateHours = moment(date).format('HH:mm');
    const dispatch = useAppDispatch();


    const showAddingToListInfo = () => {
        const isVulgarChanged = !isVulgar;
        toast.success('Dodano do listy niewłaściwych komentarzy!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch(updatingReview({id: id, isVulgar: isVulgarChanged}));
    }

    const deleteVulgarReview = () => {
        console.log('siema');
        dispatch(deleteReviewById(id));
    }

    const showIcon = isProperScreen || isAdminPanel;

    const showProperIcon = isAdminPanel ?
        <DeleteIcon className={styles.deletingIcon} onClick={deleteVulgarReview} /> :
        <PriorityHighIcon className={styles.badCommentIcon} onClick={showAddingToListInfo}/>

    return(

            <div className={styles.opinion}>
                <div className={styles.opinionDetails}>
                    <h3>{nick}</h3>
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
                {showIcon && <div>
                    {showProperIcon}
                </div>}

            </div>
    )
}

export default Opinion;