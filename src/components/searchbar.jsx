import { Box, Button, Icon, Input, TextField } from "@mui/material"
import axios from "axios"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

const SearchBar = (setDataGetted) =>{
const [inputSearchData, setInputSearchData] = useState()

    const makeQuery = async() =>{
      try {
        const response = await axios.get(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/` +'moblin')
        const objectData = response.data.data
      } catch (error) {
        console.log('error happened')  
      }
      
    }


  
    return(
      <>
        <Input onChange={(event) => setInputSearchData({searchData:event.target.value})}/>
        <Button onClick={() =>  makeQuery()}>Submit</Button>
      </>
        
  
    )
}

export default SearchBar    