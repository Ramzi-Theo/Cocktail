import { Mail, Notifications } from '@mui/icons-material';
import { AppBar, Badge, Box, InputBase, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';
const StyledToolbar= styled(Toolbar)(
    {
        display:"flex",
        justifyContent:"space-between"
    }
);
const Search=styled("div")(({theme})=>({
backgroundColor:"white",
padding:"0 10px",
borderRadius:"10px",
width:"40%"
}))
const Icons=styled("Box")(({theme})=>({
    }))
const Navbar=()=>{

    return(
        <AppBar position="sticky">
            <StyledToolbar>
                <Typography variant="h5">Search your favorite Cocktail</Typography>
                <Search><InputBase placeholder="Search...." /></Search>
            </StyledToolbar>
            </AppBar>
    )
}
export default Navbar