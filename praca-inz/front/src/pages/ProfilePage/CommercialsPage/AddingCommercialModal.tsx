import Modal from '@mui/material/Modal';
import {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import FormWrapper from "../../../components/FormWrapper/FormWrapper";
import TextField from "@mui/material/TextField";


const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    backgroundColor: '#fff',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const AddingCommercialModal = () => {

    const [isOpen,setIsOpen] = useState(false);
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
                        <TextField
                            id="outlined-basic"
                            label="Wprowadz tytul"
                            variant="outlined"
                            value=""

                        />
                        <Button variant="contained" component="label">
                            Dodaj zdjecie
                            <input hidden accept="image/*" multiple type="file" />
                        </Button>
                    </FormWrapper>
                </Box>
            </Modal>
        </div>
    )
}

export default  AddingCommercialModal;