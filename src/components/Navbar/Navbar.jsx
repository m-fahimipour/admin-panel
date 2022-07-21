import "./Navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
export default function Navbar() {
    return (
        <div className="navbarWrapper">
            <div className="search-container">
                <input type="text" placeholder="search..." />
                <span><SearchOutlinedIcon /></span>
            </div>
            <div className="toolbar">
                <span className="lang"><LanguageOutlinedIcon/><p>English</p></span>
                <span><DarkModeOutlinedIcon/></span>
                <span className="notification"><div>9+</div><NotificationsNoneOutlinedIcon/></span>
                <span className="chat"><div>9+</div><ChatBubbleOutlineOutlinedIcon/></span>
                <span><ListOutlinedIcon/></span>
                <span className="avatar"><img src="https://images.pexels.com/photos/343717/pexels-photo-343717.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" /></span>
            </div>
        </div>
    )
}