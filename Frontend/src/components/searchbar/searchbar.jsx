import { Autocomplete, Box, Button, Icon, IconButton, Input, TextField } from "@mui/material"
import axios from "axios"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import useRequestAll from "../hooks/useRequestAll";
import { useRequestOne } from "../hooks/useRequestOne";

const SearchBar = (prop) =>{
const [inputSearchData, setInputSearchData] = useState()
const {data,loading} = useRequestAll()
const allData = loading ? null : data.data.map((element) => element.name) 

    const {
      dataObtained,
      makeQueryd} = useRequestOne()

      useEffect(() => {
        makeQueryd('moblin')
      }, [])

    const makeQuery = async() =>{
      try {
        const response = await axios.get(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/` + inputSearchData)
        const objectData = response.data.data
        prop.setDataGetted({
          id:objectData.id,
          name:objectData.name,
          drops:objectData.drops,
          description:objectData.description,
          category:objectData.category,
          image:objectData.image,
          state:true
        })

      } catch (error) {
        console.log(error)  
      }
    }

    return(
      <>
      <Box position={'relative'} border={'solid white'} sx={{backgroundColor: 'rgb(255, 255, 255,0.3)'}} borderRadius={'200px'} width={'500px'} >
        <Box zIndex={'2'} top={'-3px'}  position={'absolute'}>
        <IconButton onClick={() => makeQuery()}>
          <SearchIcon/>
        </IconButton>
        </Box>
        <Box zIndex={'2'} top={'-3px'} right={'0px'}  position={'absolute'}>
        <IconButton >
          <MicIcon/>
        </IconButton>
        </Box>
        <Autocomplete
        onChange={(e) => setInputSearchData(e.target.innerHTML)}
        id="free-solo-demo"
        freeSolo
        options={allData}
        renderInput={(params) => <TextField onKeyDown={(event) => event.key == 'Enter' ?  makeQuery() : null} onChange={(event) => setInputSearchData(event.target.value)} {...params} label="freeSolo" />}
      />
        
        <Input onKeyDown={(event) => event.key == 'Enter' ? console.log(event.target.value) : null} placeholder="Search here" inputProps={{style:{textAlign:'center'}}} disableUnderline fullWidth/>
      </Box>
      </>
        
  
    )
}

export default SearchBar    