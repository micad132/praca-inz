
import styles from './Wrappers.module.scss';

const ModalWrapper = ({children} : any) => {

    return(
        <div className={styles.modalWrapper}>
            {children}
        </div>
    )
}

export default  ModalWrapper;