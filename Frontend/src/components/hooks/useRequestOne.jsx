import axios from "axios"
import { useEffect, useState } from "react"

export const useRequestOne = () =>{
    const requestOneURL = 'https://botw-compendium.herokuapp.com/api/v3/compendium/entry/'
    const [dataObtained, setDataObtained] = useState({})

        
        const makeQueryd = async(dataRequested) =>{
           const {data:dataVal} = axios.get(requestOneURL + dataRequested)
           setDataObtained(dataVal)
            console.log(dataRequested)
        }
    

    return{
        dataObtained,
        makeQueryd
    }
    
}