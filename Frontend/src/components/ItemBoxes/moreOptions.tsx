import { MoreHoriz } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useContext, useState } from "react";
import ShowDetails from "./showDetails";
import { useRequestOne } from "../hooks/useRequestOne";
import ObtainedValues from "../../interfaces/obtainedValues";


const MoreOptions = (props:{element:ObtainedValues, setMoreOptionsItemSelectedValue:React.Dispatch<React.SetStateAction<ObtainedValues>>}) =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const [showDetails, setShowDetails] = useState(false)
    const open = Boolean(anchorEl);
    const {dataObtained,setInputValue} = useRequestOne()
    const [openState, setOpenState] = useState<boolean>(false)

  
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
        <MenuItem onClick={() => (setOpenState(true),setAnchorEl(null), props.setMoreOptionsItemSelectedValue(props.element))}>More details</MenuItem>
      </Menu>
        </>
    )
}

export default MoreOptions