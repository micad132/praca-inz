import Button from "@mui/material/Button";
import { useState } from "react";
import AddingCarModal from "./AddingCarModal";
import AddingWrapper from "../../components/Wrappers/AddingWrapper";

const AddingCar = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    return(
        <AddingWrapper>
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
        </AddingWrapper>
    )
}

export default  AddingCar;