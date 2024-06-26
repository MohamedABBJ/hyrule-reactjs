import { Box, Button, IconButton, Input, TextField, Typography } from "@mui/material"
import NavBar from "../components/navbar/navbar"
import { Reorder, Search, StarBorder, ViewModule } from "@mui/icons-material"
import useRequestAll from "../components/hooks/useRequestAll"
import { ItemBoxes } from "../components/ItemBoxes/itemboxes"
import React, { useEffect, useRef, useState } from "react"
import { useParams } from "react-router-dom"

import useBoxesView from "../components/hooks/useBoxesView"
import ObtainedValues from "../interfaces/obtainedValues"


export const ItemsPage = () =>{
    const params = useParams()
    const requestAll = useRequestAll()
    const [searchValue, setSearchValue] = useState('')
    
    const obtainedValues = useRef<number>()
    const {setViewSelector,viewSelector, viewType} = useBoxesView()
    const [itemPages, setItemPages] = useState(1)
    const [maxPage, setMaxPage] = useState<number>()
    const [indexQuantity, setIndexQuantity] = useState(0)
    const [pageQuantity, setPageQuantity] = useState(50)


    const getItems =  requestAll.data.dataValue && requestAll.data.dataValue.data.filter((element:{category:string}) => element.category != 'monsters')
    const valueSearched = requestAll.data.dataValue && requestAll.data.dataValue.data.filter((element:{name:string,category:string}) => element.name.includes(searchValue) && element.category != 'monsters')
    
    useEffect(() => {
        if (searchValue != '') {
            setItemPages(1)
            setMaxPage(Math.round(valueSearched?.length / 50) + 1)
        }else if(getItems){
            setMaxPage(Math.round(getItems?.length / 50) + 1)
        }
    }, [searchValue,getItems])

    const nextPage = () =>{
        setItemPages(itemPages + 1)
        setPageQuantity(pageQuantity + 50)
        setIndexQuantity(indexQuantity + 50)
    }

    const previousPage = () =>{
        if(itemPages > 1){
            setItemPages(itemPages - 1)
            setPageQuantity(pageQuantity - 50)
            setIndexQuantity(indexQuantity - 50)
        }
    }

    const allValues = () =>{
     obtainedValues.current = requestAll.data.dataValue && requestAll.data.dataValue.data.length
        return(
            getItems?.map((element:ObtainedValues,index) => index < pageQuantity && index > indexQuantity  ? (<ItemBoxes {...{element,viewSelector}}  key={element.id}/>) : '')
        )
    }

    const searchValueFun = () =>{
        if(pageQuantity != 50 && indexQuantity != 0){
            setPageQuantity(50)
            setIndexQuantity(0)
        }
        obtainedValues.current = valueSearched.length

        return(
            valueSearched?.map((element:ObtainedValues,index)  => index < pageQuantity && index >= indexQuantity ? (<ItemBoxes {...{element,viewSelector}}  key={element.id}/>) : '')
        )
    }
    return(
        <>
   
        <NavBar props={'side'}/>

        {/* Top Bar Search */}
        <Box position={'relative'} sx={{float:'right'}} right={'0'} width={'94%'} border={'solid'}>
        <Box marginTop={'10px'} display={'flex'} flexDirection={'row'}>
        <Box  width={'70px'} textAlign={'center'}>
        <Typography>Items</Typography>
        <Typography>{`${obtainedValues.current} Found`}</Typography>
        </Box>
        <Box position={'relative'} marginLeft={'40px'} width={'80%'}  >
            <Search sx={{position:'absolute', marginLeft:'10px', height:'40px'}} />
        <Input onKeyDown={(event) => event.key == 'Enter' ? setSearchValue(event.currentTarget.value) : ''} inputProps={{style:{marginLeft:'40px'}}} sx={{border:'solid',borderRadius:'20px', width:'100%'}}>
        </Input>
        </Box>
        <Box marginLeft={'40px'}>
        <IconButton onClick={() => setViewSelector('line')} children={<Reorder fontSize="large"/>}/>
        <IconButton onClick={() => setViewSelector('square')} children={<ViewModule fontSize="large"/>}/>
        </Box>
        </Box>


            {/* Items Blocks */}
            <Box padding={'10px'}  height={'86vh'} width={'98%'}  sx={{overflowY:'scroll'}} display={'flex'} flexWrap={'wrap'}>
        <Box width={'100%'} display={'flex'} flexWrap={'wrap'} sx={{flexDirection:viewType.flexDirection}}>
           {searchValue == '' ? allValues() : searchValueFun()}
        </Box>
           <Box position={'relative'} marginTop={'50px'} width={'100%'}   justifyContent={'end'}>
            <Box position={'absolute'} right={'0px'} bottom={'30px'} display={'flex'} flexWrap={'wrap'} height={'20px'}>
            <Button variant="contained" onClick={previousPage} disabled={itemPages == 1}>{`<`}</Button>
            <Typography marginTop={'5px'}>{itemPages}</Typography>
            <Button variant="contained" onClick={nextPage} disabled={itemPages == maxPage}>{`>`}</Button>
            </Box>
           </Box>
            </Box>

        </Box>
        </>
    )
}