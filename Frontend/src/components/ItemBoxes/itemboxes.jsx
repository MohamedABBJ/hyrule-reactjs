import { MoreHoriz, StarBorder } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

export const ItemBoxes = (props) =>{

    const allTagOptions = () =>{
        if(props.category == 'monsters'){
            return 'red'
        }
        if(props.category == 'equipment'){
            return 'green'
        }
        if(props.category == 'treasure'){
            return 'yellow'
        }
        if(props.category == 'materials'){
            return 'brown'
        }
    }


    return(
        <>
         <Box position={'relative'} border={'solid #F3F3F3 2px'} borderRadius={'3px'}  marginBottom={'5px'} marginLeft={'5px'} width={'285px'} height={'200px'}>
                <Box padding={'15px'}>
                <Box display={'flex'} flexDirection={'row'}>
                 <Box sx={{backgroundColor:allTagOptions()}} marginRight={'5px'} marginTop={'5px'}  height={'10px'} width={'10px'} borderRadius={'600px'}/>
                 <Typography>{props.category}</Typography>
                    </Box>
                </Box>
                <Box marginTop={'5px'} marginBottom={'10px'} textAlign={'center'}>
                   <Typography> {props.name}</Typography>
                </Box>
                <Box width={'100%'} display={'flex'} justifyContent={'center'}>
                <Box maxHeight={'70px'} width={'80%'}>
                   <Typography fontSize={'14px'} color={'#9C9C9C'}> {props.description.length > 90 ? props.description.substring(0,90) + '...' : props.description}</Typography>
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