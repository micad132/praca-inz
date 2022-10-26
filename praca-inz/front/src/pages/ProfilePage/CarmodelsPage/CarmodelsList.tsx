import {CarModelType} from "../../../services/CarModelService";
import SingleCarmodel from "./SingleCarmodel";
import styles from './../../../utils/styles/Utils.module.scss';

interface Props {
    carModels: CarModelType[]
}

const CarmodelsList = ({carModels} : Props) => {

    const carsList = carModels.map(({name}) =>
         <SingleCarmodel title={name}/>
    )
    return(
        <div className={styles.previewWrapper}>
            {carsList}
        </div>
    )
}

export default CarmodelsList;