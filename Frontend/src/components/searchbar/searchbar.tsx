import { Autocomplete, Box, IconButton, TextField } from "@mui/material"
import React, { Dispatch, HTMLInputAutoCompleteAttribute, SetStateAction, useState } from "react"
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import useRequestAll from "../hooks/useRequestAll";

const SearchBar = (prop:{setInputValue:Dispatch<SetStateAction<string>>}) =>{

const [opened, setOpened] = useState(false)
const [handleInputData, setHandleInputData] = useState('')


    const makeQuery = ()=>{
      return console.log('si')
    }
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
    onChange={(event) =>  {
      setHandleInputData((event.target as HTMLInputElement).value)
    }}
    id="combo-box-demo"
    options={[]}
    renderInput={(params) => (  
      <TextField 
      {...params}
      size="small"   
      sx={{
        "& .MuiInputBase-root": { height: "30px" },
      }}
      variant="standard"
      onKeyDown={(event) => event.key == 'Enter' ? prop.setInputValue((event.currentTarget as HTMLInputElement).value ) : null} 
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