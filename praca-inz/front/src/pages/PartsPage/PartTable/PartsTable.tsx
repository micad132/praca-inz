import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import styles from '../PartsPage.module.scss';
import AddingPartButton from "./PartTableButtons/AddingPartButton";
import EditingPartButton from "./PartTableButtons/EditingPartButton";
import DeletingPartButton from "./PartTableButtons/DeletingPartButton";



interface Props {
    rows: any,
    userRole: string,
}

const PartsTable = ({rows,userRole} : Props) => {

    const isButtonsHidden = userRole === 'MODERATOR';
    const isAddingButtonHidden = userRole === 'USER';

    const columns: GridColDef[] = [
        {
            field: 'col1',
            headerName: 'ID',
            maxWidth: 200,
            // hide: true,

        },
        {
            field: 'col2',
            headerName: 'Nazwa',
        },
        {
            field: 'col3',
            headerName: 'Cena',
            maxWidth: 200,
        },
        {
            field: 'col4',
            headerName: 'Dodaj',
            hide: !isAddingButtonHidden,
            renderCell: (params) => <AddingPartButton id={params.row.id} partName={params.row.col2} partPrice={params.row.col3} />,
        },
        {
            field: 'col5',
            headerName: 'Edytuj',
            width: 120,
            hide: !isButtonsHidden,
            renderCell: (params) => <EditingPartButton id={params.row.id} partName={params.row.col2} partPrice={params.row.col3} />,
        },
        {
            field: 'col6',
            headerName: 'Usuń',
            hide: !isButtonsHidden,
            renderCell: (params) => <DeletingPartButton id={params.row.id} />,
        },
    ];

    const tableStyles = {
        maxWidth: '1000px',
        margin: '0 auto',
    }
    
    const addingPartToOrderText = userRole === 'USER'
        ? <h3>Kliknij przycisk ,,Dodaj" aby dodać czesc do zamowienia</h3>
        : <h3 style={{color: 'red'}}>Aby dodac część do zamówienia zaloguj się na konto użytkownika</h3>

    return(
        <section className={styles.tableWrapper}>
            <h1>Dostępne części na portalu ({rows.length})</h1>
            {addingPartToOrderText}
            {!isButtonsHidden && <h3 style={{color: 'red'}}>Aby usunąć lub edytować część zaloguj się na konto moderatora</h3>}
            <DataGrid rows={rows} columns={columns} sx={tableStyles} />
        </section>
    )
}

export default  PartsTable;