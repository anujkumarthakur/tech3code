import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Grid,
    Link
} from "@material-ui/core";


const Footer = () => <>
        
        <AppBar position="static" elevation={0} component="footer" color="default">
            <Toolbar style={{ justifyContent: "center" , background:"skyblue", color:"white"}}>
                <Typography variant="h6" >Copyright ©2020 Tech3Code</Typography>
            </Toolbar>
        </AppBar>
    </>

export default Footer;