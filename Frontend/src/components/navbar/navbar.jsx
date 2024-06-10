import { AccountCircle, Image } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = (type) => {
  const conditionTypeTop = type.props == "top";
  const conditionTypeSide = type.props == "side";

  const navbarForm = {
    height: conditionTypeTop ? "8vh" : conditionTypeSide ? "100vh" : "",
    width: conditionTypeTop ? "100%" : conditionTypeSide ? "6%" : "",
    position: conditionTypeTop ? "relative" : conditionTypeSide ? "fixed" : "",
  };

  return (
    <>
      <Box
        display={"flex"}
        alignItems={"center"}
        height={navbarForm.height}
        width={navbarForm.width}
        bgcolor={"aqua"}
        position={navbarForm.position}
      >
        <Box display={'flex'} alignItems={'center'} height={'100%'} border={"solid"} width={"100%"}>
          <Link to={"/"}>
            <Box component={"img"} src="../../public/assets/" />
          </Link>
          <Link to={"/items"}>
            <Button>
                Items
            </Button>
          </Link>
          <Link>
          <Button>
                Enemies
            </Button>
          </Link>
          <Link>
          <Button>
                Map
            </Button>
          </Link>
          <Link>
          <Button>
                About
            </Button>
        </Link>
        </Box>
        <Box position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'end'} height={'100%'} width={"20%"} border={"solid"}>
          <Link style={{height:'100%', display:'flex', alignItems:'center', position:'relative'}}>
          <Button sx={{height:'100%'}}>
           <Box height={'100%'} component={'img'} src="../../../public/assets/github-logo.webp"/>
          </Button>
          </Link>
          <Link style={{height:'100%', display:'flex', alignItems:'center', position:'relative'}}>          
            <IconButton sx={{height:'100%'}} children={<AccountCircle sx={{width:'130%', height:'130%'}}/>}/>
          </Link>
        </Box>
      </Box>
    </>
  );
};
//"../../../public/assets/github-logo.webp"
export default NavBar;
