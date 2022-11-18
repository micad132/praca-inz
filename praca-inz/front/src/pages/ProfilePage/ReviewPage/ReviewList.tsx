import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {fetchAllReviewsForCarModels, getAllReviewsForCarModel} from "../../../store/reviewSlice";
import SingleReviewInProfilePage from "./SingleReviewInProfilePage";
import SingleVulgarReview from "./SingleVulgarReview";
import {useEffect} from "react";

interface Props {
    isChecked: boolean
}

const ReviewList = ({isChecked} : Props) => {

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchAllReviewsForCarModels())
    }, [dispatch]);

    dispatch(fetchAllReviewsForCarModels())
    const opinions = useAppSelector(getAllReviewsForCarModel);

    const opinionsList = opinions.map((opinion) => <SingleReviewInProfilePage /> );
    const opinionsListFiltered = opinions.filter((opinion) => opinion.isVulgar);
    const vulgarOpinionsList = opinionsListFiltered.map(() => <SingleVulgarReview />);
    console.log('ISCHECKED', isChecked);
    console.log(opinions);
    console.log('VULGARNE', vulgarOpinionsList);


    return (
        <>
            {isChecked ? vulgarOpinionsList : opinionsList}
        </>
    )

}

export default ReviewList;