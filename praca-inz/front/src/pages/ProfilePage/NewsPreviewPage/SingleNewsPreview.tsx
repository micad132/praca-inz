import {fetchingImagesURL} from "../../../utils/GlobalVariables";

interface Props {
    title: string,
    src: string,
}

const SingleNewsPreview = ({title,src} : Props) => {

    return(
        <div>
            <img src={`${fetchingImagesURL}/${src}`} alt={'carmodel'} />
            <p>{title}</p>
        </div>
    )
}

export default  SingleNewsPreview;