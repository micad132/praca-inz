import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {changeModalVisibility, getIsAddingModalOpen} from "../../store/partSlice";
import styles from './PartsPage.module.scss';
import {useState} from "react";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {getLoggedUserNickname} from "../../store/userSlice";
import {addOrderThunk, getPartId} from "../../store/orderSlice";


const AddingPartToOrderModal = () => {

    const [amount,setAmount] = useState<string>('0');
    const isOpen = useAppSelector(getIsAddingModalOpen);
    const userNick = useAppSelector(getLoggedUserNickname);
    const partId = useAppSelector(getPartId);
    const dispatch = useAppDispatch();


    const handleChange = (event : any) => {
        setAmount(event.target.value);
    };

    const submitForm = (e : any) => {
        e.preventDefault();
        dispatch(changeModalVisibility(false));
        dispatch(addOrderThunk(partId));
        console.log('dziala');
    }

    const selectOptions = [1,2,3,4,5,6,7,8,9,10].map((option) => {
        return <MenuItem value={option}>{option}</MenuItem>
    })

    return (

        <div style={{width: '300px', height: '300px'}}>
            <Modal
                open={isOpen}
                onClose={() => changeModalVisibility(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <div className={styles.modalWrapper}>
                    <form  onSubmit={(e) => submitForm(e)}>
                        <p>Dodajesz zamowienie jako <span className={styles.userNick}>{userNick}</span></p>
                        <p>Opona:</p>
                        <FormControl size={'medium'}>
                            <InputLabel>Ilość</InputLabel>
                            <Select
                                value={amount}
                                label="Ilość"
                                onChange={handleChange}
                            >
                                {selectOptions}
                            </Select>
                        </FormControl>
                        <p>Łączna cena: {150 * parseInt(amount)}</p>
                        <Button
                            variant="contained"
                            type="submit"
                        >
                            Dodaj
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default AddingPartToOrderModal;