import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ReviewList from "./ReviewList";
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const ReviewPage = () => {

    const [checked, setChecked] = useState<boolean>(false);
    const [reviewType,setReviewType] = useState<string>('ALL');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    const handleReviewTypeChange = (event: SelectChangeEvent) => {
        setReviewType(event.target.value as string);
    };

    return(
        <>
            <div style={{maxWidth: '400px', margin: '20px auto'}}>
                <h4 style={{margin: '10px 0'}}>Wybierz typ komentarzy</h4>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Typ komentarzy</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={reviewType}
                        label="Typ komentarzy"
                        onChange={handleReviewTypeChange}
                    >
                        <MenuItem value={'ALL'}>Wszystkie</MenuItem>
                        <MenuItem value={'CAR'}>Samochody</MenuItem>
                        <MenuItem value={'POST'}>Posty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <FormControlLabel style={{marginTop: '15px'}} control={<Switch checked={checked} onChange={handleChange}/>} label="Pokaz tylko wulgarne komentarze" />
            <ReviewList isChecked={checked} reviewType={reviewType} />
        </>

    )
}

export default ReviewPage;