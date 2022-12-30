import InfoWrapper from "../../components/InfoWrapper/InfoWrapper";
import SingleNews from "../../components/SingleNews";
import styles from './NewsPage.module.scss';
import AddingNews from "./AddingNews";
import {useAppDispatch, useAppSelector} from "../../utils/types/hooks";
import {getLoggedUserRole} from "../../store/userSlice";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useEffect, useState} from "react";
import {fetchAlNewsThunk, getAllNews} from "../../store/newsSlice";


const PolandInfo = () => {

    const [category, setCategory] = useState('ALL');
    const dispatch = useAppDispatch();


    useEffect(() => {
        dispatch(fetchAlNewsThunk);
    }, [dispatch]);

    const allPosts = useAppSelector(getAllNews);

    console.log('POSTY', allPosts);

    const handleChange = (event: SelectChangeEvent) => {
        setCategory(event.target.value as string);
    };


    const allNewsList = allPosts.map(post => <SingleNews description={post.description} imageSrc={post.imageModel.name} postCategory={post.postCategory}
                                                      postId={post.postId} title={post.title} />)
    const filteredList = allPosts.filter( post => post.postCategory === category)
        .map(post => <SingleNews description={post.description} imageSrc={post.imageModel.name} postCategory={post.postCategory}
                            postId={post.postId} title={post.title} />)

    const userRole = useAppSelector(getLoggedUserRole);

    const postLength = category === 'ALL'
        ? allNewsList.length
        : filteredList.length;


    return (
        <div className={styles.wrapper}>
            <div className={styles.centralInfo}>
                <h1 className={styles.title}>Motoryzacyjne posty</h1>
                {userRole === 'USER'
                    ? <AddingNews />
                    : <h2>Musisz miec role USER aby dodac post</h2>
                }
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Kategoria</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        className={styles.select}
                        value={category}
                        inputProps={{ "data-testid": "category-select" }}
                        label="Kategoria"
                        onChange={handleChange}
                    >
                        <MenuItem value={'ALL'}>Wszystkie</MenuItem>
                        <MenuItem value={'POLAND'}>Polska</MenuItem>
                        <MenuItem value={'EUROPE'}>Europa</MenuItem>
                        <MenuItem value={'WORLD'}>Świat</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <h2 style={{marginTop: '30px'}}>Liczba postów na portalu w danej kategorii({postLength})</h2>
            <div data-testid={'container'}>
                {category === 'ALL'
                    ? allNewsList
                    : filteredList
                }
            </div>
        </div>
    )
}

export default PolandInfo;