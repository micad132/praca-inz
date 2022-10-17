import React, {useState} from "react";
import SingleDealer from "./SingleDealer";
import styles from '../Dealers.module.scss';
import DealersInfo from "./DealersInfo";

const dummyDealersArray = [
    {
        img: 'https://picsum.photos/400',
        cityName: 'Kielce',
        year: 1992,
        street: 'Sosnowa 3a',
        director: 'Miro Dak',
        additionalInfo: 'Dodatkowe informacje: Jeden z pierwszych salonow, nasz oficjalny parnter w Kielcach',
        id: 1
    },
    {
        img: 'https://picsum.photos/400',
        cityName: 'Poznan',
        year: 2003,
        street: 'Kolejowa 26',
        director: 'Janek Paw',
        additionalInfo: 'Dodatkowe informacje: Jeden z pierwszych salonow, nasz oficjalny parnter w Kielcach',
        id: 2
    },
    {
        img: 'https://picsum.photos/400',
        cityName: 'Warszawa',
        year: 2020,
        street: 'poznanska 27',
        director: 'wieczyslaw w',
        additionalInfo: 'Dodatkowe informacje: Jeden z pierwszych salonow, nasz oficjalny parnter w Kielcach',
        id: 3
    },
    {
        img: 'https://picsum.photos/400',
        cityName: 'Krakow',
        year: 1839,
        street: 'halabardowa 13',
        director: 'pan kaziu',
        additionalInfo: 'Dodatkowe informacje: Jeden z pierwszych salonow, nasz oficjalny parnter w Kielcach',
        id: 4
    }
]

const initialDealerInfo = {

    img: '',
    cityName: '',
    year: 1,
    street:'',
    director: '',
    additionalInfo: '',
    id: 1

}

export type DealerInfoType = {

    img: string
    cityName: string,
    year: number,
    street: string,
    director: string,
    additionalInfo: string,
    id: number
}

const DealersMap = () => {

    // const [isClicked,setIsClicked] = useState<boolean>(false);
    const [dealerInfo,setDealerInfo] = useState<DealerInfoType>(initialDealerInfo);
    const dealers = dummyDealersArray.map((dealer) =>
        <SingleDealer
         dealerInfo={dealer} setDealerInfo={setDealerInfo} key={dealer.id}
        />)
    return(
        <>
            <div className={styles.dealersWrapper}>
                {dealers}
            </div>
            <DealersInfo dealerInfo={dealerInfo}/>
        </>
    )
}

export default DealersMap;
