import "./new.scss";
import { Box, Grid, IconButton } from "@mui/material";
import { Fragment, useReducer, useState } from "react";
import { useLocation } from "react-router";
import noImage from "./images.png";
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { useDispatch } from "../../context/contextApi";
import { nanoid } from "nanoid";

const initialState = {
    user: {
        username: "",
        fullname: "",
        email: "",
        phone: "",
        password: "",
        address: "",
        age: ""
    },
    product: {
        title: "",
        description: "",
        category: "",
        price: "",
        stock: ""
    }
}

function reducer(state, action) {
    switch (action.type) {
        case "user/username":
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.payload.username
                }
            }
        case "user/fullname":
            return {
                ...state,
                user: {
                    ...state.user,
                    fullname: action.payload.fullname
                }
            }
        case "user/email":
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload.email
                }
            }
        case "user/phone":
            return {
                ...state,
                user: {
                    ...state.user,
                    phone: action.payload.phone
                }
            }
        case "user/password":
            return {
                ...state,
                user: {
                    ...state.user,
                    password: action.payload.password
                }
            }
        case "user/address":
            return {
                ...state,
                user: {
                    ...state.user,
                    address: action.payload.address
                }
            }
        case "user/age":
            return {
                ...state,
                user: {
                    ...state.user,
                    age: action.payload.age
                }
            }
        case "user/clearform":
            return {
                ...state,
                user: {
                    username: "",
                    fullname: "",
                    email: "",
                    phone: "",
                    password: "",
                    address: "",
                    age: ""
                }
            }
        case "product/title":
            return {
                ...state,
                product: {
                    ...state.product,
                    title: action.payload.title
                }
            }
        case "product/description":
            return {
                ...state,
                product: {
                    ...state.product,
                    description: action.payload.description
                }
            }
        case "product/category":
            return {
                ...state,
                product: {
                    ...state.product,
                    category: action.payload.category
                }
            }
        case "product/price":
            return {
                ...state,
                product: {
                    ...state.product,
                    price: action.payload.price
                }
            }
        case "product/stock":
            return {
                ...state,
                product: {
                    ...state.product,
                    stock: action.payload.stock
                }
            }
        case "product/clearform":
            return{
                ...state,
                product: {
                    title: "",
                    description: "",
                    category: "",
                    price: "",
                    stock: ""
                }
            }

        default:
            return state;
    }
}
export default function New() {
    const [file, setFile] = useState();
    const [localState, localDispatch] = useReducer(reducer, initialState);
    const dispatch = useDispatch();
    const imageUrl = file ? URL.createObjectURL(file) : null;
    const location = useLocation();
    const inNewuserLocation = location.pathname.includes("newuser");

    function handleAddUser() {
        dispatch({
            type: "users/ADD_USER",
            payload: {
                userinfo: {
                    id: nanoid(),
                    username: localState.user.username,
                    fullname: localState.user.fullname,
                    email: localState.user.email,
                    phone: localState.user.phone,
                    password: localState.user.password,
                    address: localState.user.address,
                    age: localState.user.age,
                    img:imageUrl,
                    orders: []
                }
            }
        });

        localDispatch({
            type: "user/clearform"
        });

        setFile(null);
    }

    function handleAddProduct() {
        dispatch({
            type: "products/ADD_PRODUCT",
            payload: {
                productinfo: {
                    id: nanoid(),
                    productname: localState.product.title,
                    description: localState.product.description,
                    category: localState.product.category,
                    price: localState.product.price,
                    status: localState.product.stock,
                    img:imageUrl
                }
            }
        });

        localDispatch({
            type: "product/clearform"
        });

        setFile(null);
    }

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
                            <div className="item">Image: <IconButton className="image-upload-button"><label htmlFor="image-upload"><DriveFolderUploadIcon /></label></IconButton> <input id="image-upload" type="file" onChange={(e) => setFile(e.target.files[0])} /></div>
                            <div className="item"><label>{inNewuserLocation ? "Name and Surname" : "Description"}: </label><input type="text" placeholder={inNewuserLocation ? " Jone Doe" : " Description"} onChange={inNewuserLocation ? (e) => localDispatch({ type: "user/fullname", payload: { fullname: e.target.value } }) : (e) => localDispatch({ type: "product/description", payload: { description: e.target.value } })} value={inNewuserLocation ? localState.user.fullname : localState.product.description} /></div>
                            <div className="item"><label>{inNewuserLocation ? "Phone" : "Price"}: </label><input type="text" placeholder={inNewuserLocation ? " +989195425687" : " $100"} onChange={inNewuserLocation ? (e) => localDispatch({ type: "user/phone", payload: { phone: e.target.value } }) : (e) => localDispatch({ type: "product/price", payload: { price: e.target.value } })} value={inNewuserLocation ? localState.user.phone : localState.product.price} /></div>
                            {inNewuserLocation ? <div className="item"><label>Address: </label><input type="text" placeholder=" St. Pahlavi Tajrish Tehran Iran" onChange={(e) => localDispatch({ type: "user/address", payload: { address: e.target.value } })} value={localState.user.address} /></div> : null}

                        </Grid>
                        <Grid className="right-side-form" item xs={12} md={6}>
                            <div className="item"><label>{inNewuserLocation ? "Username" : "Tilte"}: </label><input type="text" placeholder={inNewuserLocation ? " jone_doe" : " Apple Macbook Pro"} onChange={inNewuserLocation ? (e) => localDispatch({ type: "user/username", payload: { username: e.target.value } }) : (e) => localDispatch({ type: "product/title", payload: { title: e.target.value } })} value={inNewuserLocation ? localState.user.username : localState.product.title} /></div>
                            <div className="item"><label>{inNewuserLocation ? "Email" : "Category"}: </label><input type="text" placeholder={inNewuserLocation ? " jonedoe@gmail.com" : " Category"} onChange={inNewuserLocation ? (e) => localDispatch({ type: "user/email", payload: { email: e.target.value } }) : (e) => localDispatch({ type: "product/category", payload: { category: e.target.value } })} value={inNewuserLocation ? localState.user.email : localState.product.category} /></div>
                            <div className="item"><label>{inNewuserLocation ? "Password" : "Stock"}: </label><input type="text" placeholder={inNewuserLocation ? "" : " in Stock"} onChange={inNewuserLocation ? (e) => localDispatch({ type: "user/password", payload: { password: e.target.value } }) : (e) => localDispatch({ type: "product/stock", payload: { stock: e.target.value } })} value={inNewuserLocation ? localState.user.password : localState.product.stock} /></div>
                            {inNewuserLocation ? <div className="item"><label>Age: </label><input type="text" placeholder=" 54" onChange={(e) => localDispatch({ type: "user/age", payload: { age: e.target.value } })} value={localState.user.age} /></div> : null}
                        </Grid>
                        <div className="container-button"><button className="send-button" onClick={inNewuserLocation ? handleAddUser : handleAddProduct}>Send</button></div>
                    </Grid>
                </Grid>
            </Box>
        </Fragment>
    )
}