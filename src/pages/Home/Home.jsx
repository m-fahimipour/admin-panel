import { Grid } from "@mui/material";
import Chart from "../../components/Featured/Chart/Chart";
import Revenue from "../../components/Featured/Revenue/Revenue";
import ListTransactions from "../../components/Table/ListTransactions";
import Widget from "../../components/Widget/Widget";

export default function Home() {
    return (
        <>
            <Grid container columns={12} padding="1.5rem 0.75rem">
                <Grid item xs={12} md={6} lg={3}><Widget type="USERES" /></Grid>
                <Grid item xs={12} md={6} lg={3} marginTop={{ xs: "0.75rem", md: "0" }}><Widget type="ORDERS" /></Grid>
                <Grid item xs={12} md={6} lg={3} marginTop={{ xs: "0.75rem", lg: "0" }}><Widget type="EARNINGS" /></Grid>
                <Grid item xs={12} md={6} lg={3} marginTop={{ xs: "0.75rem", lg: "0" }}><Widget type="BALANCE" /></Grid>
            </Grid>
            <Grid container columns={12} padding="0 0.75rem 1.5rem 0.75rem">
                <Grid item xs={12} md={5} lg={4}><Revenue /></Grid>
                <Grid item xs={12} md={7} lg={8} marginTop={{ xs: "0.75rem", md: "0" }}><Chart height={350} title="Last 5 Month"/></Grid>
            </Grid>
            <Grid container columns={12} padding="0 0.75rem 1.5rem 0.75rem">
                <Grid item xs={12}>
                    <ListTransactions title="Last Transactions" customer={true}/>
                </Grid>
            </Grid>
        </>
    )
}