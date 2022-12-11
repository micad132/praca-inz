import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import {Dispatch, SetStateAction, useState} from "react";
import {CarModelToAddType} from "../../services/CarModelService";
import Rating from "@mui/material/Rating";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import { FormControl } from "@mui/material";
import ModalWrapper from "../../components/Wrappers/ModalWrapper";
import styles from './CarsPage.module.scss';
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {addingImageThunk, getImageToAddId} from "../../store/imageSlice";
import ImageService from "../../services/ImageService";
import {addingCarModelThunk} from "../../store/carModelSlice";


interface Props {
    isOpen: boolean,
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

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

const AddingCarModal = ({isOpen,setIsOpen} : Props) => {

    const dispatch = useAppDispatch();
    let imageId = 1;
    const [carModelValues,setCarModelValues] = useState<CarModelToAddType>(initialState);
    const [selectedFile,setSelectedFile] = useState(null);
    const addingImage = (e : any) => {
        console.log('WBILO');
        const formData = new FormData();
        formData.append("file",e.target.value)
        dispatch(addingImageThunk(formData))
    }

    const submitForm = (e : any) => {

        e.preventDefault();
        console.log('JOL');
        console.log('imageId', imageId);
        const data = {...carModelValues, imageId};
        dispatch(addingCarModelThunk(data));
        // formData.append("file", selectedFile);
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

                        <TextField
                            id="outlined-basic"
                            label="Wprowadz nazwe auta"
                            variant="outlined"
                            onChange={ (e) => setCarModelValues((prevState) => ({
                                ...prevState,
                                name: e.target.value,
                            }))}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Wprowadz cene auta"
                            variant="outlined"
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
                            onChange={ (e) => setCarModelValues((prevState) => ({
                                ...prevState,
                                enginePower: Number(e.target.value),
                            }))}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Wprowadz pojemnosc silnika"
                            variant="outlined"
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
                        <Button variant="contained" component="label">
                            Dodaj zdjecie
                            <input hidden accept="image/*" multiple type="file" onChange={(e) => {
                                const formData = new FormData();
                                // @ts-ignore
                                console.log(e.target.files[0]);
                                // @ts-ignore
                                formData.append("image",e.target.files[0])

                                // dispatch(addingImageThunk(formData))
                                ImageService.addImage(formData).then((image) => {
                                    imageId = image.id;
                                })
                            }} />
                            <CameraAltIcon />
                        </Button>
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
            </ModalWrapper>
            </div>
        </Modal>
    )
}

export  default  AddingCarModal;