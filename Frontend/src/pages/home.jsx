import { Avatar, Box, TextField, Typography } from "@mui/material"
import React, { useState } from "react"
import NavBar from "../components/navbar/navbar"
import SearchBar from "../components/searchbar/searchbar"
import ObtainedSearchedData from "../components/responsecontent/obtainedSearchedData"
import zIndex from "@mui/material/styles/zIndex"
import useRequestAll from "../components/hooks/useRequestAll"

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

    const defaultState = {
        id:0,
        name:'',
        category:'',
        description:'',
        drops:[],
        image:'',
        state:false
    }
    
    return(
        //Page Content
        <Box sx={{backgroundColor:'black'}}>
        <Box sx={{backgroundRepeat:'no-repeat', backgroundSize:'cover',  backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images8.alphacoders.com/976/976005.jpg)"}} position={'relative'} width={'100%'}>
            {/* Navbar Component */}
            <Box height={'8vh'} bgcolor={'aqua'} >
            <NavBar/>
            </Box>
            {/* SearchBar Compontent */}
            <Box  height={'91vh'}  border={'solid black'} display={dataGetted.state ? 'none' : 'flex'} justifyContent={'center'} alignItems={'center'}>
             <SearchBar setDataGetted={setDataGetted}/>
            </Box>
            {/* Data Obtained Window */}
            <Box height={'91vh'} border={'solid black'} display={dataGetted.state ? 'flex' : 'none'} justifyContent={'center'} alignItems={'center'}>
            <ObtainedSearchedData  data={{setDataGetted, dataGetted, defaultState}}/>
            </Box>

        </Box>
        </Box>
        
    )
}

export default HomeScreen