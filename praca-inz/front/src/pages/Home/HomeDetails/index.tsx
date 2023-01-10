import styles from '../Home.module.scss';
import SingleDetail from "./SingleDetail";
import {useAppSelector} from "../../../utils/types/hooks";
import {getAllCarModels, getAllCommercials} from "../../../store/carModelSlice";
import {getAllParts} from "../../../store/partSlice";
import {getAllOrders} from "../../../store/orderSlice";
import {getAllNews} from "../../../store/newsSlice";
import {getAllReviewsForCarModel, getReviewsForNews} from "../../../store/reviewSlice";

const HomeDetails = () => {

    const cars = useAppSelector(getAllCarModels);
    const commercials = useAppSelector(getAllCommercials);
    const parts = useAppSelector(getAllParts);
    const orders = useAppSelector(getAllOrders);
    const posts = useAppSelector(getAllNews);
    const carsReviews = useAppSelector(getAllReviewsForCarModel);
    const postReviews = useAppSelector(getReviewsForNews)

    const postsLength = carsReviews.length + postReviews.length;
    return(
        <section className={styles.homeDetailsWrapper}>
            <h2>Na portalu znajduje się:</h2>
            <div className={styles.infoDetails}>
                <SingleDetail title={'Postów'} amount={posts.length} />
                <SingleDetail title={'Samochodów'} amount={cars.length} />
                <SingleDetail title={'Reklam'} amount={commercials.length} />
                <SingleDetail title={'Komentarzy'} amount={postsLength} />
                <SingleDetail title={'Części'} amount={parts.length} />
                <SingleDetail title={'Zamowień'} amount={orders.length} />
            </div>
        </section>
    )
}

export default HomeDetails;