import { Autocomplete, Box, Button, CircularProgress, createFilterOptions, Icon, IconButton, Input, OutlinedInput, TextField } from "@mui/material"
import axios from "axios"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import useRequestAll from "../hooks/useRequestAll";
import { useRequestOne } from "../hooks/useRequestOne";

const SearchBar = (prop) =>{
const [opened, setOpened] = useState(false)
const {data,loading} = useRequestAll()
const allData = loading ? [''] : data.data.map((element) => element.name) 
const [handleInputData, setHandleInputData] = useState('')
  
  
    return(
      <>
      <Box display={'flex'} alignItems={'center'} justifyContent={'center'} position={'relative'} border={'solid white'} sx={{backgroundColor: 'rgb(255, 255, 255,0.3)'}} borderRadius={'200px'} width={'500px'} >
        <Box zIndex={'2'} top={'-3px'}  >
        <IconButton onClick={() => makeQuery()}>
          <SearchIcon/>
        </IconButton>
        </Box>
        <Box width={'100%'}  >
        <Box width={'90%'} height={'30px'}  >
      {/* Will do this, try to make the border in the autocomplete with Boxes and the icons with it, should work. */}
        <Autocomplete
    freeSolo
    onChange={(event) =>  setHandleInputData(event.target.value)}
    id="combo-box-demo"
    options={allData}
    renderInput={(params) => (  
      <TextField 
      {...params}
      size="small"   
      sx={{
        "& .MuiInputBase-root": { height: "30px" },
      }}
      variant="standard"
      onKeyDown={(event) => event.key == 'Enter' ? prop.setInputValue(event.target.value) : null} 
      />
    )}
  />
        </Box>
        </Box>
        <Box zIndex={'2'} top={'-3px'} right={'0px'}  position={'absolute'}>
        <IconButton >
          <MicIcon/>
        </IconButton>
        </Box>
      </Box>
      </>
        
  
    )
}

export default SearchBar    