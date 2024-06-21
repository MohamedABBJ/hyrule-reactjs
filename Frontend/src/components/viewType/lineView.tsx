import { MoreHoriz, StarBorder } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

export const LineView = (props) =>{
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
         <Box position={'relative'} border={'solid #545454 2px'} width={'100%'} borderRadius={'5px'}  marginBottom={'5px'} marginLeft={'5px'}  height={'100px'}>
                <Box  padding={'15px'}>
                <Box  width={'100%'} display={'flex'} flexDirection={'row'}>
                 <Box sx={{backgroundColor:allTagOptions()}} marginRight={'5px'} marginTop={'5px'}  height={'10px'} width={'10px'} borderRadius={'600px'}/>
                 <Typography>{props.element.category}</Typography>
                 <Typography marginLeft={'10px'}> {props.element.name}</Typography>
                 <Typography  marginLeft={'10px'} maxWidth={'60%'} maxHeight={'20px'} whiteSpace={'nowrap'} textOverflow={'ellipsis'} overflow={'hidden'} fontSize={'14px'} color={'#9C9C9C'}> {props.element.description}</Typography>
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
