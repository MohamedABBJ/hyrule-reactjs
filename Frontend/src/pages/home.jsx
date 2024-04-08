import { Avatar, Box, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import NavBar from "../components/navbar/navbar"
import SearchBar from "../components/searchbar/searchbar"
import ObtainedSearchedData from "../components/responsecontent/obtainedSearchedData"

const HomeScreen = () =>{
    const [dataGetted, setDataGetted] = useState({
        id:0,
        name:'',
        category:'',
        description:'',
        drops:[],
        image:'',
        state:false
    })
    
    return(
        //Page Content
        <Box position={'relative'}  width={'100%'}>
            {/* Navbar Component */}
            <Box height={'8vh'} bgcolor={'aqua'} >
            <NavBar/>
            </Box>
            {/* SearchBar Compontent */}
            <Box height={'300px'} border={'solid black'} display={dataGetted.state ? 'none' : 'block'} justifyContent={'center'} alignItems={'center'}>
             <SearchBar setDataGetted={setDataGetted}/>
            </Box>
            {/* Data Obtained Window */}
            <Box height={'91vh'} border={'solid black'} display={dataGetted.state ? 'flex' : 'none'} justifyContent={'center'} alignItems={'center'}>
            <ObtainedSearchedData  data={{setDataGetted, dataGetted}}/>
            </Box>

        </Box>
        
    )
}

export default HomeScreen