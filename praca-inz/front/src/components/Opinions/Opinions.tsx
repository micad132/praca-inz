import Opinion from "./Opinion";
import styles from './Opinions.module.scss';
import Button from "@mui/material/Button";
import {useAppSelector} from "../../utils/types/hooks";
import {getLoggedUserRole} from "../../store/userSlice";
import AddingOpinion from "./AddingOpinion";
import {ReviewType} from "../../services/ReviewService";
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {useState} from "react";
import Pagination from '@mui/material/Pagination';


interface Props {
    opinions?: ReviewType[],
    carModelId?: string,
    postId?: number,
    isAddingAvailable?: boolean,
    headerTitle?: string,
    isAdminPanel: boolean,
    isCarModelScreen: boolean,
    isCarReview?: boolean,
}

const Opinions = ({opinions, carModelId, isAddingAvailable, headerTitle, isAdminPanel,isCarModelScreen, postId, isCarReview}: Props) => {

    const [isAscSorted,setIsAscSorted] = useState<boolean>(false);
    console.log('ISADMIN', isAdminPanel);
    const userRole = useAppSelector(getLoggedUserRole);

    let sortedOpinionsAsc : ReviewType[] = [];
    let sortedOpinionsDesc: ReviewType[] = [];

    if(opinions){
        sortedOpinionsAsc = opinions?.map( opinion => {
            return {...opinion, newDate: new  Date(opinion.date)}
        }).sort((a,b) => b.newDate.getTime() - a.newDate.getTime());

        sortedOpinionsDesc = opinions?.map( opinion => {
            return {...opinion, newDate: new  Date(opinion.date)}
        }).sort((a,b) => a.newDate.getTime() - b.newDate.getTime());
    }


    const opinionsToMap = isAscSorted ? [...sortedOpinionsAsc] : [...sortedOpinionsDesc];
    // let realOpinions = [];
    const realOpinions = !isAdminPanel && !isCarModelScreen
        ? [...opinionsToMap].filter(opinion => opinion.postId === postId)
        : [...opinionsToMap];
    // let realOpinions = [];
    //
    // if(!isAdminPanel && !isCarModelScreen) {
    //     realOpinions =
    // }
    // if(!isAdminPanel){
    //     if(isCarModelScreen) {
    //         realOpinions = [...opinionsToMap].filter(opinion => opinion.carModelId === carModelId)
    //     } else {
    //         realOpinions = [...opinionsToMap].filter(opinion => opinion.postId === postId)
    //     }
    // } else {
    //     realOpinions = [...opinionsToMap];
    // }

    const opinionsList = realOpinions
        ? realOpinions
            .map(opinion =>
                <Opinion key={opinion.reviewModelId} id={opinion.reviewModelId} nick={opinion.userNick}
                         isVulgar={opinion.isVulgar} rating={opinion.rate} description={opinion.description}
                         date={opinion.date} isAdminPanel={isAdminPanel} isProperScreen={true}
                         userRole={userRole} reviewHeader={opinion.reviewHeader} isCarModel={isCarModelScreen} postId={opinion.postId}
                         isCarModelReview={opinion.isCarModelReview} carModelId={opinion.carModelId}  />)
        : <h4>Brak</h4>


    const properAddingOpinion = isCarModelScreen
        ? <AddingOpinion carModelId={carModelId} userRole={userRole} isCarModelScreen={true} />
        : <AddingOpinion postId={postId} userRole={userRole}  isCarModelScreen={false} />;




    return(
        <div className={styles.opinionsWrapper}>

            <h2>{headerTitle}:</h2>
            <div className={styles.opinionsSortingDiv}>
                <h3>Sortowanie według daty</h3>
                <div onClick={() => setIsAscSorted(!isAscSorted)}>
                    {isAscSorted  ?
                        <KeyboardArrowUpIcon  /> :
                        <KeyboardArrowDownIcon />
                    }
                </div>
            </div>
            {isAddingAvailable && properAddingOpinion }
            {opinionsList}
        </div>
    )
}

export default Opinions;