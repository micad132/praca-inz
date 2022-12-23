import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchPartsThunk, getAllParts, getIsAddingModalOpen} from "../../store/partSlice";
import PartsTable from "./PartTable/PartsTable";
import styles from './PartsPage.module.scss';
import Modal from '@mui/material/Modal';
import PartActionModal from "./PartTable/PartActionModal";
import AddingPart from "./AddingPart";

const PartsPage = () => {

    const dispatch = useAppDispatch();
    const parts = useAppSelector(getAllParts);
    const isOpen = useAppSelector(getIsAddingModalOpen);
    // useEffect(() => {
    //    dispatch(fetchPartsThunk());
    // }, [dispatch]);

    const rows = parts.map((part) => {
        return {
            id: part.partId,
            col1: part.partId,
            col2: part.partName,
            col3: part.partPrice
        }
    });

    console.log('PARTS', parts);
    console.log('ISOPEN', isOpen);
    return(
        <div className={styles.wrapper}>

            <PartsTable rows={rows}/>
            <AddingPart partsLength={parts?.length}/>
        </div>
    )
}

export default PartsPage;