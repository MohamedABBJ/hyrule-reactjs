import { MoreHoriz, StarBorder } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"
import { useEffect } from "react"

export const ItemBoxes = (props) =>{
    console.log(props)
    const allTagOptions = () =>{
        if(props.element.category == 'monsters'){
            return 'red'
        }
        if(props.element.category == 'equipment'){
            return 'green'
        }
        if(props.element.category == 'treasure'){
            return 'yellow'
        }
        if(props.element.category == 'materials'){
            return 'brown'
        }
    }


    return(
        <>
         <Box position={'relative'} border={'solid #F3F3F3 2px'} borderRadius={'3px'}  marginBottom={'5px'} marginLeft={'5px'} width={'285px'} height={'200px'}>
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
        </>
    )
}