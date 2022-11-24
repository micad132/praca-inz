import styles from './SimilarNews.module.scss';


interface Props {
    title: string,
    date: string,
    author: string
}

const SimilarSingleNews = ({title,date,author} : Props) => {




    return(
        <div className={styles.singleNews}>

            <div className={styles.topInfo}>
                <p className={styles.author}>{author}</p>
                <p className={styles.date}>{date}</p>
            </div>
            <img src={'https://picsum.photos/600'} />
            <p className={styles.title}>{title}</p>
        </div>
    )
}

export default SimilarSingleNews;