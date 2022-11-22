import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ReviewList from "./ReviewList";
import { useState } from "react";


const ReviewPage = () => {

    const [checked, setChecked] = useState<boolean>(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    return(
        <>
            <FormControlLabel style={{marginTop: '15px'}} control={<Switch checked={checked} onChange={handleChange}/>} label="Pokaz tylko wulgarne komentarze" />
            <ReviewList isChecked={checked} />
        </>

    )
}

export default ReviewPage;