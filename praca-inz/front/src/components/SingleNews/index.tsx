import styles from './SingleNews.module.scss';
import {fetchingImagesURL} from "../../utils/GlobalVariables";
import {useNavigate} from "react-router-dom";

interface Props {
    description: string,
    imageSrc: string,
    postCategory: string,
    postId: number,
    title: string,
}

const SingleNews = ({description,imageSrc,postCategory,postId,title} : Props) => {


    const navigate = useNavigate();

    return(
        <section className={styles.wrapper} onClick={() => navigate(`/news/${postId}`)}>
            <div className={styles.wrapper__image}>
                <img src={`${fetchingImagesURL}/${imageSrc}`}  alt={'dummy car'}/>
            </div>

            <div className={styles.wrapper__content}>
                <h2>Kategoria {postCategory}</h2>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </section>
    )
}

export default SingleNews;