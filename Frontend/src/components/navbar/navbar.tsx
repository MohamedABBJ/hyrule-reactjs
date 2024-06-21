import { AccountCircle, GitHub, Image } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
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
      <Grid2 sx={{ backgroundColor: "#2c387e" }} height={"15px"}></Grid2>
      {/* MUI experimental component need to change when V6 releases Grid1 will be deprecated. */}
      <Grid2
        bgcolor={"#3f51b5"}
        container
        spacing={0}
        sx={{
          "& button": {
            color: "white",
            fontFamily: "HyruleFont",
            fontSize: "1.3rem",
          },
        }}
      >
        <Grid2>
          <Link to={"/"}>
            <Button>Home</Button>
          </Link>
        </Grid2>
        <Grid2>
          <Link to={"/items"}>
            <Button>Items</Button>
          </Link>
        </Grid2>
        <Grid2>
          <Link to={'./'}>
            <Button>
              <EnemiesBtn />
            </Button>
          </Link>
        </Grid2>
        <Grid2>
          <Link to={'./'}>
            <Button>Map</Button>
          </Link>
        </Grid2>
        <Grid2>
          <Link to={'./'}>
            <Button>About</Button>
          </Link>
        </Grid2>
        {/* Note, this is absolute, try a way to make it relative */}
        <Grid2  container position={'absolute'} width={'100%'} justifyContent={'end'}>
          <Grid2>
            <Link to={'./'}>
            <IconButton children={<GitHub/>}/>
            </Link>
          </Grid2>
          <Grid2>
            <Link to={'./'}>
              <IconButton
                children={
                  <AccountCircle
                  />
                }
              />
            </Link>
          </Grid2>
        </Grid2>

      </Grid2>
    </>
  );
};
//"../../../public/assets/github-logo.webp"
export default NavBar;
