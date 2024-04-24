import { Box, Button, Input, TextField, Typography } from "@mui/material"
import NavBar from "../components/navbar/navbar"
import { Reorder, Search, StarBorder, ViewModule } from "@mui/icons-material"
import useRequestAll from "../components/hooks/useRequestAll"
import { ItemBoxes } from "../components/ItemBoxes/itemboxes"
import { useRef, useState } from "react"

export const ItemsPage = () =>{
    const requestAll = useRequestAll()
    const [searchValue, setSearchValue] = useState('')
    let test = 1
    //Tried to test if I can sum more values to test didn't work because is a constant an array doing (1+1) = 222222... will try to make it with the key returns undefined but going to investigate more on that!
    //Will do this now, items found should say the items that went located in the search you can do this with passing setCountGettedValues to the component itemboxes!
    console.log(test)
    return(
        <>
        {/* Top Bar Search */}
        <Box position={'relative'} sx={{float:'right'}} right={'0'} width={'94%'}  border={'solid'}>
        <Box marginTop={'10px'} display={'flex'} flexDirection={'row'}>
        <Box  width={'70px'} textAlign={'center'}>
        <Typography>Items</Typography>
        <Typography>*** found</Typography>
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
            {requestAll.data.data?.map((element) =>  searchValue != '' ? element.name.includes(searchValue) ? (<ItemBoxes {...element}/>, setCountGettedValues(countGettedValues+1)) : '' : ((<ItemBoxes {...{element}} key={element.id}/>)))}
            </Box>
        </Box>
        </>
    )
}