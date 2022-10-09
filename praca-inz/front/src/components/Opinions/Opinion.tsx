import styles from './Opinions.module.scss';

const Opinion = () => {

    return(
        <div className={styles.opinion}>
            <div className={styles.opinionDetails}>
                <h3>Michal132</h3>
                <p><span className={styles.boldFont}>Ocena:</span> 3.7/10</p>
                <p><span className={styles.boldFont}>Data wystawienia</span> 27.09.2022</p>
            </div>
            <div className={styles.opinionText}>
                <p>Przykladowy tekscik</p>
            </div>
        </div>
    )
}

export default Opinion;