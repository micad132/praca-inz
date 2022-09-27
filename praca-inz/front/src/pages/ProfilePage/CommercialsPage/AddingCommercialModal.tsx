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
import {useAppSelector} from "../../../utils/types/hooks";
import {getAllCarModels} from "../../../store/carModelSlice";

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
    p: 3
};

const AddingCommercialModal = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [idForCommercial,setIdForCommercial] = useState<string>('');
    const carModels = useAppSelector(getAllCarModels);
    console.log('CARMODELS Z ADDING', carModels);
    const handleChange = (event: SelectChangeEvent) => {
        setIdForCommercial(event.target.value as string);
    };
    // const images = useSelector(getAllImages);
    // console.log('OBRAZY Z ADDINGU', images)
    const addCommercial = (id : string) => {

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
                <Box sx={style}>
                    <FormWrapper>
                        <h3>Dodaj reklame</h3>
                        <form className={styles.addingCommercialForm}>
                            <TextField
                                id="outlined-basic"
                                label="Wprowadz tytul"
                                variant="outlined"
                            />
                            <Button variant="contained" component="label">
                                Dodaj zdjecie
                                <input hidden accept="image/*" multiple type="file" />
                            </Button>
                            <InputLabel id="commercialSelect">Wybierz produkt do reklamy</InputLabel>
                            <Select
                                labelId="commercialSelect"
                                label="Wybierz model auta do reklamy"
                                id="commercialSelect"
                                value={idForCommercial}
                                onChange={handleChange}
                            >
                                {carModels.map(car => <MenuItem key={car.id} value={car.name}>{car.name}</MenuItem>)}
                            </Select>
                            <Button
                                variant="contained"
                                type="submit"
                                onClick={addCommercial}

                            >
                                Dodaj
                            </Button>
                        </form>
                    </FormWrapper>
                </Box>
            </Modal>
        </div>
    )
}

export default  AddingCommercialModal;