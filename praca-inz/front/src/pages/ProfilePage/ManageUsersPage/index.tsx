import {useAppDispatch, useAppSelector} from "../../../utils/types/hooks";
import {useEffect} from "react";
import {fetchAllUsersDTOThunk, getAllUsers} from "../../../store/userSlice";
import SingleUser from "./SingleUser";

const ManageUsersPage = () => {

    const dispatch = useAppDispatch();
    const allUsers = useAppSelector(getAllUsers);
    useEffect(() => {
        dispatch(fetchAllUsersDTOThunk())
    }, [dispatch]);

    console.log('ALL USERS', allUsers);
    const usersList = allUsers.filter(user => user.userRole !== 'MODERATOR').map((user) =>
        <SingleUser  id={user.id} key={user.id} name={user.name} cityName={user.cityName}
                    postalCode={user.postalCode} userRole={user.userRole}/>
    )

    return(
        <>
            <h1>Lista zarejestrowanych uzytkownikow ({usersList.length})</h1>
            {usersList}
        </>
    )
}

export default ManageUsersPage;