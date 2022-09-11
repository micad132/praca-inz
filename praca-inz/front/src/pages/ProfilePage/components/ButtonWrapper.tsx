import styles from './ButtonWrapper.module.scss';

const ButtonWrapper = ({children} : any) => {

    return(
        <div className={styles.wrapper}>{children}</div>
    )
}

export default ButtonWrapper;