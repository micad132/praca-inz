import styles from './Opinions.module.scss';

interface Props {
    nick: string,
    rating: number,
    description: string,
}

const Opinion = ({nick,rating,description} : Props) => {

    return(
        <div className={styles.opinion}>
            <div className={styles.opinionDetails}>
                <h3>{nick}</h3>
                <p><span className={styles.boldFont}>Ocena:</span> {rating}</p>
                <p><span className={styles.boldFont}>Data wystawienia</span> 27.09.2022</p>
            </div>
            <div className={styles.opinionText}>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default Opinion;