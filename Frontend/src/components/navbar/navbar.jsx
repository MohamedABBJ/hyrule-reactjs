import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <>
    
        {/* Work in progress */}

        <Box height={'8vh'} bgcolor={'aqua'} >
        <Link to={'/'}>LOGO</Link>
        <Link to={'/items'}>Items</Link>
        <Button>Enemies</Button>
        <Button>Map</Button>
        <Button>About</Button>
        <Button>User</Button>
        <Button>Github</Button>
        <Button>
            Login
        </Button>
        </Box>

           
      
        </>
    )
}

export default NavBar