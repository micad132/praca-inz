import styles from './SimilarNews.module.scss';
import SimilarSingleNews from "./SimilarSingleNews";


const dummySimilarNews = [
    {
        id: 1,
        title: 'pierwszy similar',
        date: '23.11.2022 10:20',
        author: 'micad132'
    },
    {
        id: 2,
        title: 'drugi similar',
        date: '23.11.2022 17:50',
        author: 'kimek132'
    },
    {
        id: 3,
        title: 'trzeci similar',
        date: '23.11.2022 27:27',
        author: 'r3pix'
    },
    {
        id: 4,
        title: 'czwarty similar',
        date: '23.11.2022 10:20',
        author: 'noscanx'
    },
]

const SimilarNews = () => {

    const similarSingleNews = dummySimilarNews.map(({title,date,author}) => <SimilarSingleNews title={title} date={date}  author={author} />);

    return(
        <section className={styles.wrapper}>
            <h3>Podobne posty tej samej kategorii</h3>
            <div className={styles.similarSingleNewsWrapper}>
                {similarSingleNews}
            </div>

        </section>
    )
}

export default  SimilarNews;