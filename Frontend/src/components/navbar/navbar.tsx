import { AccountCircle, GitHub, Image } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import EnemiesBtn from "../anims/enemiesBtn";

const NavBar = (type:{props:string}) => {
  const conditionTypeTop = type.props == "top";
  const conditionTypeSide = type.props == "side";

  const navbarForm = {
    height: conditionTypeTop ? "50px" : conditionTypeSide ? "100vh" : "",
    width: conditionTypeTop ? "100%" : conditionTypeSide ? "6%" : "",
    position: conditionTypeTop ? "relative" : conditionTypeSide ? "fixed" : "",
  };

  return (
    <>
      <Box sx={{ backgroundColor: "#2c387e" }} height={"15px"}></Box>
      {/* MUI experimental component need to change when V6 releases Grid1 will be deprecated. */}
      <Box
      display={'flex'}
        bgcolor={"#3f51b5"}
        sx={{
          "& button": {
            color: "white",
            fontFamily: "HyruleFont",
            fontSize: "1.3rem",
          },
        }}
      >
        <Box>
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
        </Box>
        <Box>
          <Link to={"/items"}>
            <Button>Items</Button>
          </Link>
        </Box>
        <Box>
          <Link to={'./'}>
            <EnemiesBtn/>
          </Link>
        </Box>
        <Box>
          <Link to={'./'}>
            <Button>Map</Button>
          </Link>
        </Box>
        <Box>
          <Link to={'./'}>
            <Button>About</Button>
          </Link>
        </Box>
        <Box marginLeft={'auto'} display={'flex'}>
          <Box>
            <Link to={'./'}>
            <IconButton children={<GitHub/>}/>
            </Link>
          </Box>
          <Box>
            <Link to={'./'}>
              <IconButton
                children={
                  <AccountCircle
                  />
                }
              />
            </Link>
          </Box>
        </Box>

      </Box>
    </>
  );
};
//"../../../public/assets/github-logo.webp"
export default NavBar;
