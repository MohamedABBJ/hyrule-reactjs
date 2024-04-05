import { Box, Button, Typography } from "@mui/material"
import React, { Dispatch } from "react"


const ObtainedSearchedData = (dataGetted) =>{

    return(
                <Box position={'relative'} width={'60%'} height={'65%'} borderRadius={'5%'} border={'solid black'}>
                    {/* Top left content */}
                    <Box display={'flex'} justifyContent={'center'} position={'absolute'} width={'60%'} top={'5%'}>
                    <Button variant="outlined">Search Again</Button>
                    </Box>
                    <Box  position={'absolute'} width={'60%'} top={'15%'}>
                    <Typography border={'solid black'} width={'99%'} textAlign={'center'}>{`Name: ${dataGetted.name}`}</Typography>
                    </Box>
                    <Box  position={'absolute'} width={'60%'} top={'15%'}>
                    <Typography border={'solid black'} width={'99%'} textAlign={'center'}>{`Name: ${dataGetted.name}`}</Typography>
                    </Box>
                    <Typography position={'absolute'} width={'50%'} left={'5%'} top={'25%'}>{`${dataGetted.description}`}</Typography>
                    <Box  position={'absolute'} border={'solid'} width={'59.3%'} bottom={'35%'}>
                    <Typography textAlign={'center'} >{`Category: ${dataGetted.category}`}</Typography>
                    </Box>
                    <Box textAlign={'center'} position={'absolute'} border={'solid'} width={'59.3%'} bottom={'20%'}>
                    <Typography left={'5%'}>{`Drops`}</Typography>
                    </Box>
                    {/* Right Content*/}
                    <Box position={'absolute'} borderLeft={'solid'} width={'40%'} height={'100%'} right={'0px'}>
                        {/* Right Top Content */}
                        <Box borderBottom={'solid'} width={'100%'} height={'10%'} display={'flex'} justifyContent={'center'} alignItems={'center'} position={'absolute'}>
                    <Typography>{`ID:${dataGetted.id}`}</Typography>
                        </Box>
                        {/* RightBottom Content */}
                        <Box top={'10%'} width={'100%'} height={'90%'}  display={'flex'} justifyContent={'center'} alignItems={'center'} position={'absolute'}>
                            <Box border={'solid 2px'} maxWidth={'80%'} maxHeight={'80%'} component={'img'} src={dataGetted.image}></Box>
                        </Box>
                    </Box>

                </Box>
    )

}

export default ObtainedSearchedData
