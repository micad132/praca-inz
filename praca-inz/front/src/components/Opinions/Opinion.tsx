import styles from './Opinions.module.scss';
import Rating from "@mui/material/Rating";
import moment from "moment";

interface Props {
    nick: string,
    rating: number,
    description: string,
    date: string
}

const Opinion = ({nick,rating,description,date} : Props) => {

    const formattedDate = moment(date).format('HH:mm MM/DD/YYYY');
    return(
        <div className={styles.opinion}>
            <div className={styles.opinionDetails}>
                <h3>{nick}</h3>
                <p><span className={styles.boldFont}>Ocena:</span> <Rating name="read-only" value={rating} precision={0.5} readOnly /></p>
                <p><span className={styles.boldFont}>Data wystawienia: </span><span className={styles.formattedDate}>{formattedDate}</span></p>
            </div>
            <div className={styles.opinionText}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Opinion;