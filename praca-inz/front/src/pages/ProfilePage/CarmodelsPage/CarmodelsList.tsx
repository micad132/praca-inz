import {CarModelType} from "../../../services/CarModelService";
import SingleCarmodel from "./SingleCarmodel";
import styles from './../../../utils/styles/Utils.module.scss';
import SinglePreviewItemWrapper from "../../../components/Wrappers/SinglePreviewItemWrapper";

interface Props {
    carModels: CarModelType[]
}

const CarmodelsList = ({carModels} : Props) => {

    const carsList = carModels.map((car) =>
        <SinglePreviewItemWrapper id={car.carModelId} title={car.name} src={car.imageModel.name} isCar={true} />
    )
    return(
        <div className={styles.previewWrapper}>
            {carsList}
        </div>
    )
}

export default CarmodelsList;