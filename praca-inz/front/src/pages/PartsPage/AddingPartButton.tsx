import Button from "@mui/material/Button";
import {changeModalVisibility} from "../../store/partSlice";
import {useAppDispatch} from "../../utils/types/hooks";

const AddingPartButton = () => {

    const dispatch = useAppDispatch();

    const eventAction = () => {
        console.log('KLIKLO');
        dispatch(changeModalVisibility(true));
    }

    return (
        <strong>
            <Button
                variant="contained"
                size="small"
                onClick={eventAction}
            >
                Dodaj
            </Button>
        </strong>
    )
}

export default AddingPartButton;