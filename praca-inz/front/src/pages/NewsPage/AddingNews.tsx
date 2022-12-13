import Button from "@mui/material/Button";
import { useState } from "react";
import AddingWrapper from "../../components/Wrappers/AddingWrapper";
import AddingNewsModel from "./AddingNewsModel";
import styles from './NewsPage.module.scss';

const  AddingNews = () => {

    const [isOpen,setIsOpen] = useState<boolean>(false);
    return(
        <div className={styles.addingDiv}>
            <AddingWrapper>
                <h2>Dodaj post</h2>
                <Button
                    variant='contained'
                    onClick={() => setIsOpen(true)}
                >
                    Dodaj
                </Button>
                <AddingNewsModel isOpen={isOpen} setIsOpen={setIsOpen}/>
            </AddingWrapper>
        </div>
    )
}

export default  AddingNews;