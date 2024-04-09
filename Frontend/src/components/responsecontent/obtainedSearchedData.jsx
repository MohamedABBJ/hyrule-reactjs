import { Box, Button, Typography } from "@mui/material"
import React, { Dispatch } from "react"


const ObtainedSearchedData = ({data}) =>{
    

    return(
        <>
        {/* Outer Content */}
        <Box position={'relative'} width={'60%'} height={'65%'} borderRadius={'5%'} border={'solid black'}>
                    {/* Top left content */}
                    <Box display={'flex'} justifyContent={'center'} position={'absolute'} width={'60%'} top={'5%'}>
                    <Button variant="outlined">Search Again</Button>
                    </Box>
                    <Box position={'absolute'} width={'60%'} top={'15%'}>
                    <Typography borderTop={'solid black'} borderBottom={'solid black'} width={'100%'} textAlign={'center'}>{`Name: ${data.dataGetted && data.dataGetted.name}`}</Typography>
                    </Box>
                    <Box overflow={{x:'hidden', y:'scroll'}} height={'30%'} width={'60%'} left={'0%'} top={'25%'} position={'absolute'}>
                    <Typography>{`${data.dataGetted && data.dataGetted.description}`}</Typography>
                    </Box>
                    <Box  position={'absolute'} width={'60%'} bottom={'35%'}>
                    <Typography borderTop={'solid black'} borderBottom={'solid black'} textAlign={'center'} >{`Category: ${data.dataGetted && data.dataGetted.category}`}</Typography>
                    </Box>
                    <Box textAlign={'center'} position={'absolute'} width={'60%'} bottom={'20%'}>
                    <Typography  borderTop={'solid black'} borderBottom={'solid black'} left={'5%'}>{`Drops: ${data.dataGetted && data.dataGetted.drops.map((el) => el)}`}</Typography>
                    </Box>
                    {/* Right Content*/}
                    <Box position={'absolute'} borderLeft={'solid'} width={'40%'} height={'100%'} right={'0px'}>
                        {/* Right Top Content */}
                        <Box borderBottom={'solid'} width={'100%'} height={'10%'} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'absolute'}>
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
