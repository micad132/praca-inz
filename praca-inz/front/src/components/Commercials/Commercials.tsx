
import styles from './Commercials.module.scss';
import Commercial from "./Commercial";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {fetchCommercialsThunk, getAllCommercials,} from "../../store/commercialSlice";
import {useEffect} from "react";

const Commercials = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCommercialsThunk())
    }, [dispatch]);

    const commercials = useAppSelector(getAllCommercials);
    const commercialList = commercials.map(commercial =>
        <Commercial key={commercial.id} id={commercial.carModelId} src={commercial.imageName} header={commercial.name}/>
    );
    return(
        <div className={styles.wrapper}>
            {commercialList}
        </div>

    )
}

export default Commercials;