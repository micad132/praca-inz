import Button from "@mui/material/Button";
import {changeModalVisibility} from "../../store/partSlice";
import {useAppDispatch} from "../../utils/types/hooks";
import {addOrderThunk, setPartId} from "../../store/orderSlice";

interface Props {
    id: number
}

const AddingPartButton = ({id} : Props) => {

    const dispatch = useAppDispatch();


    const eventAction = () => {
        console.log('KLIKLO');
        dispatch(changeModalVisibility(true));
        dispatch(setPartId(id));
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