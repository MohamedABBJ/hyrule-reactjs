import { Box, Button, Input, TextField, Typography } from "@mui/material"
import NavBar from "../components/navbar/navbar"
import { Reorder, Search, StarBorder, ViewModule } from "@mui/icons-material"
import useRequestAll from "../components/hooks/useRequestAll"
import { ItemBoxes } from "../components/ItemBoxes/itemboxes"
import { useEffect, useRef, useState } from "react"


export const ItemsPage = () =>{
    const requestAll = useRequestAll()
    const [searchValue, setSearchValue] = useState('')
    const [gettedValues, setGettedValues] = useState({})
    const obtainedValues = useRef()

    let test = 0
      
    const allValues = () =>{
     obtainedValues.current = requestAll.data.data && requestAll.data.data.length
        return(
            requestAll.data.data?.map((element) => (<ItemBoxes {...{element}}  key={element.id}/>))
        )
    }

    const searchValueFun = () =>{
        const valueSearched = requestAll.data.data?.filter((element) => element.name.includes(searchValue))
        obtainedValues.current = valueSearched.length
        return(
            valueSearched.map((element)  => (<ItemBoxes {...{element}}  key={element.id}/>))
        )
    }

    
        

    

    return(
        <>
   
        <NavBar props={'side'}/>

        {/* Top Bar Search */}
        <Box position={'relative'} sx={{float:'right'}} right={'0'} width={'94%'}  border={'solid'}>
        <Box marginTop={'10px'} display={'flex'} flexDirection={'row'}>
        <Box  width={'70px'} textAlign={'center'}>
        <Typography>Items</Typography>
        <Typography>{`${obtainedValues.current} Found`}</Typography>
        </Box>
        <Box position={'relative'} marginLeft={'40px'} width={'80%'}  >
            <Search sx={{position:'absolute', marginLeft:'10px', height:'80%'}} />
        <Input onKeyDown={(event) => event.key == 'Enter' ? setSearchValue(event.target.value) : ''} inputProps={{style:{marginLeft:'40px'}}} sx={{border:'solid',borderRadius:'20px', width:'100%'}}>
        </Input>
        </Box>
        <Box marginLeft={'40px'}>
        <Reorder fontSize="large"/>
        <ViewModule fontSize="large"/>
        </Box>
        </Box>


            {/* Items Blocks */}
            <Box padding={'10px'}  position={'relative'} border={'solid'} marginTop={'20px'} display={'flex'} flexWrap={'wrap'}>
           {searchValue == '' ? allValues() : searchValueFun()}
            </Box>
        </Box>
        </>
    )
}