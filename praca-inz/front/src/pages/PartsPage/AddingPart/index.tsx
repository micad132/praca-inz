import AddingPartModal from "./AddingPartModal";
import AddingPartInfo from "./AddingPartInfo";
import styles from '../PartsPage.module.scss';

interface Props {
    partsLength: number,
    userRole: string,
}

const AddingPart = ({partsLength,userRole} : Props) => {

    return(
        <div className={styles.addingPartWrapper}>
            <AddingPartInfo userRole={userRole} />
            <AddingPartModal />
        </div>
    )
}

export  default  AddingPart;