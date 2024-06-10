import { Image } from "@mui/icons-material"
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
            <Box display={'flex'}  >
        <Link to={'/'}>
            <Box component={'img'} src="../../public/assets/"/>
        </Link>
        <Link to={'/items'}>Items</Link>
        <Link>Enemies</Link>
        <Link>Map</Link>
        <Link>About</Link>
        <Link>Github</Link>
        <Link>
            Login
        </Link>
            </Box>
        </Box>
        </>
    )
}

export default NavBar