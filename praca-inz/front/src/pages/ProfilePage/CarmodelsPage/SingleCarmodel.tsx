import styles from '../../../utils/styles/Utils.module.scss';

interface Props {
    title: string
}

const SingleCarmodel = ({title} : Props) => {
    return(
        <div className={styles.previewItem}>
            {title}
        </div>
    )
}

export default SingleCarmodel;