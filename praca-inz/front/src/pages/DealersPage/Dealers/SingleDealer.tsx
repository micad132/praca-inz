import styles from '../Dealers.module.scss';
import {DealerInfoType} from "./DealersMap";



interface Props {

    dealerInfo: DealerInfoType
    setDealerInfo : (data : DealerInfoType) => void
}

const SingleDealer = ({ dealerInfo,setDealerInfo} : Props) => {

    return(
        <>
            <div className={styles.singleDealer} onClick={() => setDealerInfo(dealerInfo)}>
                <img src={dealerInfo.img} alt={'dummy dealer'}/>
                <h3>{dealerInfo.cityName}</h3>
            </div>

        </>
    )
}

export default SingleDealer;
