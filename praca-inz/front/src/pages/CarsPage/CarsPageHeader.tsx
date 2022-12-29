import styles from "./CarsPage.module.scss";

interface Props {
    carListLength: number,
}

const CarsPageHeader = ({carListLength} : Props) => {

    return(

        carListLength > 0
            ? <h1>Wszystkie modele aut na portalu ({carListLength})</h1>
            : <h1 className={styles.errorTitle}>Brak dostepnych aut</h1>
    )
}

export default  CarsPageHeader;