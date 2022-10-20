import styles from '../Dealers.module.scss';
import {CompanyType} from "../../../services/CompanyService";
import {fetchingImagesURL} from "../../../utils/GlobalVariables";




interface Props {

    dealerInfo: CompanyType
    setDealerInfo : (data : CompanyType) => void
}

const SingleDealer = ({ dealerInfo,setDealerInfo} : Props) => {

    console.log('DEALERINFO', dealerInfo);
    console.log(`${fetchingImagesURL}/${dealerInfo.imageModel.image}}`);
    return(
        <>
            <div className={styles.singleDealer} onClick={() => setDealerInfo(dealerInfo)}>
                <img src={`${fetchingImagesURL}/${dealerInfo.imageModel.name}`} alt={'dummy dealer'}/>
                <h3>{dealerInfo.cityName}</h3>
            </div>

        </>
    )
}

export default SingleDealer;
