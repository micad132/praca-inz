import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {changeModalVisibility, getIsAddingModalOpen, getPartDetails, updatePartThunk} from "../../../store/partSlice";
import styles from '../PartsPage.module.scss';
import {Dispatch, FormEvent, SetStateAction, useState} from "react";
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import {getLoggedUserNickname} from "../../../store/userSlice";
import {addOrderThunk, getPartId} from "../../../store/orderSlice";
import TextField from "@mui/material/TextField";

interface AddingPartType {
    partName: string,
    partPrice: number
}

const addingPartInitialState = {
    partName: '',
    partPrice: 0,
}

type PartDetailsType = {
    id: number,
    partName: string,
    partPrice: number,
}

interface Props {
    isShow: boolean,
    setIsShowModal: Dispatch<SetStateAction<boolean>>,
    partDetails: PartDetailsType,
    isAddingAction: boolean,
}

const PartActionModal = ({isShow,setIsShowModal, partDetails, isAddingAction} : Props) => {

    const [amount,setAmount] = useState<string>('1');
    const [partValues,setPartValues] = useState<AddingPartType>(addingPartInitialState);
    const {id, partName, partPrice} = partDetails;
    // const isOpen = useAppSelector(getIsAddingModalOpen);
    const userNick = useAppSelector(getLoggedUserNickname);
    // const partId = useAppSelector(getPartId);
    // const partDetails = useAppSelector(getPartDetails);
    //
    // const { partName, partPrice } = partDetails;
    //
     const calculatingPrice = partPrice * parseInt(amount);

    const dispatch = useAppDispatch();

    const handleChange = (event : any) => {
        setAmount(event.target.value);
    };

    const submitForm = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // dispatch(changeModalVisibility(false));
        if(isAddingAction){
            dispatch(addOrderThunk(id));
        } else {
            const data = {partId: id, partName: partValues.partName, partPrice: partValues.partPrice};
            dispatch(updatePartThunk(data));
        }

        console.log('dziala');
    }

    const mainTitle = isAddingAction
        ? `Dodajesz zamowienie jako ${userNick}`
        : `Edytujesz czesc jako ${userNick}`

    const buttonText = isAddingAction ? 'Dodaj' : 'Edytuj';

    const selectOptions = [1,2,3,4,5,6,7,8,9,10].map((option) => {
        return <MenuItem value={option}>{option}</MenuItem>
    })

    const partInfo = isAddingAction
        ? <p>{partName}</p>
        : <p>Stara nazwa: {partName} stara cena: {partPrice}</p>

    const modalContent = isAddingAction
        ?  <>
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
            <p>Łączna cena: {calculatingPrice}</p>
          </>
        : <>
            <TextField
                id="outlined-basic"
                label={'Wprowadz nowa nazwe'}
                helperText="Przynajmniej 4 znaki"
                type="text"
                variant="outlined"
                value={partValues.partName}
                onChange={(e) => {
                    setPartValues((prevState) => ({
                        ...prevState,
                        partName: e.target.value,
                    }))
                }}
            />
            <TextField
                id="outlined-basic"
                label={'Wprowadz nowa cene'}
                helperText="Musi byc wieksza niz 0"
                type="text"
                variant="outlined"
                value={partValues.partPrice}
                onChange={(e) => {
                    setPartValues((prevState) => ({
                        ...prevState,
                        partPrice: Number(e.target.value),
                    }))
                }}
            />
          </>


    return (

        <div>
            <Modal
                open={isShow}
                onClose={() => setIsShowModal(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <div className={styles.modalWrapper}>
                    <form onSubmit={(e) => submitForm(e)}>
                        <p className={styles.userNick}>{mainTitle}</p>
                        {partInfo}
                        {modalContent}
                        <Button
                            variant="contained"
                            type="submit"
                        >
                            {buttonText}
                        </Button>
                    </form>
                </div>
            </Modal>
        </div>
    )
}

export default PartActionModal;