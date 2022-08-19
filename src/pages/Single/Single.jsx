import "./Single.scss";
import { Grid, Box } from "@mui/material";
import Chart from "../../components/Featured/Chart/Chart";
import ListTransactions from "../../components/Table/ListTransactions";
import { useLocation, useParams } from "react-router";
import { useContextState } from "../../context/contextApi";
import { useEffect, useState } from "react";
import GridLoader from "react-spinners/GridLoader";

let userInfo, productInfo;

export default function Single() {
    const [isLoading, setIsLoading] = useState(true);
    const state = useContextState();
    const location = useLocation();
    const params = useParams();
    const inUserLocation = location.pathname.includes("users");
    

    useEffect(() => {
        if (inUserLocation) {
            userInfo = state.entites.users.byId[params.userid];
        }
        else {
            productInfo = state.entites.products.byId[params.productid];
        }

        setIsLoading(false);
    },[])

    return (
        <>
            {isLoading ? <Box className="single-loading"><GridLoader color="#7158e2"/></Box> :
                <Grid container columns={12} margin="1.5rem 0.75rem" width={"auto"}>
                    <Grid container item xs={12} marginBottom="1.5rem">
                        <Grid item xs={12} md={6} lg={4}>
                            <section className="container-information">
                                <h1 className="header-information">
                                    information
                                </h1>
                                <div className="body-information">
                                    <img src={inUserLocation ? userInfo.img : productInfo.img} alt="" />
                                    <div className="information">
                                        <div className="item">{inUserLocation ? userInfo.fullname : productInfo.productname}</div>
                                        <div className="item"><span>{inUserLocation ? "Email" : "price"}: </span>{inUserLocation ? userInfo.email : productInfo.price}</div>
                                        <div className="item"><span>{inUserLocation ? "phone" : "stock"}: </span>{inUserLocation ? userInfo.phone : productInfo.status}</div>
                                        {inUserLocation ? <div className="item"><span>Address: </span>ST. Pahlavi Tajrish Tehran</div> : null}
                                        {inUserLocation ? <div className="item"><span>Age: </span>{userInfo.age}</div> : null}

                                    </div>
                                </div>
                                <span className="edit">Edit</span>
                            </section>
                        </Grid>
                        <Grid item xs={12} md={6} lg={8} marginTop={{ xs: "0.75rem", md: "0" }}><Chart height={230} title={inUserLocation ? "User Spending ( Last 5 Month )" : "Number sold ( Last 5 Month )"} /></Grid>
                    </Grid>
                    <Grid item xs={12}>
                        {inUserLocation ? <ListTransactions title="Last Orders" customer={false} /> : null}
                    </Grid>
                </Grid>
            }
        </>
    )
}