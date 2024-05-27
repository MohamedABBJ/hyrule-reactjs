import { Box, Button, IconButton, Input, TextField, Typography } from "@mui/material"
import NavBar from "../components/navbar/navbar"
import { Reorder, Search, StarBorder, ViewModule } from "@mui/icons-material"
import useRequestAll from "../components/hooks/useRequestAll"
import { ItemBoxes } from "../components/ItemBoxes/itemboxes"
import { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"
import { usePageQuantity } from "../components/hooks/usePageQuantity"
import useBoxesView from "../components/hooks/useBoxesView"


export const ItemsPage = () =>{
    const params = useParams()
    const requestAll = useRequestAll()
    const [searchValue, setSearchValue] = useState('')

    const obtainedValues = useRef()
    const {setViewSelector,viewSelector, viewType} = useBoxesView()
    const [itemPages, setItemPages] = useState(1)
    const [indexQuantity, setIndexQuantity] = useState(0)
    const [pageQuantity, setPageQuantity] = useState(50)

    const nextPage = () =>{
        setItemPages(itemPages + 1)
        setPageQuantity(pageQuantity + 50)
        setIndexQuantity(indexQuantity + 50)
    }

    const previousPage = () =>{
        if(itemPages > 1){
            setItemPages(itemPages - 1)
            setPageQuantity(pageQuantity - 50)
        }
    }

    const allValues = () =>{
        console.log(indexQuantity)
     obtainedValues.current = requestAll.data.data && requestAll.data.data.length
     const getItems = requestAll.data.data?.filter((element) => element.category != 'monsters')
        return(
            getItems?.map((element,index) => index < pageQuantity && index > indexQuantity  ? (<ItemBoxes {...{element,viewSelector}}  key={element.id}/>) : '')
        )
    }

    const searchValueFun = () =>{
        const valueSearched = requestAll.data.data?.filter((element) => element.name.includes(searchValue) && element.category != 'monsters')
        obtainedValues.current = valueSearched.length
        return(
            valueSearched.map((element)  => (<ItemBoxes {...{element,viewSelector}}  key={element.id}/>))
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
        <IconButton onClick={() => setViewSelector('line')} children={<Reorder fontSize="large"/>}/>
        <IconButton onClick={() => setViewSelector('square')} children={<ViewModule fontSize="large"/>}/>
        </Box>
        </Box>


            {/* Items Blocks */}
            <Box padding={'10px'}  height={'81vh'} width={'98%'} border={'solid'} sx={{overflowY:'scroll'}} marginTop={'20px'} display={'flex'} flexWrap={'wrap'}>
        <Box width={'100%'} display={'flex'} flexWrap={'wrap'} flexDirection={viewType.flexDirection}>
           {searchValue == '' ? allValues() : searchValueFun()}
        </Box>
           <Box display={'flex'} flexWrap={'wrap'} width={'100%'} border={'solid'} justifyContent={'end'}>
            <Button variant="contained" onClick={previousPage}>{`<`}</Button>
            <Typography marginTop={'5px'}>{itemPages}</Typography>
            <Button variant="contained" onClick={nextPage}>{`>`}</Button>
           </Box>
            </Box>

        </Box>
        </>
    )
}