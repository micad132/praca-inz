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
            width: 150
        },
        {
            field: 'col2',
            headerName: 'Nazwa',
            width: 150
        },
        {
            field: 'col3',
            headerName: 'Cena',
            width: 150
        },
        {
            field: 'col4',
            headerName: 'Dodaj',
            renderCell: (params) => <AddingPartButton id={params.row.id} partName={params.row.col2} partPrice={params.row.col3} />,
        },
    ];

    return(
        <section className={styles.tableWrapper}>
            <h1>Dostępne części na portalu</h1>
            <h3>Kliknij przycisk aby dodać czesc do zamowienia</h3>
            <DataGrid rows={rows} columns={columns} />
        </section>
    )
}

export default  PartsTable;