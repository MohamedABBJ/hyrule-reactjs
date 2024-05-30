import { MoreHoriz } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import ShowDetails from "./showDetails";
import { useRequestOne } from "../hooks/useRequestOne";

const MoreOptions = (props) =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [showDetails, setShowDetails] = useState(false)
    const open = Boolean(anchorEl);
    const {dataObtained,setInputValue} = useRequestOne()
  
    const handleClose = () => {
        setAnchorEl(null);
        setShowDetails(true)
        setInputValue(props.element.name)
      };

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };

    return(
        <>
         <Button onClick={handleClick} sx={{float:'right'}}>
                <MoreHoriz/>
         </Button>
       <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>More details</MenuItem>
        <MenuItem onClick={handleClose}>Save</MenuItem>
      </Menu>
      {showDetails ? <ShowDetails {...{dataObtained}}/> : null}
        </>
    )
}

export default MoreOptions