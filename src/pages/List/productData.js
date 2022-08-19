import { Link } from "react-router-dom";
export const columns = [
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
                <div className="delete-button">
                    Delete
                </div>
            </div>
        )
    }
];