import { Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import ObtainedSearchedData from "../responsecontent/obtainedSearchedData"
import ObtainedValues from "../../interfaces/obtainedValues"
import { Fragment } from "react/jsx-runtime"
import React from "react"

const ShowDetails = (props:{itemSelected:ObtainedValues}) =>{

    return (
      <Box display={'flex'} justifyContent={'center'} alignItems={'center'}  position={'absolute'} width={'100%'} height={'100%'}>
      <Box sx={{backgroundColor:'black', opacity:'0.22'}} zIndex={'1'} position={'absolute'}  width={'100%'} height={'100%'}/>
      <ObtainedSearchedData dataObtained={props.itemSelected}/>
      </Box>

    );
}

export default ShowDetails