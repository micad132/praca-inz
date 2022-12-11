import Button from "@mui/material/Button";
import { useState } from "react";
import AddingCarModal from "./AddingCarModal";

const AddingCar = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    return(
        <>
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
        </>
    )
}

export default  AddingCar;