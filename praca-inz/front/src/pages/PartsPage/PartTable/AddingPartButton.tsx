import Button from "@mui/material/Button";
import {changeModalVisibility, setPartDetails} from "../../../store/partSlice";
import {useAppDispatch} from "../../../utils/types/hooks";
import {addOrderThunk, setPartId} from "../../../store/orderSlice";

interface Props {
    id: number,
    partName: string,
    partPrice: number
}

const AddingPartButton = ({id, partName, partPrice} : Props) => {

    const dispatch = useAppDispatch();


    const eventAction = () => {
        console.log('KLIKLO', partName);
        dispatch(changeModalVisibility(true));
        dispatch(setPartId(id));
        const partDetails = { partName, partPrice };
        dispatch(setPartDetails(partDetails));
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