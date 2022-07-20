import "./Layout.scss";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

export default function Layout() {
    return (
        <div className="container-fluid bg-light">
            <div className="row">
                <div className="col-12 col-md-3 col-xl-2 g-0"><Sidebar /></div>
                <div className="col-12 col-md-9 col-xl-10 g-0">
                    <Navbar />
                    <Outlet />
                </div>
            </div>
        </div>
        )
}