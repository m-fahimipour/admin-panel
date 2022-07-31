import "./New.scss";
import { Box, Grid, IconButton } from "@mui/material";
import { Fragment, useState } from "react";
import { useLocation } from "react-router";
import noImage from "./images.png";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';

export default function New() {
    const [file,setFile] = useState();
    const imageUrl = file ? URL.createObjectURL(file) : null;
    const location = useLocation();
    const inNewuserLocation = location.pathname.includes("newuser")
    return (
        <Fragment>
            <Box className="title-create-new">{inNewuserLocation ? "Add New User" : "Add New Product"}</Box>
            <Box margin="0 1.5rem">
                <Grid className="wrapper-create-new" container columns={12}>
                    <Grid className="left" container item xs={12} md={4}>
                        <img src={file ? imageUrl : noImage} alt="" />
                    </Grid>
                    <Grid className="right" container item xs={12} md={8}>
                        <Grid className="left-side-form" flexDirection="column" item xs={12} md={6}>
                            <div className="item">Image: <IconButton className="image-upload-button"><label htmlFor="image-upload"><DriveFolderUploadIcon /></label></IconButton> <input id="image-upload" type="file" onChange={(e)=> setFile(e.target.files[0])}/></div>
                            <div className="item"><label>{inNewuserLocation ? "Name and Surname" : "Description"}: </label><input type="text" placeholder={inNewuserLocation ? " Jone Doe" : " Description"} /></div>
                            <div className="item"><label>{inNewuserLocation ? "Phone" : "Price"}: </label><input type="text" placeholder={inNewuserLocation ? " +989195425687" : " $100"} /></div>
                            {inNewuserLocation ? <div className="item"><label>Address: </label><input type="text" placeholder=" St. Pahlavi Tajrish Tehran Iran" /></div> : null}
                            
                        </Grid>
                        <Grid className="right-side-form"item xs={12} md={6}>
                            <div className="item"><label>{inNewuserLocation ? "Username" : "Tilte"}: </label><input type="text" placeholder={inNewuserLocation ? " jone_doe" : " Apple Macbook Pro"} /></div>
                            <div className="item"><label>{inNewuserLocation ? "Email" : "Category"}: </label><input type="text" placeholder={inNewuserLocation ? " jonedoe@gmail.com" : " Category"} /></div>
                            <div className="item"><label>{inNewuserLocation ? "Password" : "Stock"}: </label><input type="text" placeholder={inNewuserLocation ? "" : " in Stock"}/></div>
                            {inNewuserLocation ? <div className="item"><label>Age: </label><input type="text" placeholder=" 54" /></div> : null}
                        </Grid>
                        <div className="container-button"><button className="send-button">Send</button></div>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}