import Button from "@mui/material/Button";
import { useState } from "react";
import AddingCarModal from "./AddingCarModal";
import styles from './CarsPage.module.scss';

const AddingCar = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    return(
        <div className={styles.addingWrapper}>
            <div>
                <h2>Dodaj auto</h2>
                <Button
                    variant='contained'
                    onClick={() => setIsOpen(true)}
                >
                    Dodaj
                </Button>
            </div>
            <AddingCarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </div>
    )
}

export default  AddingCar;