import {useAppSelector} from "../../../utils/types/hooks";
import {getAllNews} from "../../../store/newsSlice";
import NewsList from "./NewsList";

export type SingleNewsPreview = {
    title: string,
    src: string,
}

const NewsPreviewPage = () => {

    const allNews = useAppSelector(getAllNews);
    console.log('JOL', allNews);
    return(
        <section>
            {
                allNews.length > 0
                    ? <NewsList allNews={allNews} />
                    : <h2>Brak postów</h2>
            }
        </section>
    )
}

export default NewsPreviewPage;