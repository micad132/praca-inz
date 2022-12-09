import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import Alert from '@mui/material/Alert';
import {useAppDispatch, useAppSelector} from "../../../../utils/types/hooks";
import {deletingPartThunk} from "../../../../store/partSlice";
import {getAllOrders} from "../../../../store/orderSlice";
import {toast} from "react-toastify";

interface Props {
    id: number
}

const DeletingPartButton = ({id} : Props) => {

    let isPartInUse = false;
    const dispatch = useAppDispatch();
    const orders = useAppSelector(getAllOrders);

    orders.forEach(order => {
        if(order.partModelDTO.partId === id){
            isPartInUse = true;
        }
    })
    const deletePart = () => {
        if(!isPartInUse){
            dispatch(deletingPartThunk(id));
            toast.success('Usunieto czesc', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.error('Czesc jest wykorzystywana w zamowieniu. Najpierw usun zamowienie', {
                position: "top-left",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }

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