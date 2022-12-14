import styles from './SimilarNews.module.scss';
import moment from "moment";
import {fetchingImagesURL} from "../../utils/GlobalVariables";
import {useNavigate} from "react-router-dom";


interface Props {
    postId: number,
    title: string,
    date: string,
    author: string,
    imageSrc: string,
}

const SimilarSingleNews = ({postId,title,date,author,imageSrc} : Props) => {


    const navigate = useNavigate();
    const formattedDate = moment(date).format('MM/DD/YYYY');
    const formattedDateHours = moment(date).format('HH:mm');
    return(
        <div className={styles.singleNews} onClick={() => navigate(`/news/${postId}`)}>

            <div className={styles.topInfo}>
                <p className={styles.author}>{author}</p>
                <div>
                    <p className={styles.date}>{formattedDate}</p>
                    <p className={styles.date}>{formattedDateHours}</p>
                </div>
            </div>
            <div className={styles.imageDiv}>
                <div className={styles.img}>
                    <img src={`${fetchingImagesURL}/${imageSrc}`} alt={'similar_news'} />
                </div>
                <p className={styles.title}>{title}</p>
            </div>
        </div>
    )
}

export default SimilarSingleNews;