import { useContextState, useDispatch } from "../../context/contextApi";
import { Link } from "react-router-dom";
import { Grid, Pagination } from '@mui/material';
import {createTheme,ThemeProvider} from "@mui/material/styles";
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector
} from '@mui/x-data-grid';

function CostumPagination() {
    const theme = createTheme({
        palette: {
            primary: {
                main: "#9b59b6",
                dark: "#8e44ad",
                light: "#a29bfe"
            }
        }
    })
    const apiRef = useGridApiContext();
    const page = useGridSelector(apiRef, gridPageSelector);
    const pageCount = useGridSelector(apiRef, gridPageCountSelector);

    return (
        <ThemeProvider theme={theme}>
            <Pagination
                color="primary"
                count={pageCount}
                page={page + 1}
                onChange={(event, value) => apiRef.current.setPage(value - 1)}
            />
        </ThemeProvider>
    );
}

export default function Products(){
    const dispatch = useDispatch();
    function handleDeleteProduct(id){
        dispatch({
            type:"products/DELETE",
            payload:{
                id
            }
        })
    }
    const contextState = useContextState();
    const rows = [];
    contextState.entites.products.allIds.forEach(id => {
        rows.push(contextState.entites.products.byId[id]);
    });

    const columns = [
        { field: "id", headerName: "ID", minWidth: 120, hideable: false, cellClassName:"wrapper-id-cell" },
        {
            field: "productname", headerName: "Product Name", minWidth: 200, flex: 1, hideable: false,
            cellClassName: () => ("wrapper-username-cell"),
            renderCell: (params) => (
                <div className="usernameCell">
                    <img className="userPic" src={params.row.img} alt="" />
                    <span>{params.row.productname}</span>
                </div>
            )
        },
        {
            field: "description", headerName: "Description", minWidth: 250, flex: 2, hideable: false, cellClassName: () => ("wrapper-email-cell"),
            renderCell: (params) => (
                <div className="emailCell">
                    <span>{params.row.description}</span>
                </div>
            )
        },
        { field: "price", headerName: "Price", cellClassName:"wrapper-age-cell", minWidth: 50, hideable: false,sortable:false },
        {
            field: "status", headerName: "Status", minWidth: 150, hideable: false, disableColumnMenu: true,
            cellClassName: "wrapper-status-cell",
            renderCell: (params) => (
                <div className={`statusCell ${params.row.status}`}>
                    <p>{params.row.status}</p>
                </div>
            )
        },
        {
            field: "action", headerName: "Action", minWidth: 150, sortable: false, hideable: false, filterable: false, disableColumnMenu: true,
            renderCell: (params) => (
                <div className="actionCell">
                    <div className="view-button">
                        <Link to={`${params.row.id}`} className="viewLink">View</Link>
                    </div>
                    <div className="delete-button" onClick={() => handleDeleteProduct(params.row.id)}>
                        Delete
                    </div>
                </div>
            )
        }
    ];


    return(
        <Grid container columns={12} height={474} margin={"1.5rem"} width={"auto"}>
            <Grid item xs={12} className="usersTable">
                <DataGrid
                    rows={rows}
                    columns={columns}
                    pageSize={7}
                    rowsPerPageOptions={[7]}
                    disableSelectionOnClick
                    components={
                        {
                            Pagination: CostumPagination
                        }
                    }
                />
                <div className="btn-add-user"><Link to="newproduct"><span>Add New Product</span></Link></div>
            </Grid>
        </Grid>
    )
}