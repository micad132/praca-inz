import styles from './SingleNewsPage.module.scss';
import SingleNewsPageTopInfo from "./SingleNewsPageTopInfo";
import {fetchingImagesURL} from "../../utils/GlobalVariables";
import {NewsTypeDTO} from "../../services/NewsService";

interface Props {
    singleNewsData: NewsTypeDTO
}

const SingleNewsPageInfo = ({singleNewsData} : Props) => {

    const {name} = singleNewsData.imageModel;
    const {description} = singleNewsData;
    const dataTopInfo = { author: singleNewsData.author, date: singleNewsData.date}
    return(
        <div className={styles.infoWrapper}>
            <SingleNewsPageTopInfo dataTopInfo={dataTopInfo}/>
            <div className={styles.imageDiv}>
                <img src={`${fetchingImagesURL}/${name}`} alt={'news_photo'} />
            </div>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default SingleNewsPageInfo;