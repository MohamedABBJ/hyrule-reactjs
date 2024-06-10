import { AccountCircle, Image } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import EnemiesBtn from "../anims/enemiesBtn";

const NavBar = (type) => {
  const conditionTypeTop = type.props == "top";
  const conditionTypeSide = type.props == "side";

  const navbarForm = {
    height: conditionTypeTop ? "50px" : conditionTypeSide ? "100vh" : "",
    width: conditionTypeTop ? "100%" : conditionTypeSide ? "6%" : "",
    position: conditionTypeTop ? "relative" : conditionTypeSide ? "fixed" : "",
  };

  return (
    <>
    <Box  sx={{backgroundColor:'#2c387e'}} height={'15px'}></Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        height={navbarForm.height}
        width={navbarForm.width}
        bgcolor={'#3f51b5'}
        position={navbarForm.position}
      >
        <Box sx={{'& button': {color:'white', fontFamily:'HyruleFont', fontSize:'1.3rem'}, '& a':{marginLeft:'50px'}}} display={'flex'} alignItems={'center'} height={'100%'} width={"100%"}>
          <Link to={"/"}>
            <Button>
              Home
            </Button>
          </Link>
          <Link to={"/items"}>
            <Button>
                Items
            </Button>
          </Link>
          <Link>
          <Button>
            <EnemiesBtn/>     
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
        <Box position={'relative'} display={'flex'} alignItems={'center'} justifyContent={'end'} height={'100%'} width={"20%"}>
          <Link style={{height:'100%', display:'flex', alignItems:'center', position:'relative'}}>
          <Button sx={{height:'100%'}}>
           <Box height={'100%'} component={'img'} src="../../../public/assets/github-logo.webp"/>
          </Button>
          </Link>
          <Link style={{height:'100%', display:'flex', alignItems:'center', position:'relative'}}>          
            <IconButton sx={{height:'100%'}} children={<AccountCircle sx={{width:'130%', height:'130%', color:'white'}}/>}/>
          </Link>
        </Box>
      </Box>
    </>
  );
};
//"../../../public/assets/github-logo.webp"
export default NavBar;
