import Modal from "@mui/material/Modal";
import ModalWrapper from "../../../components/Wrappers/ModalWrapper";
import styles from "../../OrdersPage/OrdersPage.module.scss";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Rating from "@mui/material/Rating";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import MenuItem from "@mui/material/MenuItem";
import {useAppDispatch} from "../../../utils/types/hooks";
import {Dispatch, SetStateAction, useState} from "react";
import {CarModelToAddType} from "../../../services/CarModelService";
import {
    initialValidationValues,
    InitialValidationValuesType
} from "../../../services/ValidationServices/AddingCarModelValidation";
import {editingCarModelThunk} from "../../../store/carModelSlice";
import {toast} from "react-toastify";

const initialState = {
    name: '',
    price: 0,
    rating: 0,
    description: '',
    enginePower: 0,
    engineCapacity: 0,
    gearbox: '',
    carBody: '',
    productionCountry: '',
}

interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    carId: number,
}

const EditingCarmodelModal = ({isOpen,setIsOpen,carId} : Props) => {

    const dispatch = useAppDispatch();
    const [carModelValues,setCarModelValues] = useState<CarModelToAddType>(initialState);
    const [isCarModelValuesIncorrect, setIsCarModelValuesIncorrect] = useState<InitialValidationValuesType>(initialValidationValues)

    const editCarmodel = () => {

        const data = {carId,...carModelValues};
        toast.success('Edycja udana!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        dispatch(editingCarModelThunk(data));
        setIsOpen(false);

    }

    return (
        <Modal
            open={isOpen}
            onClose={() => setIsOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div>
                <ModalWrapper>
                    <div className={styles.editingModelWrapper}>
                        <h3>Edytujesz samochód: </h3>
                        <TextField
                            id="outlined-basic"
                            label="Wprowadz nazwe auta"
                            variant="outlined"
                            helperText="Przynajmniej 4 znaki"
                            error={isCarModelValuesIncorrect.name}
                            onChange={ (e) => setCarModelValues((prevState) => ({
                                ...prevState,
                                name: e.target.value,
                            }))}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Wprowadz cene auta"
                            variant="outlined"
                            helperText="Wieksza niz 0"
                            error={isCarModelValuesIncorrect.price}
                            onChange={ (e) => setCarModelValues((prevState) => ({
                                ...prevState,
                                price: Number(e.target.value),
                            }))}
                        />
                        <Rating name="half-rating" defaultValue={1} precision={0.5} className={styles.rating}
                                onChange={(e, newValue) => setCarModelValues((prevState) =>
                                    ({
                                        ...prevState,
                                        rating: newValue
                                    }))}
                        />
                        <TextareaAutosize className={styles.textArea}
                                          onChange={(e : any) => setCarModelValues((prevState) =>
                                              ({
                                                  ...prevState,
                                                  description: e.target.value
                                              }))}
                                          aria-label="minimum height"
                                          minRows={3}
                                          placeholder="Wprowadz tresc opisu auta"
                        />
                        <TextField
                            id="outlined-basic"
                            label="Wprowadz moc silnika"
                            variant="outlined"
                            error={isCarModelValuesIncorrect.enginePower}
                            helperText="Wieksza niz 0, mniejsza niz 1000"
                            onChange={ (e) => setCarModelValues((prevState) => ({
                                ...prevState,
                                enginePower: Number(e.target.value),
                            }))}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Wprowadz pojemnosc silnika"
                            variant="outlined"
                            error={isCarModelValuesIncorrect.engineCapacity}
                            helperText="Wieksza niz 0, mniejsza niz 10.0"
                            onChange={ (e) => setCarModelValues((prevState) => ({
                                ...prevState,
                                engineCapacity: Number(e.target.value),
                            }))}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="gearbox">Typ skrzyni biegow</InputLabel>
                            <Select
                                labelId="gearbox"
                                id="gearbox"
                                value={carModelValues.gearbox}
                                error={isCarModelValuesIncorrect.gearbox}
                                label="Skrzynia biegow"
                                onChange={(e) => setCarModelValues((prevState) =>({
                                    ...prevState,
                                    gearbox: e.target.value
                                }))}
                            >
                                <MenuItem value={'automatyczna'}>Automatyczna</MenuItem>
                                <MenuItem value={'manualna'}>Manualna</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="carbody">Typ zawieszenia</InputLabel>
                            <Select
                                labelId="carbody"
                                id="carbody"
                                value={carModelValues.carBody}
                                error={isCarModelValuesIncorrect.carBody}
                                label="Zawieszenie"
                                onChange={(e) => setCarModelValues((prevState) =>({
                                    ...prevState,
                                    carBody: e.target.value
                                }))}
                            >
                                <MenuItem value={'sedan'}>Sedan</MenuItem>
                                <MenuItem value={'combi'}>Combi</MenuItem>
                                <MenuItem value={'hatchback'}>Hatchback</MenuItem>
                                <MenuItem value={'coupe'}>Coupe</MenuItem>
                                <MenuItem value={'suv'}>Suv</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl fullWidth>
                            <InputLabel id="productioncountry">Kraj produkcji</InputLabel>
                            <Select
                                labelId="productioncountry"
                                id="productioncountry"
                                value={carModelValues.productionCountry}
                                error={isCarModelValuesIncorrect.productionCountry}
                                label="Kraj produkcji"
                                onChange={(e) => setCarModelValues((prevState) =>({
                                    ...prevState,
                                    productionCountry: e.target.value
                                }))}
                            >
                                <MenuItem value={'Niemcy'}>Niemcy</MenuItem>
                                <MenuItem value={'Holandia'}>Holandia</MenuItem>
                                <MenuItem value={'Austria'}>Austria</MenuItem>
                                <MenuItem value={'Polska'}>Polska</MenuItem>
                                <MenuItem value={'Belgia'}>Belgia</MenuItem>
                            </Select>
                        </FormControl>
                        <Button
                            variant={"contained"}
                            onClick={editCarmodel}

                        >
                            Edytuj
                        </Button>
                    </div>
                </ModalWrapper>
            </div>
        </Modal>
    )
}

export default EditingCarmodelModal;