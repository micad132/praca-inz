import Modal from '@mui/material/Modal';
import {useState} from "react";
import Button from "@mui/material/Button";
import Rating from '@mui/material/Rating';
import styles from "./Opinions.module.scss";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {getLoggedUserNickname, getLoggedUserRole} from "../../store/userSlice";
import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {addingReviewForCarModel, addingReviewForNews} from "../../store/reviewSlice";
import { useParams} from "react-router-dom";
import {toast} from "react-toastify";


interface Props {
    carModelId?: string,
    postId?: number,
    userRole?: string,
    isCarModelScreen: boolean,
}

const AddingOpinion = ({carModelId, userRole, isCarModelScreen, postId} : Props) => {

    const dispatch = useAppDispatch();

    const [isOpen,setIsOpen] = useState<boolean>(false);
    const [ratingValue, setRatingValue] = useState<number | null>(1);
    const [textAreaValue, setTextAreaValue] = useState<string>('');

    const userNick = useAppSelector(getLoggedUserNickname);


    const submitForm = (e: any) => {
        e.preventDefault();
        const reviewModel = {
            description: textAreaValue,
            rate: ratingValue
        }
        if(isCarModelScreen){
            dispatch(addingReviewForCarModel({ id: carModelId, review: reviewModel}))
        } else if(!isCarModelScreen) {
            dispatch(addingReviewForNews({id: postId, review: reviewModel}))
        }
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
            {userRole === 'USER'
                ?
                    <Button
                        variant="contained"
                        type="submit"
                        className={styles.addingOpinionButton}
                        onClick={() => setIsOpen(true)}
                    >
                        Dodaj komentarz
                    </Button>

                : <h3 className={styles.notLoggedText}>Zaloguj sie na konto uzytkownika aby dodac komentarz</h3>
            }
            <Modal
                open={isOpen}
                onClose={()=> setIsOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >

                <div className={styles.modalWrapper}>
                    <form className={styles.addingOpinionForm} onSubmit={(e) => submitForm(e)}>
                        <p>Dodajesz opinie jako {userNick}</p>
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