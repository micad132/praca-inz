import Button from "@mui/material/Button";
import {useAppDispatch} from "../../../utils/types/hooks";
import {changeAddingPartToDatabaseVisibility} from "../../../store/partSlice";


interface Props {
    partsLength: number;
}

const AddingPartInfo = ({partsLength} : Props) => {

    const dispatch = useAppDispatch();
    return(
        <>
            <h2>Czesci dostepne w bazie: ({partsLength})</h2>
            <h3>Kliknij przycisk ponizej aby dodac czesc do bazy</h3>
            <Button
                variant="contained"
                type="submit"
                onClick={() => dispatch(changeAddingPartToDatabaseVisibility(true))}
            >
                Dodaj
            </Button>
        </>
    )
}

export default AddingPartInfo;