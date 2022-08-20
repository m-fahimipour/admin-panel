import "./Layout.scss";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { createTheme, ThemeProvider, useMediaQuery } from "@mui/material";
import { useLayoutEffect, useState } from "react";

const theme = createTheme();

export default function Layout() {
    const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
    const [closeMenu, setCloseMenu] = useState(isDownMd);

    useLayoutEffect(() => {
        if (isDownMd) {
            setCloseMenu(true);
        }
        if (!isDownMd) {
            setCloseMenu(false);
        }
    }, [isDownMd])

    useLayoutEffect(() => {
        if(closeMenu){
            document.body.classList.remove("disable-scroll-body");
        }
        else{
            document.body.classList.add("disable-scroll-body");
        }
    },[closeMenu])

    return (
        <ThemeProvider theme={theme}>
            <>
                <div className={closeMenu ? "sidebar close-menu" : "sidebar"}>
                    <Sidebar />
                    {/* <span className="button-close-menu-mobile" onClick={() => setCloseMenu(true)}>close menu</span> */}
                </div>
                <div className={closeMenu ? "back-nav-mobile-close" : "back-nav-mobile-close back-nav-mobile-open"}
                    onClick={() => setCloseMenu(true)}
                >
                </div>
                <div className="navbar-content" >
                    <Navbar setCloseMenu={setCloseMenu} />
                    <Outlet />
                </div>
            </>
        </ThemeProvider>
    )
}