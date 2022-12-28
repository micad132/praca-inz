import styles from './Wrappers.module.scss';

const PreviewWrapper = ({children} : any) => {

    return(
        <section className={styles.previewWrapper}>
            {children}
        </section>
    )
}

export default  PreviewWrapper;