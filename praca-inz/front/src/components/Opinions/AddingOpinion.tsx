import Modal from '@mui/material/Modal';
import {useState} from "react";
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import styles from "./Opinions.module.scss";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {getLoggedUserRole} from "../../store/userSlice";
import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {addingReviewForCarModel} from "../../store/reviewSlice";
import { useParams} from "react-router-dom";
import {toast} from "react-toastify";


interface Props {
    carModelId?: string
}

const AddingOpinion = ({carModelId} : Props) => {

    const dispatch = useAppDispatch();
    const userRole = useAppSelector(getLoggedUserRole);
    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [ratingValue, setRatingValue] = useState<number | null>(1);
    const [textAreaValue, setTextAreaValue] = useState<string>('');


    const submitForm = (e: any) => {
        e.preventDefault();
        const reviewModel = {
            description: textAreaValue,
            rate: ratingValue
        }
        dispatch(addingReviewForCarModel({ id: carModelId, review: reviewModel}))
        toast.success('Komentarz dodany!', {
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
            {userRole ?
                    <Button
                        variant="contained"
                        type="submit"
                        className={styles.addingOpinionButton}
                        onClick={() => setIsOpen(true)}
                    >
                        Dodaj komentarz
                    </Button>
                    : <h3 className={styles.notLoggedText}>Zaloguj sie aby dodac komentarz</h3>
            }
            <Modal
                open={isOpen}
                onClose={()=> setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <div className={styles.modalWrapper}>
                    <form className={styles.addingOpinionForm} onSubmit={(e) => submitForm(e)}>
                        <p>Dodajesz opinie jako micad132</p>
                        <Rating  className={styles.rating} name="half-rating" defaultValue={1} precision={0.5} onChange={(e, newValue) => setRatingValue(newValue)} />
                        <TextareaAutosize
                            onChange={(e : any) => setTextAreaValue(e.target.value)}
                            aria-label="minimum height"
                            minRows={3}
                            placeholder="Wprowadz tresc komentarza"
                            className={styles.textarea}
                        />
                        {/*<Button variant="contained" component="label">*/}
                        {/*    Dodaj zdjecie*/}
                        {/*    <input hidden accept="image/*" multiple type="file" />*/}
                        {/*</Button>*/}
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

export default AddingOpinion;