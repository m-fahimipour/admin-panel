import "./Sidebar.scss";
import { Link } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import DeliveryDiningOutlinedIcon from '@mui/icons-material/DeliveryDiningOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import MonitorHeartOutlinedIcon from '@mui/icons-material/MonitorHeartOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
export default function Sidebar() {
    return (
        <aside className="wrapperSidebar">
            <div className="logo">
                <span>Lamadmin</span>
            </div>
            <div className="links">
                <ul>
                    <p>MAIN</p>
                    <li><DashboardIcon /><Link to="/">Dashboard</Link></li>
                    <p>LIST</p>
                    <li><PersonOutlineOutlinedIcon /><Link to="users">Users</Link></li>
                    <li><StoreOutlinedIcon /><Link to="products">Products</Link></li>
                    <li><CreditCardOutlinedIcon /><Link to="">Orders</Link></li>
                    <li><DeliveryDiningOutlinedIcon /><Link to="">Delivery</Link></li>
                    <p>USEFUL</p>
                    <li><BarChartOutlinedIcon /><Link to="">Stats</Link></li>
                    <li><NotificationsNoneOutlinedIcon /><Link to="">Notification</Link></li>
                    <p>SERVICE</p>
                    <li><MonitorHeartOutlinedIcon /><Link to="">System Health</Link></li>
                    <li><PsychologyOutlinedIcon /><Link to="">Logs</Link></li>
                    <li><SettingsOutlinedIcon /><Link to="">Settings</Link></li>
                    <p>USER</p>
                    <li><AccountCircleOutlinedIcon /><Link to="">Profile</Link></li>
                    <li><LogoutOutlinedIcon /><Link to="">Logout</Link></li>
                </ul>
            </div>
            <div className="mode">
                <span className="light"></span>
                <span className="dark"></span>
            </div>
        </aside>
    );
}