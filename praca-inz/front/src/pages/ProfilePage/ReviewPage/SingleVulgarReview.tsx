
import styles from "../../../components/Opinions/Opinions.module.scss";
import Rating from "@mui/material/Rating";
import moment from "moment";


interface Props {
    userNick: string,
    rate: number,
    description: string,
    date: string,

}

const SingleVulgarReview = ({userNick,rate,description,date} : Props) => {

    const formattedDate = moment(date).format('MM/DD/YYYY');
    const formattedDateHours = moment(date).format('HH:mm');
    return (
        <div>
            <div className={styles.opinionDetails}>
                <h3>{userNick}</h3>
                <p><span className={styles.boldFont}>Ocena:</span> <Rating name="read-only" value={rate} precision={0.5} readOnly /></p>
                <div>
                    <p className={styles.date}>Data wystawienia:</p>
                    <p className={styles.formattedDate}>{formattedDateHours}</p>
                    <p className={styles.formattedDate}>{formattedDate}</p>
                </div>
            </div>
            <div className={styles.opinionText}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default  SingleVulgarReview;