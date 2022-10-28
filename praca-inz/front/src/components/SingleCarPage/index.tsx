import {useParams} from "react-router-dom";
import SingleCarImage from "./SingleCarImage";
import SingleCarDetails from "./SingleCarDetails";
import CommercialsList from "../../pages/ProfilePage/CommercialsPage/CommercialsList";
import Opinions from "../Opinions/Opinions";


const dummyOpinions = [
    {
        id: 1,
        nick: 'micad132',
        rating: 4.5,
        description: 'NIEZLE AUTKO KURDE',
    },
    {
        id: 2,
        nick: 'noscanx',
        rating: 2.5,
        description: 'calkiem ladne',
    },
    {
        id: 3,
        nick: 'repix',
        rating: 1.7,
        description: 'nie podoba sie dla mnie',
    },

]

const SingleCarPage = () => {

    const { carId } = useParams();
    console.log( carId);
    return(
        <div>
            <SingleCarImage />
            <SingleCarDetails />
            <Opinions dummyOpinions={dummyOpinions}/>
        </div>
    )
}

export default SingleCarPage;