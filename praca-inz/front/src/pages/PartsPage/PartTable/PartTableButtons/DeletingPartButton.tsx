import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import {useAppDispatch} from "../../../../utils/types/hooks";
import {deletingPartThunk} from "../../../../store/partSlice";

interface Props {
    id: number
}

const DeletingPartButton = ({id} : Props) => {

    const dispatch = useAppDispatch();
    const deletePart = () => {
        dispatch(deletingPartThunk(id));
    }

    return (
        <strong>
            <Button
                variant="contained"
                size="small"
                startIcon={<DeleteIcon />}
                onClick={deletePart}
            >
                Usun
            </Button>
        </strong>
    )
}

export  default  DeletingPartButton;