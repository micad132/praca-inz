
import styles from './Commercials.module.scss';
import Commercial from "./Commercial";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchCommercialsThunk, getAllCommercials,} from "../../store/carModelSlice";
import {useEffect} from "react";
import Button from "@mui/material/Button";

const Commercials = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCommercialsThunk())
    }, [dispatch]);

    const commercials = useAppSelector(getAllCommercials);
    const commercialList = commercials.map(commercial =>
        <Commercial key={commercial.commercialId} id={commercial.carModelId} src={commercial.imageName} header={commercial.name}/>
    );
    const commercialsContent = commercials.length > 0
        ? commercialList
        : <div>
            <h3>Nie ma reklam</h3>
            <Button variant="contained">Kliknij aby dodac</Button>
          </div>

    return(
        <div className={styles.wrapper}>
            <h2>Panel reklam:</h2>
            {commercialsContent}
        </div>

    )
}

export default Commercials;
