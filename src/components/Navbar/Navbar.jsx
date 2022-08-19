import "./Navbar.scss";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, useMediaQuery } from "@mui/material";
import { useTheme } from "@emotion/react";
import { useState } from "react";


export default function Navbar({setCloseMenu}) {
    const theme = useTheme();
    const isDownMd = useMediaQuery(theme.breakpoints.down('md'));
    const [openSearch, setOpenSearch] = useState(false);
    return (
        <div className="navbarWrapper">
            <div className="leftBar">
                <IconButton onClick={() => setCloseMenu(c => !c)}>
                    <MenuIcon />
                </IconButton>
                {isDownMd && !openSearch ? null :
                    <div className="search-container">
                        {isDownMd ? <IconButton onClick={() => { setOpenSearch(false) }}><CloseIcon /></IconButton> : null}
                        <input type="text" placeholder="search..." />
                        <span><SearchOutlinedIcon /></span>
                    </div>
                }
                {isDownMd && !openSearch ? <IconButton onClick={() => { setOpenSearch(true) }}><SearchOutlinedIcon /></IconButton> : null}
            </div>
            <div className="toolbar">
                {openSearch && isDownMd ? null :
                    <>
                        {isDownMd ? null : <span className="lang"><LanguageOutlinedIcon /><p>English</p></span>}
                        <span><DarkModeOutlinedIcon /></span>
                        <span className="notification"><div>9+</div><NotificationsNoneOutlinedIcon /></span>
                        <span className="chat"><div>9+</div><ChatBubbleOutlineOutlinedIcon /></span>
                        <span><ListOutlinedIcon /></span>
                    </>
                }
                <span className="avatar"><img src="https://img.freepik.com/premium-photo/portrait-young-blonde-woman-looking-camera_23-2148028831.jpg?w=2000" alt="" /></span>
            </div>
        </div>
    )
}