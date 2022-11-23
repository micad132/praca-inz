import SingleNewsPageInfo from "./SingleNewsPageInfo";
import styles from './SingleNewsPage.module.scss';

const SingleNewsPage = () => {

    return(
        <section className={styles.wrapper}>
            <h1 className={styles.header}>Benzyna coraz droższa</h1>
            <SingleNewsPageInfo />
            {/*<OtherNews />*/}
        </section>
    )
}

export default  SingleNewsPage;