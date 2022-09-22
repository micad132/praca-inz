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
import {useSelector} from "react-redux";
import {getAllImages} from "../../../store/imageSlice";

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
    const handleChange = (event: SelectChangeEvent) => {
        setIdForCommercial(event.target.value as string);
    };
    // const images = useSelector(getAllImages);
    // console.log('OBRAZY Z ADDINGU', images)
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
                                <MenuItem value={1}>BMW</MenuItem>
                                <MenuItem value={2}>Audi</MenuItem>
                                <MenuItem value={3}>Opel</MenuItem>
                            </Select>
                            <Button
                                variant="contained"
                                type="submit"

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