import { Box } from "@mui/material"
import { SquareView } from "../viewType/squareView"
import { LineView } from "../viewType/lineView"
import ObtainedValues from "../../interfaces/obtainedValues"

export const ItemBoxes = (props:{viewSelector:string, element:ObtainedValues,setMoreOptionsItemSelectedValue:React.Dispatch<React.SetStateAction<ObtainedValues>>}) =>{
    const element = props.element
    const setMoreOptionsItemSelectedValue = props.setMoreOptionsItemSelectedValue
    return props.viewSelector == 'square' ?
    <Box>
        <SquareView {...{element,setMoreOptionsItemSelectedValue}}/>
    </Box>
    :
    props.viewSelector == 'line' ?
    
    <LineView {...{element,setMoreOptionsItemSelectedValue}}/>

    :
    ''
    
}

/*
<Box position={'relative'} border={'solid #ff0000 2px'} borderRadius={'3px'}  marginBottom={'5px'} marginLeft={'5px'} width={'285px'} height={'200px'}>
                <Box padding={'15px'}>
                <Box display={'flex'} flexDirection={'row'}>
                 <Box sx={{backgroundColor:allTagOptions()}} marginRight={'5px'} marginTop={'5px'}  height={'10px'} width={'10px'} borderRadius={'600px'}/>
                 <Typography>{props.element.category}</Typography>
                    </Box>
                </Box>
                <Box marginTop={'5px'} marginBottom={'10px'} textAlign={'center'}>
                   <Typography> {props.element.name}</Typography>
                </Box>
                <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                <Box maxHeight={'70px'} width={'80%'}>
                   <Typography fontSize={'14px'} color={'#9C9C9C'}> {props.element.description.length > 90 ? props.element.description.substring(0,90) + '...' : props.description}</Typography>
                </Box>
                </Box>
                <Box sx={{backgroundColor:'#F3F3F3'}} position={'absolute'} width={'100%'} bottom={'0px'} >
                <Button>
                <StarBorder/>
                </Button>
                <Button sx={{float:'right'}}>
                <MoreHoriz/>
                </Button>
                </Box>

        </Box>

*/