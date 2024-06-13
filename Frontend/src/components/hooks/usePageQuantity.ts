import { useState } from "react"
import { useRef } from "react"

export const usePageQuantity = () =>{
    const arrayOfElements = useRef()
    const pageQuantity = useRef()

    return({
        pageQuantity,
        arrayOfElements
    }
    )
}