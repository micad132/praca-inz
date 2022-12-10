import SingleNewsPageInfo from "./SingleNewsPageInfo";
import styles from './SingleNewsPage.module.scss';
import SimilarNews from "../SimilarNews";
import Opinions from '../Opinions/Opinions';

const SingleNewsPage = () => {

    return(
        <section className={styles.wrapper}>
            <h1 className={styles.header}>Benzyna coraz droższa</h1>
            <SingleNewsPageInfo />
            <SimilarNews />
            <Opinions headerTitle={'Lista komentarzy'} isAdminPanel={false} />
            {/*<OtherNews />*/}
        </section>
    )
}

export default  SingleNewsPage;