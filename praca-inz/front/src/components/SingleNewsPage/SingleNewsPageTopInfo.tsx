import styles from './SingleNewsPage.module.scss';

const SingleNewsPageTopInfo = () => {

    return(
        <div className={styles.topInfoWrapper}>
            <div>
                <p>Napisane przez: <span className={styles.postAuthor}>Micad132</span></p>
            </div>
            <div className={styles.date}>
                <p>Data dodania:</p>
                <p>23.11.2000</p>
                <p>20:05</p>
            </div>
        </div>
    )
}

export default  SingleNewsPageTopInfo;