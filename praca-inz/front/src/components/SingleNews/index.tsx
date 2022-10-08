import styles from './SingleNews.module.scss';

const SingleNews = () => {
    return(
        <section className={styles.wrapper}>
            <div className={styles.wrapper__image}>
                <img src={'https://picsum.photos/1200'}  alt={'dummy car'}/>
            </div>

            <div className={styles.wrapper__content}>
                <h2>BMW M3 to niezle autko</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dolor elit, finibus in elementum
                    faucibus, faucibus a diam. In ullamcorper mauris non lacus interdum finibus vitae porttitor risus.
                    Sed et
                </p>
            </div>
        </section>
    )
}

export default SingleNews;