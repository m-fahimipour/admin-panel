import "./List.scss";
import { Grid, Pagination } from '@mui/material';
import {createTheme,ThemeProvider} from "@mui/material/styles";
import {
    DataGrid,
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector
} from '@mui/x-data-grid';
import { Link } from "react-router-dom";
import {useLocation} from "react-router";


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

export default function TableUsers({columns,rows}) {
    const location = useLocation();
    const inUsersLoaction = location.pathname.includes("users");
    return (
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
                <div className="btn-add-user"><Link to={inUsersLoaction ? "newuser" : "newproduct"}><span>{inUsersLoaction ? "Add New User" : "Add New Product"}</span></Link></div>
            </Grid>
        </Grid>

    )
}