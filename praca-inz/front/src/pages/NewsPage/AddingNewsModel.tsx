import Modal from "@mui/material/Modal";
import ModalWrapper from "../../components/Wrappers/ModalWrapper";
import styles from "../CarsPage/CarsPage.module.scss";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {FormControl} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import {Dispatch, SetStateAction} from "react";

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>
}

const AddingNewsModel = ({isOpen, setIsOpen} : Props) => {

    const submitForm = (e: any) => {
        e.preventDefault();
    }

    return(
        <Modal
            open={isOpen}
            onClose={()=> setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <div>
                <ModalWrapper>
                    <h3>Dodaj model auta</h3>
                    <form className={styles.addingCarModalForm} onSubmit={(e) => submitForm(e)}>

                        <Button
                            variant="contained"
                            type="submit"

                        >
                            Dodaj
                        </Button>
                    </form>
                </ModalWrapper>
            </div>
        </Modal>
    )
}

export default  AddingNewsModel;