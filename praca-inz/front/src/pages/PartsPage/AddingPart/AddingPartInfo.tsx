import Button from "@mui/material/Button";
import {useAppDispatch} from "../../../utils/types/hooks";
import {changeAddingPartToDatabaseVisibility} from "../../../store/partSlice";




const AddingPartInfo = () => {

    const dispatch = useAppDispatch();
    return(
        <>
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