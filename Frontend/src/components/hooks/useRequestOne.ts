import axios from "axios"
import { useEffect, useState } from "react"
interface ObtainedValues{
  id:number,
  name:string,
  drops:[],
  description:string,
  category:string,
  image:string,
  state:boolean
}

const valuesGetted: ObtainedValues = {
  id:0,
  name:'',
  drops:[],
  description:'',
  category:'',
  image:'',
  state:false
}

export const useRequestOne = () =>{
    const requestOneURL: string = 'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/'
    const [inputValue, setInputValue] = useState(<string>(''))
    const [dataObtained, setDataObtained] = useState(<ObtainedValues>(valuesGetted))

    const makeQuery = async() =>{
        try {
          const response = await axios.get(`${requestOneURL + '' + inputValue}`)
          const objectData = response.data.data
          setDataObtained({
            id :objectData.id,
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
        setDataObtained(valuesGetted)
      }
    

      useEffect(() => { 
        inputValue == '' ? removeValues() : makeQuery()
      }, [inputValue])
      
    

    return{
        dataObtained,
        setInputValue,
    }
    
}