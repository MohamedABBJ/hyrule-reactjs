import { MoreHoriz } from "@mui/icons-material";
import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const MoreOptions = () =>{
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
   
    const handleClose = () => {
        setAnchorEl(null);
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
        </>
    )
}

export default MoreOptions