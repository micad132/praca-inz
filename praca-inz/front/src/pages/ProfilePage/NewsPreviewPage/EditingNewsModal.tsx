import Modal from "@mui/material/Modal";
import ModalWrapper from "../../../components/Wrappers/ModalWrapper";
import styles from "../../CarsPage/CarsPage.module.scss";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import {FormControl} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import {Dispatch, SetStateAction, useState} from "react";
import {NewsToAddType} from "../../../services/NewsService";
import {useAppDispatch} from "../../../utils/types/hooks";
import {editingNewsThunk} from "../../../store/newsSlice";
import {toast} from "react-toastify";

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    postId: number,
}

const initialState = {
    title: '',
    description: '',
    postCategory: ''
}

const EditingNewsModal = ({isOpen,setIsOpen,postId} : Props) => {

    const dispatch = useAppDispatch();
    const [newsValues,setNewsValues] = useState<NewsToAddType>(initialState);

    const submitForm = ( e: any) => {
        e.preventDefault();
        const data = {postId, ...newsValues}
        dispatch(editingNewsThunk(data));
        toast.success('Edycja udana!', {
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
        <Modal
            open={isOpen}
            onClose={()=> setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <div>
                <ModalWrapper>
                    <h3>Edytujesz post</h3>
                    <form className={styles.addingCarModalForm} onSubmit={(e) => submitForm(e)}>

                        <TextField
                            id="outlined-basic"
                            label="Wprowadz tytul postu"
                            variant="outlined"
                            helperText="Przynajmniej 4 znaki"
                            onChange={ (e) => setNewsValues((prevState) => ({
                                ...prevState,
                                title: e.target.value,
                            }))}
                        />
                        <TextareaAutosize className={styles.textArea}
                                          onChange={(e : any) => setNewsValues((prevState) =>
                                              ({
                                                  ...prevState,
                                                  description: e.target.value
                                              }))}
                                          aria-label="minimum height"
                                          minRows={3}
                                          placeholder="Wprowadz tresc opisu postu"
                        />
                        <FormControl fullWidth>
                            <InputLabel id="postCategory">Kategoria postu</InputLabel>
                            <Select
                                labelId="postCategory"
                                id="postCategory"
                                value={newsValues.postCategory}
                                label="Kategoria postu"
                                onChange={(e) => setNewsValues((prevState) =>({
                                    ...prevState,
                                    postCategory: e.target.value
                                }))}
                            >
                                <MenuItem value={'POLAND'}>Polska</MenuItem>
                                <MenuItem value={'EUROPE'}>Europa</MenuItem>
                                <MenuItem value={'WORLD'}>Świat</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant="contained"
                            type="submit"

                        >
                            Edytuj
                        </Button>
                    </form>
                </ModalWrapper>
            </div>
        </Modal>
    )
}

export default  EditingNewsModal;