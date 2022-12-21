
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import styles from './Wrappers.module.scss';
import {Dispatch, SetStateAction} from "react";

interface Props {
    isAscSorted: boolean,
    setIsAscSorted: Dispatch<SetStateAction<boolean>>,
}

const SortingWrapper = ({isAscSorted,setIsAscSorted} : Props)  => {

    return(
        <div className={styles.sortingWrapper}>
            <h3>Sortowanie według daty</h3>
            <div onClick={() => setIsAscSorted(!isAscSorted)}>
                {isAscSorted  ?
                    <KeyboardArrowUpIcon  /> :
                    <KeyboardArrowDownIcon />
                }
            </div>
        </div>
    )
}

export default  SortingWrapper;