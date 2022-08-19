import "./List.scss";
import { useLocation } from "react-router";
import Users from "./Users";
import Products from "./Products"

export default function TableUsers({columns,rows}) {
    const location = useLocation();
    const inUsersLoaction = location.pathname.includes("users");
    return (
        <>
        {inUsersLoaction ? <Users/> : <Products/>}
        </>

    )
}