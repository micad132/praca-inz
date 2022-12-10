import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState } from "react";
import styles from './ManageUsersPage.module.scss';
import {useAppDispatch} from "../../../utils/types/hooks";
import {updateUserRoleThunk} from "../../../store/userSlice";
import {toast} from "react-toastify";

interface Props {
    id: number,
    name: string,
    cityName: string,
    postalCode: string,
    userRole: string
}

const SingleUser = ({id,name,cityName,postalCode,userRole} : Props) => {

    const [role, setRole] = useState<string>(userRole);
    const [isShowButton, setIsShowButton] = useState<boolean>(false);
    const dispatch = useAppDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
        setIsShowButton(true);
    };

    const changeUserRole = () => {
        const data = {id,role}
        dispatch(updateUserRoleThunk(data))
        toast.success('Rola zmieniona!', {
            position: "top-left",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setIsShowButton(false);

    }

    return(
        <div className={styles.singleUserWrapper}>
            <div className={styles.content}>
                <h3>{name}</h3>
                <p>Nazwa miasta: {cityName}</p>
                <p>Kod pocztowy: {postalCode}</p>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Rola:</InputLabel>
                    <Select
                        className={styles.select}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={'USER'}>USER</MenuItem>
                        <MenuItem value={'ADMIN'}>ADMIN</MenuItem>
                    </Select>
                    {isShowButton &&
                        <Button
                            variant="contained"
                            onClick={changeUserRole}
                        >
                        Zmien role
                    </Button>}
                </FormControl>
            </div>
        </div>
    )
}

export default  SingleUser;