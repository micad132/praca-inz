
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
    commercials.forEach(commercial => console.log('SRC', commercial.carModel));
    const commercialList = commercials.map(commercial =>
        <Commercial key={commercial.id} id={commercial.carModel.id} src={commercial.carModel?.imageModel.name} header={commercial.name}/>
    );
    return(
        <div className={styles.wrapper}>
            {commercialList}
        </div>

    )
}

export default Commercials;