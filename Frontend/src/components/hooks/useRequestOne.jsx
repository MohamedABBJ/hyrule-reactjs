import axios from "axios"
import { useEffect, useRef, useState } from "react"

export const useRequestOne = () =>{
    const requestOneURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/'
    const [inputValue, setInputValue] = useState('')
    const [dataObtained, setDataObtained] = useState({})
  

    const makeQuery = async() =>{
        try {
          const response = await axios.get(requestOneURL + inputValue)
          const objectData = response.data.data
          setDataObtained({
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

      const removeValues = () =>{
        setDataObtained({
          id:'',
            name:'',
            drops:'',
            description:'',
            category:'',
            image:'',
            state:false
        })
      }
    

      useEffect(() => { 
        inputValue == false ? removeValues() : makeQuery()
      }, [inputValue])
      
    

    return{
        dataObtained,
        setInputValue,
    }
    
}