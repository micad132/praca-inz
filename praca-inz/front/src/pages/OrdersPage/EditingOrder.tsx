import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ModalWrapper from "../../components/Wrappers/ModalWrapper";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {fetchPartsThunk, getAllParts} from "../../store/partSlice";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {OrderEditType} from "../../services/OrderService";
import {editingOrderThunk} from "../../store/orderSlice";
import {toast} from "react-toastify";
import styles from './OrdersPage.module.scss';
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

interface Props {
    isModalShow: boolean,
    setIsModalShow: Dispatch<SetStateAction<boolean>>,
    orderId: number,
    partName: string
}

const EditingOrder = ({isModalShow, setIsModalShow, orderId, partName} : Props) => {

    const [newPartName,setNewPartName] = useState<string>(partName);
    const [amount,setAmount] = useState<string>('1');


    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchPartsThunk())
    }, [dispatch]);

    const allParts = useAppSelector(getAllParts);

    const editOrder = () => {

        const partToEdit = allParts.find(part => part.partName === newPartName);
        const data = {orderId, partAmount: Number(amount), partId: partToEdit?.partId}
        toast.success('Edytowano zamowienie', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch(editingOrderThunk(data));
        setIsModalShow(false);
    }

    const mappedSelectValues = allParts.map(part => <MenuItem value={part.partName}>{part.partName}</MenuItem>)

    const mappedSelectAmountValues = [1,2,3,4,5,6,7,8,9,10].map(number => <MenuItem value={number}>{number}</MenuItem>)

    return (
        <Modal
            open={isModalShow}
            onClose={() => setIsModalShow(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <div>
                <ModalWrapper>
                    <div className={styles.editingModelWrapper}>
                        <h3>Edytujesz zamowienie numer: 2</h3>
                        <p>Wybierz czesc na ktora ma byc zamowienie</p>
                        <FormControl fullWidth>
                            <InputLabel id="partName">Nazwa czesci</InputLabel>
                            <Select
                                labelId="partName"
                                id="partName"
                                value={newPartName}
                                onChange={(e) => setNewPartName(e.target.value)}
                            >
                                {mappedSelectValues}
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="partAmount">Ilosc</InputLabel>
                            <Select
                                labelId="partAmount"
                                id="partAmount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                            >
                                {mappedSelectAmountValues}
                            </Select>
                        </FormControl>
                        <Button
                            variant={"contained"}
                            onClick={editOrder}

                        >
                            Edytuj
                        </Button>
                    </div>
                </ModalWrapper>
            </div>
        </Modal>
    )
}

export  default  EditingOrder;