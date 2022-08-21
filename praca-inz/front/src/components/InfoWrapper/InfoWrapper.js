import styles from './InfoWrapper.module.scss';

const InfoWrapper = ({title,details}) => {

    return(
    <section className={styles.wrapper}>
        <div className={styles.title}>
            <h2>{title}</h2>
        </div>
        <div className={styles.content}>
            {details.map( detail =>
                <div className={styles.content__details}>
                    <img src={detail.src}/>
                    <h3>{detail.title}</h3>
                </div>)}
        </div>
    </section>)
}

export default InfoWrapper;