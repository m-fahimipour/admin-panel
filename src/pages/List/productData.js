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

export const rows = [
    { id: 1436586, img: "https://m.media-amazon.com/images/I/417KKxluFGL._AC_SL1300_.jpg", productname: 'Lexar 64GB USB 3.2',description:"High Speed - With read speeds up to 100MB/s", price: "$12.99", status: "inStock" },
    { id: 2678909, img: "https://m.media-amazon.com/images/I/81G2RX66jBL._AC_SL1500_.jpg", productname: 'ASUS ROG STRIX NVIDIA GeForce RTX 3090', description: "Products with electrical plugs are designed for use in the US. ", price: "$1,299.00", status: "inStock" },
    { id: 3970457, img: "https://m.media-amazon.com/images/I/61-I0EmPj7L._AC_SL1000_.jpg", productname: 'Besign Adjustable Laptop Stand', description: "Broad Compatibility: BESIGN LS01 Laptop Stand is compatible with all laptops from 10''-15.6''", price: "$13.99", status: "unAvilable" },
    { id: 4454357, img: "https://m.media-amazon.com/images/I/71-p2FjHDvL._AC_SL1500_.jpg", productname: 'Thermaltake Massive TM Aluminum', description: "EXTREME VENTILATION: Dual 120mm temperature regulated fans allowing manual/automatic adjust the fan speed ", price: "$53.99", status: "inStock" },
    { id: 5345799, img: "https://m.media-amazon.com/images/I/81vTff6EagL._AC_SL1500_.jpg", productname: 'Logitech Trackman Marble Trackball Mouse', description: "TRACKBALL COMFORT - Sculpted ambidexterous shape supports your right or left hand and stays in one place—move the cursor without moving your arm ", price: "$25.99", status: "unAvilable" },
    { id: 6346456, img: "https://m.media-amazon.com/images/I/61QCd-9qHiL._SL1500_.jpg", productname: "FTDI USB RS232 to DB9 Communication Cable", description: "FTDI usb to db9 serial cable for APC UPS 940 0024C ", price: '$19.00', status: "unAvilable" },
    { id: 7131978, img: "https://m.media-amazon.com/images/I/71YC16-yKPL._AC_SL1500_.jpg", productname: 'MSI Gaming GeForce RTX 3090 Ti 24GB GDRR6X 384-Bit HDMI/DP', description: "Chipset: GeForce RTX 3090 Ti ", price: "$1,499.00", status: "inStock" },
    { id: 8244568, img: "https://m.media-amazon.com/images/I/61Ga1hZ5l8L._SL1001_.jpg", productname: 'GDSTIME EC Cooling Fan 80mm x 80mm x 25mm AC', description: "Package include: 1 Piece fan include fan grill and mounting screws & nuts; 1*Wire Clip; 1* US Plug Power Cord", price: "$13.99", status: "inStock" },
    { id: 1967892, img: "https://m.media-amazon.com/images/I/71QnZ3kKC4L._AC_SL1500_.jpg", productname: 'Kensington FP10 Surface Go Privacy Screen (K55900WW)', description: "Designed for the Microsoft Surface Go 1&2, this privacy screen is compatible with the touch screen", price: "$34.99", status: "unAvilable" },
];