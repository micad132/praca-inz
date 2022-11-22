import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {fetchAllReviewsForCarModels, getAllReviewsForCarModel} from "../../../store/reviewSlice";
import {useEffect} from "react";
import Opinion from "../../../components/Opinions/Opinion";
import {getLoggedUserRole} from "../../../store/userSlice";
import Opinions from "../../../components/Opinions/Opinions";

interface Props {
    isChecked: boolean
}

const ReviewList = ({isChecked} : Props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllReviewsForCarModels())
    }, [isChecked]);
    const opinions = useAppSelector(getAllReviewsForCarModel);
    const userRole = useAppSelector(getLoggedUserRole);

    const sortedOpinions = opinions.map( opinion => {
        return {...opinion, newDate: new  Date(opinion.date)}
    }).sort((a,b) => b.newDate.getTime() - a.newDate.getTime());

    const opinionsList = sortedOpinions.map((opinion) =>
        <Opinion key={opinion.reviewModelId} nick={opinion.userNick}
                                   rating={opinion.rate} description={opinion.description}
                                   date={opinion.date} id={opinion.reviewModelId} isVulgar={opinion.isVulgar}
                                   isProperScreen={false} isAdminPanel={false} userRole={userRole} carName={opinion.carName}
        /> );
    const opinionsListFiltered = opinions.filter((opinion) => opinion.isVulgar);
    const vulgarOpinionsList = opinionsListFiltered.map((opinion) =>
        <Opinion key={opinion.reviewModelId} nick={opinion.userNick}
                 rating={opinion.rate} description={opinion.description}
                 date={opinion.date} id={opinion.reviewModelId} isVulgar={opinion.isVulgar}
                 isProperScreen={true} isAdminPanel={true} userRole={userRole} carName={opinion.carName}
        /> );


    return (
        <div>
            {isChecked ? <Opinions  opinions={opinionsListFiltered} isAddingAvailable={false} headerTitle={'Lista wszystkich komentarzy'} /> :
                <Opinions  opinions={sortedOpinions} isAddingAvailable={false} headerTitle={'Lista wszystkich komentarzy'} />}

        </div>
    )

}

export default ReviewList;