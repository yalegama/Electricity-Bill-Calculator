import { AppBar, Toolbar, Typography } from "@material-ui/core";
import "./Header.css"
import React from "react";



function Header(){
    return <AppBar>
        <Toolbar>
            <Typography 
            variant="h5"
            
            > 
            <span 
            className="E"
            >E</span>lectricity <span
            className="E"
            >B</span>ill <span
            className="E"
            >C</span>alculator </Typography>
        </Toolbar>
    </AppBar>
}
export default Header