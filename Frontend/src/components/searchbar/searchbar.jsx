import { Box, Button, Icon, Input, TextField } from "@mui/material"
import axios from "axios"
import React, { Dispatch, SetStateAction, useEffect, useState } from "react"

const SearchBar = (prop) =>{
const [inputSearchData, setInputSearchData] = useState()

    const makeQuery = async() =>{
      try {
        const response = await axios.get(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/` +'moblin')
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
        <Input onChange={(event) => setInputSearchData(event.target.value)}/>
        <Button onClick={() =>  makeQuery()}>Submit</Button>
      </>
        
  
    )
}

export default SearchBar    