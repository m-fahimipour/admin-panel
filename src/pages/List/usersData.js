import { Link } from "react-router-dom";
export const columns = [
    { field: "id", headerName: "ID", minWidth: 120, hideable: false, cellClassName:"wrapper-id-cell" },
    {
        field: "username", headerName: "UserName", minWidth: 200, flex: 1, hideable: false,
        cellClassName: () => ("wrapper-username-cell"),
        renderCell: (params) => (
            <div className="usernameCell">
                <img className="userPic" src={params.row.img} alt="" />
                <span>{params.row.username}</span>
            </div>
        )
    },
    {
        field: "email", headerName: "Email", minWidth: 250, flex: 2, hideable: false, cellClassName: () => ("wrapper-email-cell"),
        renderCell: (params) => (
            <div className="emailCell">
                <span>{params.row.email}</span>
            </div>
        )
    },
    { field: "age", headerName: "Age",headerClassName:"ageHeader", cellClassName:"wrapper-age-cell", type: "number", minWidth: 50, hideable: false },
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

export const rows = [
    { id: 1436586, img: "https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=1200", username: 'Jonddarkgalaxybrainfire', email: "Jonddarkgalaxybrainfire@gmail.com", age: 35, status: "Active" },
    { id: 2678909, img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200", username: 'Cersei', email: "Cersei@gmail.com", age: 42, status: "Expired" },
    { id: 3970457, img: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1200", username: 'Jaime', email: "Jaime@gmail.com", age: 45, status: "Blocked" },
    { id: 4454357, img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200", username: 'Arya', email: "Arya@gmail.com", age: 16, status: "Active" },
    { id: 5345799, img: "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1200", username: 'Daenerys', email: "Daenerys@gmail.com", age: 25, status: "Active" },
    { id: 6346456, img: "https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1200", username: "jeremi", email: "jeremi@gmail.com", age: 75, status: "Expired" },
    { id: 7131978, img: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1200", username: 'Ferrara', email: "Ferrara@gmail.com", age: 44, status: "Active" },
    { id: 8244568, img: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1200", username: 'Rossini', email: "Rossini@gmail.com", age: 36, status: "Expired" },
    { id: 1967892, img: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1200", username: 'Harvey', email: "Harvey@gmail.com", age: 65, status: "Blocked" },
];