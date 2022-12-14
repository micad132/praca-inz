import SingleNewsPageInfo from "./SingleNewsPageInfo";
import styles from './SingleNewsPage.module.scss';
import SimilarNews from "../SimilarNews";
import Opinions from '../Opinions/Opinions';
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {useEffect} from "react";
import {fetchNewsByIdThunk, getAllNews, getNewsData} from "../../store/newsSlice";

const SingleNewsPage = () => {

    const { postId } = useParams();
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(fetchNewsByIdThunk(Number(postId)));
    }, [dispatch, postId]);

    const postData = useAppSelector(getNewsData);
    const allPosts = useAppSelector(getAllNews);

    const similarNews = allPosts
        .filter( post => post.postCategory === postData.postCategory)
        .filter(post => post.postId !== postData.postId)
        .map(post => (
            {
                postId: post.postId,
                title: post.title,
                author: post.author,
                date: post.date,
                postCategory: post.postCategory,
                imageSrc: post.imageModel.name,
            }
        ))


    console.log('POSTDATA', postData);


    return(
        <section className={styles.wrapper}>
            <h1 className={styles.header}>{postData.title}</h1>
            <SingleNewsPageInfo  singleNewsData={postData}/>
            <SimilarNews similarNews={similarNews}/>
            <Opinions headerTitle={'Lista komentarzy'} isAdminPanel={false} />
            {/*<OtherNews />*/}
        </section>
    )
}

export default  SingleNewsPage;