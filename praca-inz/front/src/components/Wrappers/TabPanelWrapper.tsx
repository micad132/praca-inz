import styles from './Wrappers.module.scss';

const TabPanelWrapper = ({children} : any) => {

    return(
        <div className={styles.tabPanelWrapper}>
            {children}
        </div>
    )
}

export default  TabPanelWrapper;