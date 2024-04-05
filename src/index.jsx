import { Avatar, Box, TextField, Typography } from "@mui/material"
import { NavBar } from "./components/navbar.jsx"
import React, { useState } from "react"
import SearchBar from "./components/searchbar.jsx"
import ObtainedSearchedData from "./components/obtainedSearchedData.jsx"

const HomeScreen = () =>{
    const [dataGetted, setDataGetted] = useState()

    return(
        //Page Content
        <Box position={'relative'}  width={'100%'}>
            {/* Navbar Component */}
            <Box height={'8vh'} bgcolor={'aqua'} >
            <NavBar/>
            </Box>
            {/* SearchBar Compontent */}
            <Box height={'300px'} border={'solid black'} justifyContent={'center'} alignItems={'center'}>
             <SearchBar setDataGetted={setDataGetted}/>
            </Box>
            {/* Data Obtained Window */}
            <Box height={'91vh'} border={'solid black'} display={'flex'} justifyContent={'center'} alignItems={'center'}>
            <ObtainedSearchedData  setDataGetted={setDataGetted} dataGetted={dataGetted}/>
            </Box>

        </Box>
        
    )
}

export default HomeScreen