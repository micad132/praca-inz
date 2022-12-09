import Modal from '@mui/material/Modal';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormWrapper from "../../../components/FormWrapper/FormWrapper";
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import styles from './CommercialsPage.module.scss';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {getAllCarModels} from "../../../store/carModelSlice";
import CommercialService from "../../../services/CommercialService";
import {addCommercialThunk} from "../../../store/commercialSlice";
import {toast} from "react-toastify";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 150,
    width: '30%',
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 2,
    textAlign: 'center'
};

const AddingCommercialModal = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [idForCommercial,setIdForCommercial] = useState<string>('');
    const [commercialName,setCommercialName] = useState<string>('');
    const carModels = useAppSelector(getAllCarModels);
    const dispatch = useAppDispatch();
    console.log('CARMODELS Z ADDING', carModels);
    const handleChange = (event: SelectChangeEvent) => {
        console.log(event.target.value);
        setIdForCommercial(event.target.value);
    };
    // const images = useSelector(getAllImages);
    // console.log('OBRAZY Z ADDINGU', images)
    const addCommercial = async (e : any) => {
        e.preventDefault();
        dispatch(addCommercialThunk({id: idForCommercial, name: commercialName}));
        toast.success('Dodano reklame!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setIsOpen(false);
    }

    return(
        <div>
            <Button  variant="contained" onClick={()=> setIsOpen(true)}>Dodaj reklame</Button>
            <Modal
                open={isOpen}
                onClose={()=> setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <div className={styles.modalWrapper}>
                        <h3>Dodaj reklame dla dostępnego modelu auta</h3>
                    {carModels.length > 0 ? <form className={styles.addingCommercialForm}>

                            <TextField
                                id="outlined-basic"
                                label="Wprowadz tytul"
                                variant="outlined"
                                onChange={ (e) => setCommercialName(e.target.value)}
                                className={styles.addingButtonFormElements}
                            />
                            {/*<Button variant="contained" component="label">*/}
                            {/*    Dodaj zdjecie*/}
                            {/*    <input hidden accept="image/*" multiple type="file" />*/}
                            {/*</Button>*/}
                            <InputLabel id="commercialSelect">Wybierz produkt do reklamy</InputLabel>
                            <Select
                                labelId="commercialSelect"
                                label="Wybierz model auta do reklamy"
                                id="commercialSelect"
                                value={idForCommercial}
                                onChange={handleChange}
                                className={styles.addingButtonFormElements}
                            >
                                {carModels.map(car => <MenuItem  key={car.carModelId} value={car.carModelId ? car.carModelId : ''}>{car.name}</MenuItem>)}
                            </Select>
                            <Button
                                variant="contained"
                                type="submit"
                                onClick={(e) => addCommercial(e)}
                                className={styles.addingButtonFormElements}

                            >
                                Dodaj
                            </Button>
                        </form> : <h3 style={{color: 'red'}}>Nie ma dostępnych aut w bazie</h3> }

                </div>
            </Modal>
        </div>
    )
}

export default  AddingCommercialModal;