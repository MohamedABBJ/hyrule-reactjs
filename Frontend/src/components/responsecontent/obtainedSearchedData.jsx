import { Box, Button, Typography } from "@mui/material"
import React, { Dispatch } from "react"


const ObtainedSearchedData = ({data}) =>{
    

    return(
        <>
        {/* Outer Content */}
        <Box sx={{backgroundColor:'rgb(255, 255, 255, 0.8)'}} position={'relative'} width={'60%'} height={'65%'} borderRadius={'10px'} border={'solid white'}>
                    {/* Top left content */}
                    <Box display={'flex'} height={'15%'} alignItems={'center'}  justifyContent={'center'}  position={'absolute'} width={'60%'}>
                    <Button onClick={() => data.setDataGetted(data.defaultState)} sx={{height:'60%'}} variant="outlined">Search Again</Button>
                    </Box>
                    {/* Name */}
                    <Box position={'absolute'} width={'60%'} top={'15%'}>
                    <Typography borderTop={'solid black 1px'} borderBottom={'solid black 1px'} width={'100%'} textAlign={'center'}>{`Name: ${data.dataGetted && data.dataGetted.name}`}</Typography>
                    </Box>
                    {/* Description */}
                    <Box sx={{overflowX:'hidden', overflowY:'scroll'}} display={'flex'} alignItems={'center'} justifyContent={'center'} height={'47%'} width={'60%'} left={'0%'} top={'25%'} position={'absolute'}>
                        <Box width={'90%'}>
                            <Typography textAlign={'justify'}>{`${data.dataGetted && data.dataGetted.description}`}</Typography>
                        </Box>
                    </Box>
                    {/* Category */}
                    <Box  position={'absolute'} width={'60%'} bottom={'20%'}>
                    <Typography borderTop={'solid black 1px'} borderBottom={'solid black 1px'} textAlign={'center'} >{`Category: ${data.dataGetted && data.dataGetted.category}`}</Typography>
                    </Box>
                    {/* Drops */}
                    <Box textAlign={'center'} position={'absolute'} width={'60%'} bottom={'5%'}>
                    <Typography  borderTop={'solid black 1px'} borderBottom={'solid black 1px'} left={'5%'}>{`Drops: ${data.dataGetted && data.dataGetted.drops.map((el) => el)}`}</Typography>
                    </Box>
                    {/* Right Content*/}
                    <Box position={'absolute'} borderLeft={'solid 1px'} width={'40%'} height={'100%'} right={'0px'}>
                        {/* Right Top Content */}
                        <Box borderBottom={'solid 1px'} width={'100%'} height={'10%'} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'absolute'}>
                    <Typography>{`ID:${data.dataGetted && data.dataGetted.id}`}</Typography>
                        </Box>
                        {/* RightBottom Content */}
                        <Box top={'10%'} width={'100%'} height={'90%'}  display={'flex'} justifyContent={'center'} alignItems={'center'} position={'absolute'}>
                            <Box border={'solid 2px'} maxWidth={'80%'} maxHeight={'80%'} component={'img'} src={data.dataGetted && data.dataGetted.image}></Box>
                        </Box>
                    </Box>
                </Box>
        </>
    )

}

export default ObtainedSearchedData
