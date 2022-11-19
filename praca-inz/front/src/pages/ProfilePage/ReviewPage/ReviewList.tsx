import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {fetchAllReviewsForCarModels, getAllReviewsForCarModel} from "../../../store/reviewSlice";
import SingleReviewInProfilePage from "./SingleReviewInProfilePage";
import SingleVulgarReview from "./SingleVulgarReview";
import {useEffect} from "react";
import Opinion from "../../../components/Opinions/Opinion";

interface Props {
    isChecked: boolean
}

const ReviewList = ({isChecked} : Props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllReviewsForCarModels())
    }, [isChecked]);
    const opinions = useAppSelector(getAllReviewsForCarModel);

    const sortedOpinions = opinions.map( opinion => {
        return {...opinion, newDate: new  Date(opinion.date)}
    }).sort((a,b) => b.newDate.getTime() - a.newDate.getTime());

    const opinionsList = sortedOpinions.map((opinion) =>
        <Opinion key={opinion.reviewModelId} nick={opinion.userNick}
                                   rating={opinion.rate} description={opinion.description}
                                   date={opinion.date} id={opinion.reviewModelId} isVulgar={opinion.isVulgar}
                                   isProperScreen={false} isAdminPanel={false}
        /> );
    const opinionsListFiltered = opinions.filter((opinion) => opinion.isVulgar);
    const vulgarOpinionsList = opinionsListFiltered.map((opinion) =>
        <Opinion key={opinion.reviewModelId} nick={opinion.userNick}
                 rating={opinion.rate} description={opinion.description}
                 date={opinion.date} id={opinion.reviewModelId} isVulgar={opinion.isVulgar}
                 isProperScreen={true} isAdminPanel={true}
        /> );


    return (
        <div>
            {isChecked ? vulgarOpinionsList : opinionsList}
        </div>
    )

}

export default ReviewList;