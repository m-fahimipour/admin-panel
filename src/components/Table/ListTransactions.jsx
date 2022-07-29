import "./ListTransactions.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const dataTable = {
    byId: {
        1143155: { id: 1143155, product: { img: "https://assets.mmsrg.com/isr/166325/c1/-/ASSET_MMS_88477504/fee_325_225_png", name: "Acer Nitro 5" }, customer: "John Smith", date: "1 March", amount: "784 $", payMethod: "Cash on Delivery", status: "Approved" },
        1143215: { id: 1143215, product: { img: "http://cdn.shopify.com/s/files/1/0029/5849/1748/products/PS5-Console_1200x1200.png?v=1648135334", name: "Playstation 5" }, customer: "Michael Doe", date: "12 April", amount: "900 $", payMethod: "Online", status: "Pending" },
        2543155: { id: 2543155, product: { img: "https://www.slimtronics.nl/wp-content/uploads/2022/03/s101-5-600x470.jpg", name: "Redragon S101" }, customer: "John Smith", date: "15 March", amount: "35 $", payMethod: "Cash on Delivery", status: "Pending" },
        7563155: { id: 7563155, product: { img: "https://www.notebookcheck.nl/uploads/tx_nbc2/71-zGCPg_ZL._AC_SX466_.jpg", name: "Razer Blade 15" }, customer: "Harold Smith", date: "21 March", amount: "920 $", payMethod: "Online", status: "Approved" }
    },
    allIds: [1143155, 1143215, 2543155, 7563155]
}

export default function ListTransactions({title,customer}) {
    return (
        <div className="table-container">
            <p className="table-title">{title}</p>
            <div className="table-body">
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell align="center" className="table-head">Tracing ID</TableCell>
                                <TableCell align="center" className="table-head">Product</TableCell>
                                {customer && <TableCell align="center" className="table-head">Customer</TableCell>}
                                <TableCell align="center" className="table-head">Date</TableCell>
                                <TableCell align="center" className="table-head">Amount</TableCell>
                                <TableCell align="center" className="table-head">Payment Method</TableCell>
                                <TableCell align="center" className="table-head">Status</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {dataTable.allIds.map((id) => (
                                <TableRow
                                    key={id}
                                    sx={{ '&:last-child td': { border: 0 } }}
                                >
                                    <TableCell align="center">{id}</TableCell>
                                    <TableCell align="center">
                                        <div className="product-cell">
                                            <img src={`${dataTable.byId[id].product.img}`} alt="" />
                                            {dataTable.byId[id].product.name}
                                        </div>
                                    </TableCell>
                                    {customer && <TableCell align="center">{dataTable.byId[id].customer}</TableCell>}
                                    <TableCell align="center">{dataTable.byId[id].date}</TableCell>
                                    <TableCell align="center">{dataTable.byId[id].amount}</TableCell>
                                    <TableCell align="center">{dataTable.byId[id].payMethod}</TableCell>
                                    <TableCell align="center" className="status-cell">
                                        <div className={`${dataTable.byId[id].status === "Pending" ? "pending" : "approved"}`}>{dataTable.byId[id].status}</div>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </div>
    )
}