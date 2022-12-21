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

    const similarNewsHeader = similarNews.length > 0
        ? `Podobne posty tej samej kategorii (${similarNews[0]?.postCategory})`
        : 'Brak postow o tej samej kategorii';

    return(
        <section className={styles.wrapper}>
            <h3>{similarNewsHeader}</h3>
            <div className={styles.similarSingleNewsWrapper}>
                {similarSingleNews}
            </div>

        </section>
    )
}

export default  SimilarNews;