import SingleNews from "../../../components/SingleNews";
import PreviewWrapper from "../../../components/Wrappers/PreviewWrapper";
import {NewsTypeDTO} from "../../../services/NewsService";
import SinglePreviewItemWrapper from "../../../components/Wrappers/SinglePreviewItemWrapper";



interface Props {
    allNews: NewsTypeDTO[]
}

const NewsList = ({allNews} : Props) => {

    const newsPreview = allNews.map(news => <SinglePreviewItemWrapper src={news.imageModel.name} title={news.title} isCar={false} id={news.postId} />)
    return(
        <PreviewWrapper>
            {newsPreview}
        </PreviewWrapper>
    )
}

export default  NewsList;