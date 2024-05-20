import { useRef, useState } from "react"

const useBoxesView = () =>{
    const [viewSelector, setViewSelector] = useState('square')
    const squareView = viewSelector == 'square'
    const lineView = viewSelector == 'line'

    const viewType ={
        flexDirection: squareView ? 'row' : lineView ? 'column' : '',
        height: squareView ? '200px' : lineView ? '100px' : '',
    }

    return ({setViewSelector, viewType})
}

export default useBoxesView