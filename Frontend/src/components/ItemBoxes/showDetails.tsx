import { Box, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material"
import ObtainedSearchedData from "../responsecontent/obtainedSearchedData"

const ShowDetails = (props) =>{
    const dataObtained = props.dataObtained
    return(
        <>
        <Dialog
        open={open}
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