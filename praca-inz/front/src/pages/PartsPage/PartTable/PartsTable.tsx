import {DataGrid, GridColDef, GridRowsProp} from '@mui/x-data-grid';
import Button from '@mui/material/Button';
import styles from '../PartsPage.module.scss';
import AddingPartButton from "./AddingPartButton";

const rows: GridRowsProp = [
    { id: 1, col1: 'Hello', col2: 'World' },
    { id: 2, col1: 'DataGridPro', col2: 'is Awesome' },
    { id: 3, col1: 'MUI', col2: 'is Amazing' },
];



interface Props {
    rows: any
}

const PartsTable = ({rows} : Props) => {


    const columns: GridColDef[] = [
        {
            field: 'col1',
            headerName: 'ID',
            maxWidth: 200,

        },
        {
            field: 'col2',
            headerName: 'Nazwa',
            maxWidth: 200,
        },
        {
            field: 'col3',
            headerName: 'Cena',
            maxWidth: 200,
        },
        {
            field: 'col4',
            headerName: 'Dodaj',
            maxWidth: 200,
            renderCell: (params) => <AddingPartButton id={params.row.id} partName={params.row.col2} partPrice={params.row.col3} />,
        },
    ];

    const tableStyles = {
        maxWidth: '1000px',
        margin: '0 auto',
    }

    return(
        <section className={styles.tableWrapper}>
            <h1>Dostępne części na portalu ({rows.length})</h1>
            <h3>Kliknij przycisk aby dodać czesc do zamowienia</h3>
            <DataGrid rows={rows} columns={columns} sx={tableStyles} />
        </section>
    )
}

export default  PartsTable;