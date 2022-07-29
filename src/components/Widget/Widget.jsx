import "./Widget.scss";
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
export default function Widget({type}){
    let data = {};
    switch (type) {
        case "USERES": 
            data = {
                title:"USERS",
                content:"100",
                seeDetails:"see all users",
                class:"users",
                increase:true
            }
            break;
        case "ORDERS": 
            data = {
                title:"ORDERS",
                content:"100",
                seeDetails:"View all orders",
                class:"orders",
                increase:false
            }
            break;
        case "EARNINGS": 
            data = {
                title:"EARNINGS",
                content:"100",
                seeDetails:"View net earnings",
                class:"earnings",
                increase:false
            }
            break;
        case "BALANCE": 
            data = {
                title:"BALANCE",
                content:"100",
                seeDetails:"see details",
                class:"balance",
                increase:true
            }
            break;
    
        default:
            break;
    }
    return (
        <div className="card">
            <div className="leftSide">
                <div className="title">{data.title}</div>
                <div className="content">{data.title === "EARNINGS" || data.title === "BALANCE" ? "$" : null} {data.content}</div>
                <div className="seeDetails">{data.seeDetails}</div>
            </div>
            <div className="rightSide">
                <div className={data.increase ? "positive" : " negative"}>{data.increase ? <KeyboardArrowUpOutlinedIcon/> : <KeyboardArrowDownOutlinedIcon/>} 20%</div>
                <div className={data.class}>
                    {data.title === "USERS" && <PersonOutlineOutlinedIcon/>}
                    {data.title === "ORDERS" && <ShoppingCartOutlinedIcon/>}
                    {data.title === "EARNINGS" && <PaidOutlinedIcon/>}
                    {data.title === "BALANCE" && <AccountBalanceWalletOutlinedIcon/>}
                </div>
            </div>
        </div>
    )
}