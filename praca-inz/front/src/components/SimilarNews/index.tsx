import styles from './SimilarNews.module.scss';
import SimilarSingleNews from "./SimilarSingleNews";

type SimilarNewsType = {
    postId: number,
    title: string,
    author: string,
    date: string,
    imageSrc: string,
    postCategory: string,
}

interface Props {
    similarNews : SimilarNewsType[]
}

const SimilarNews = ({similarNews} : Props) => {

    const similarSingleNews = similarNews.map(({postId, title,date,author, imageSrc, postCategory}) =>
        <SimilarSingleNews postId={postId} title={title} date={date}  author={author} imageSrc={imageSrc}/>);

    return(
        <section className={styles.wrapper}>
            <h3>Podobne posty tej samej kategorii ({similarNews[0]?.postCategory})</h3>
            <div className={styles.similarSingleNewsWrapper}>
                {similarSingleNews}
            </div>

        </section>
    )
}

export default  SimilarNews;