import { Box, Button, Typography } from "@mui/material"
import React from "react"
import { Link } from "react-router-dom"

const NavBar = (type) =>{
    const conditionTypeTop = type.props == 'top'
    const conditionTypeSide = type.props == 'side'
    
    const navbarForm = {
        height: conditionTypeTop ? '8vh' : conditionTypeSide ? '100vh' : '',
        width: conditionTypeTop ? '100%' : conditionTypeSide ? '6%' : '',
        position: conditionTypeTop ? 'relative' : conditionTypeSide ? 'fixed' : ''
    }


    return(
        <>

        
        <Box height={navbarForm.height} width={navbarForm.width} bgcolor={'aqua'} position={navbarForm.position} >
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