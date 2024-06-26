import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import ObtainedSearchedData from "../responsecontent/obtainedSearchedData"
import ObtainedValues from "../../interfaces/obtainedValues"

const ShowDetails = (props:{element:ObtainedValues}) =>{

    const dataObtained = props.element
    
    return(
        <>
        <Dialog
        open={false}
        keepMounted
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Use Google's location service?"}</DialogTitle>
        <DialogContent>
         <ObtainedSearchedData {...{dataObtained}}/>
        </DialogContent>
        <DialogActions>
        
        </DialogActions>
      </Dialog>
        </>
    )
}

export default ShowDetails