import React, {useState, useEffect} from "react";
import SingleDealer from "./SingleDealer";
import styles from '../Dealers.module.scss';
import DealersInfo from "./DealersInfo";
import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {fetchCompaniesThunk, getAllCompanies} from "../../../store/companySlice";
import {CompanyType} from "../../../services/CompanyService";


const initialDealerInfo = {
    img: '',
    cityName: '',
    yea_r: '1',
    streetName:'',
    directorName: '',
    additionalInfo: '',
    id: 1,
    imageModel: {
        id: 1,
        image: '',
        name: '',
        type: ''
    }
}

// export interface DealerInfoType extends CompanyType   {
//
//
// }

const DealersMap = () => {

    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchCompaniesThunk());
    }, [dispatch]);
    const companies = useAppSelector(getAllCompanies);
    console.log('COMPANIES', companies);
    // const [isClicked,setIsClicked] = useState<boolean>(false);
    const [dealerInfo,setDealerInfo] = useState<CompanyType>(initialDealerInfo);
    const dealers = companies.map((dealer) =>
        <SingleDealer
         dealerInfo={dealer} setDealerInfo={setDealerInfo} key={dealer.id}
        />)
    return(
        <>
            <div className={styles.dealersWrapper}>
                {dealers.length > 0 ?
                    dealers :
                    <h1>Obecnie nie wspolpracujemy z nikim</h1>}
            </div>
            {dealers.length > 0 && <DealersInfo dealerInfo={dealerInfo}/>}
        </>
    )
}

export default DealersMap;
