import styles from './SingleNewsPage.module.scss';
import SingleNewsPageTopInfo from "./SingleNewsPageTopInfo";

const SingleNewsPageInfo = () => {

    return(
        <div className={styles.infoWrapper}>
            <SingleNewsPageTopInfo />
            <div className={styles.imageDiv}>
                <img src={`https://picsum.photos/1400/500`} />
            </div>
            <p className={styles.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec gravida
                iaculis nisi ac facilisis. Nullam a dolor et enim eleifend consequat. Sed posuere augue urna, in luctus
                enim imperdiet nec. Maecenas vitae nisl ac lorem pharetra interdum vitae sed enim. In in blandit enim,
                a cursus nunc. Proin nec sapien ut felis tincidunt volutpat ut nec tortor. Sed euismod aliquet dapibus.
                Praesent rhoncus elementum ornare. Sed eget ante mollis, aliquet nunc et, consectetur sapien. Nam vel
                nunc in massa bibendum tincidunt. Pellentesque accumsan lacus eu sem hendrerit, ac consectetur urna euismod.
                Ut vitae hendrerit sem. Quisque ut massa id urna.
            </p>
        </div>
    )
}

export default SingleNewsPageInfo;