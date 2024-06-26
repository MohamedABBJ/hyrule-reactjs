import { Box } from "@mui/material"
import ObtainedSearchedData from "../components/responsecontent/obtainedSearchedData"
import { useRequestOne } from "../components/hooks/useRequestOne"
import NavBar from "../components/navbar/navbar"
import SearchBar from "../components/searchbar/searchbar"
import useItemMoreDetails from "../components/store/itemMoreDetails"
import { useEffect } from "react"

const HomePage = () =>{
    const {dataObtained,setInputValue} = useRequestOne()
    const {setMode} = useItemMoreDetails()

    useEffect(() => {
        setMode('sticky')
    }, [])
    

    return( 
        <>
        {/* Navbar Component */}
            <NavBar props={'top'}/>
            
        <Box sx={{backgroundRepeat:'no-repeat', backgroundSize:'cover',  backgroundImage:"linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(https://images8.alphacoders.com/976/976005.jpg)"}} position={'relative'} width={'100%'}>
            <Box  height={'91vh'}  border={'solid black'} display={dataObtained.state ? 'none' : 'flex'} justifyContent={'center'} alignItems={'center'}>
             <SearchBar {...{setInputValue}}/>
            </Box>     
            <Box height={'91vh'} border={'solid black'} display={dataObtained.state ? 'flex' : 'none'} justifyContent={'center'} alignItems={'center'}>
            <ObtainedSearchedData {...{dataObtained,setInputValue}}/>
            </Box>

        </Box>
         
        </>
    )

    
}
/*

*/

export default HomePage