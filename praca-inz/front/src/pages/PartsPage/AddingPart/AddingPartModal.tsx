import Modal from "@mui/material/Modal";
import {
    addingPartThunk,
    changeAddingPartToDatabaseVisibility,
    changeModalVisibility,
    getIsAddingPartToDatabaseModalOpen
} from "../../../store/partSlice";
import styles from "../PartsPage.module.scss";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import {FormEvent, useState} from "react";
import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import TextField from "@mui/material/TextField";
import {toast} from "react-toastify";



interface AddingPartType {
    partName: string,
    partPrice: number
}

const addingPartInitialState = {
    partName: '',
    partPrice: 0,
}

const AddingPartModal = () => {

    const [partValues,setPartValues] = useState<AddingPartType>(addingPartInitialState);

    const isOpen = useAppSelector(getIsAddingPartToDatabaseModalOpen);
    const dispatch = useAppDispatch();

    const submitForm = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(partValues);
        console.log(Number(partValues.partPrice));
        dispatch(addingPartThunk(partValues))
        toast.success('Dodano czesc!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch(changeAddingPartToDatabaseVisibility(false));
        setPartValues(addingPartInitialState);
    }

    return(
        <div>

            <div style={{width: '300px', height: '300px'}}>
                <Modal
                    open={isOpen}
                    onClose={() => dispatch(changeAddingPartToDatabaseVisibility(false))}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >

                    <div className={styles.modalWrapper}>
                        <form  onSubmit={(e) => submitForm(e)}>
                            <TextField
                                id="outlined-basic"
                                label={'Wprowadz nazwe'}
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
                                label={'Wprowadz cene'}
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
        </div>
    )
}

export default AddingPartModal;