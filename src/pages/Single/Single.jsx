import "./Single.scss";
import { Grid } from "@mui/material";
import Chart from "../../components/Featured/Chart/Chart";
import ListTransactions from "../../components/Table/ListTransactions";
import {useLocation} from "react-router";

export default function Single(){
    const location = useLocation();
    const inUserLocation = location.pathname.includes("users");
    return(
        <Grid container columns={12} margin="1.5rem 0.75rem" width={"auto"}>
            <Grid container item xs={12} marginBottom="1.5rem">
                <Grid item xs={12} md={6} lg={4}>
                    <section className="container-information">
                        <h1 className="header-information">
                            information
                        </h1>
                        <div className="body-information">
                            <img src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=1200" alt="" />
                            <div className="information">
                                <div className="item">Jone Doe</div>
                                <div className="item"><span>Email: </span>jone_doe@gmail.com</div>
                                <div className="item"><span>Phone: </span>+98 9192456589</div>
                                <div className="item"><span>Address: </span>ST. Pahlavi Tajrish Tehran</div>
                                <div className="item"><span>Age: </span>54</div>
                            </div>
                        </div>
                        <span className="edit">Edit</span>
                    </section>
                </Grid>
                <Grid item xs={12} md={6} lg={8} marginTop={{xs:"0.75rem", md:"0"}}><Chart height={230} title={inUserLocation ? "User Spending ( Last 5 Month )" : "Number sold ( Last 5 Month )"}/></Grid>
            </Grid>
            <Grid item xs={12}>
                {inUserLocation ? <ListTransactions title="Last Orders" customer={false}/> : null}
            </Grid>
        </Grid>
    )
}