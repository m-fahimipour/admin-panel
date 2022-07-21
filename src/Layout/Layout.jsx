import "./Layout.scss";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { Container, Grid } from "@mui/material";

export default function Layout() {
    return (
        <Grid container columns={12}>
            <Grid item xs={12} sm={4} md={3} lg={2}>
                <Sidebar />
            </Grid>
            <Grid item xs={12} sm={8} md={9} lg={10}>
                <Navbar />
                <Outlet />
            </Grid>
        </Grid>
    )
}