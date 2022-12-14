import styles from './SingleNewsPage.module.scss';
import moment from "moment";


type TopInfoType = {
    author: string,
    date: string,
}

interface Props {
    dataTopInfo: TopInfoType
}

const SingleNewsPageTopInfo = ({dataTopInfo} : Props) => {

    const {author,date} = dataTopInfo;
    const formattedDate = moment(date).format('MM/DD/YYYY');
    const formattedDateHours = moment(date).format('HH:mm');
    return(
        <div className={styles.topInfoWrapper}>
            <div>
                <p>Napisane przez: <span className={styles.postAuthor}>{author}</span></p>
            </div>
            <div className={styles.date}>
                <p>Data dodania:</p>
                <p>{formattedDate}</p>
                <p>{formattedDateHours}</p>
            </div>
        </div>
    )
}

export default  SingleNewsPageTopInfo;