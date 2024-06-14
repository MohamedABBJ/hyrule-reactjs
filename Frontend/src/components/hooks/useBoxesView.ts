import { useRef, useState } from "react"



const useBoxesView = () =>{
    const [viewSelector, setViewSelector] = useState(<string>(''))
    const squareView : boolean = viewSelector == 'square'
    const lineView : boolean = viewSelector == 'line'

    const viewType ={
        flexDirection: squareView ? 'row' : lineView ? 'column' : '',
    }

        
    return ({setViewSelector, viewSelector, viewType})
}

export default useBoxesView