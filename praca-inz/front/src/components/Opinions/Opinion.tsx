import styles from './Opinions.module.scss';
import Rating from "@mui/material/Rating";
import moment from "moment";
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import {toast, ToastContainer} from "react-toastify";

interface Props {
    nick: string,
    rating: number,
    description: string,
    date: string
}

const Opinion = ({nick,rating,description,date} : Props) => {

    console.log(nick);
    const formattedDate = moment(date).format('MM/DD/YYYY');
    const formattedDateHours = moment(date).format('HH:mm');


    const showAddingToListInfo = () => {
        toast.success('Dodano do listy niewłaściwych komentarzy!', {
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
        <>
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
                <div>
                    <PriorityHighIcon className={styles.badCommentIcon} onClick={showAddingToListInfo}/>
                </div>

            </div>
            <ToastContainer />
        </>
    )
}

export default Opinion;