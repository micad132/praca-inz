import HelpTabs from "./HelpTabs";
import styles from './HelpPage.module.scss';

const HelpPage = () => {

    return(
        <div className={styles.wrapper}>
            <h1>Znajdujesz sie na ekranie z pomoca</h1>
            <h3>Kliknij kategorie aby uzyskac odpowiednie informacje</h3>
            <HelpTabs />
        </div>
    )
}

export default HelpPage;