import AddingPartModal from "./AddingPartModal";
import AddingPartInfo from "./AddingPartInfo";
import styles from '../PartsPage.module.scss';

interface Props {
    partsLength: number;
}

const AddingPart = ({partsLength} : Props) => {

    return(
        <div className={styles.addingPartWrapper}>
            <AddingPartInfo />
            <AddingPartModal />
        </div>
    )
}

export  default  AddingPart;