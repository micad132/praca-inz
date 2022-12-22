import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {
    fetchAllReviewsForCarModels, fetchAllReviewsForNews,
    fetchingReviewsForNews,
    getAllReviewsForCarModel, getReviewsForCarModel, getReviewsForNews
} from "../../../store/reviewSlice";
import {useEffect, useState} from "react";
import Opinion from "../../../components/Opinions/Opinion";
import {getLoggedUserRole} from "../../../store/userSlice";
import Opinions from "../../../components/Opinions/Opinions";
import Pagination from "@mui/material/Pagination";
import {ReviewType} from "../../../services/ReviewService";

interface Props {
    isChecked: boolean,
    reviewType: string,
}

const ReviewList = ({isChecked,reviewType} : Props) => {

    const dispatch = useAppDispatch();
    const [pageNumber,setPageNumber] = useState<number>(0);

    useEffect(() => {
        dispatch(fetchAllReviewsForCarModels())
        dispatch(fetchAllReviewsForNews())
    }, [isChecked,dispatch]);
    const opinions = useAppSelector(getAllReviewsForCarModel);
    const newsOpinions = useAppSelector(getReviewsForNews);
    const userRole = useAppSelector(getLoggedUserRole);

    const properOpinions = reviewType === 'CAR'
        ? opinions
        : newsOpinions;

    const sortedOpinions = properOpinions.map( opinion => {
        return {...opinion, newDate: new  Date(opinion.date)}
    }).sort((a,b) => b.newDate.getTime() - a.newDate.getTime());

    // const opinionsList = sortedOpinions.map((opinion) =>
    //     <Opinion key={opinion.reviewModelId} nick={opinion.userNick}
    //                                rating={opinion.rate} description={opinion.description}
    //                                date={opinion.date} id={opinion.reviewModelId} isVulgar={opinion.isVulgar}
    //                                isProperScreen={false} isAdminPanel={true} userRole={userRole} carName={opinion.carName}
    //     /> );
    const opinionsListFiltered = properOpinions.filter((opinion) => opinion.isVulgar);

    const offSet = pageNumber * 5;

    const allOpinions = [...opinions,...newsOpinions];
    console.log('PRZED SLICEM', allOpinions);
    const slicedArray = [...allOpinions].slice(offSet,offSet + 5);
    console.log('PO SLICE', slicedArray);
    // const allOpinions = [...opinions,...newsOpinions];
    const allOpinionsFiltered = allOpinions.filter((opinion) => opinion.isVulgar);
    // const vulgarOpinionsList = opinionsListFiltered.map((opinion) =>
    //     <Opinion key={opinion.reviewModelId} nick={opinion.userNick}
    //              rating={opinion.rate} description={opinion.description}
    //              date={opinion.date} id={opinion.reviewModelId} isVulgar={opinion.isVulgar}
    //              isProperScreen={true} isAdminPanel={true} userRole={userRole} carName={opinion.carName}
    //     /> );

    const handleChange = (e : any,value : any) => {
        console.log(value);
        setPageNumber(value);
    }

    let opinionsNew : ReviewType[] = [];
    if(reviewType === 'ALL'){
        opinionsNew = [...opinions,...newsOpinions];
    } else if( reviewType === 'CAR') {
        opinionsNew = [...opinions];
    } else if( reviewType === 'POST') {
        opinionsNew = [...newsOpinions];
    }

    const opinionsListAfterFiltering = isChecked
        ? [...opinionsNew].filter((opinion) => opinion.isVulgar)
        : [...opinionsNew];


    // const properContent = reviewType === 'CAR'
    //     ? isChecked
    //         ? <Opinions  opinions={opinionsListFiltered} isAddingAvailable={false}
    //                      headerTitle={'Lista komentarzy'} isAdminPanel={true} isCarModelScreen={false} isCarReview={true} />
    //         : <Opinions  opinions={sortedOpinions} isAddingAvailable={false}
    //                      headerTitle={'Lista komentarzy'} isAdminPanel={true} isCarModelScreen={false} isCarReview={true} />
    //     : reviewType === 'POST'
    //         ? isChecked
    //             ?
    //             <Opinions  opinions={opinionsListFiltered} isAddingAvailable={false}
    //                          headerTitle={'Lista komentarzy'} isAdminPanel={true} isCarModelScreen={false} isCarReview={false} />
    //             : <Opinions  opinions={sortedOpinions} isAddingAvailable={false}
    //                          headerTitle={'Lista komentarzy'} isAdminPanel={true} isCarModelScreen={false} isCarReview={false} />
    //         : reviewType === 'ALL'
    //             ? isChecked
    //                 ? <Opinions  opinions={allOpinionsFiltered} isAddingAvailable={false}
    //                            headerTitle={'Lista komentarzy'} isAdminPanel={true} isCarModelScreen={false} isCarReview={false} />
    //                 : <Opinions  opinions={allOpinions} isAddingAvailable={false}
    //                              headerTitle={'Lista komentarzy'} isAdminPanel={true} isCarModelScreen={false} isCarReview={false} />
    //             : null;



    return (
        <div>
            <Opinions  opinions={opinionsListAfterFiltering} isAddingAvailable={false}
                       headerTitle={'Lista komentarzy'} isAdminPanel={true} isCarModelScreen={false} isCarReview={true} />
            <Pagination count={5} onChange={handleChange} />
        </div>
    )

}

export default ReviewList;