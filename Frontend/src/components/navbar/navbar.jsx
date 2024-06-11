import { AccountCircle, GitHub, Image } from "@mui/icons-material";
import { Box, Button, Icon, IconButton, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import EnemiesBtn from "../anims/enemiesBtn";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

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
      <Box sx={{ backgroundColor: "#2c387e" }} height={"15px"}></Box>
      {/* MUI experimental component need to change when V6 releases Grid1 will be deprecated. */}
      <Grid2
        bgcolor={"#3f51b5"}
        container
        spacing={2}
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
          <Link>
            <Button>
              <EnemiesBtn />
            </Button>
          </Link>
        </Grid2>
        <Grid2>
          <Link>
            <Button>Map</Button>
          </Link>
        </Grid2>
        <Grid2>
          <Link>
            <Button>About</Button>
          </Link>
        </Grid2>
        <Grid2 border={'solid'} container display={'flex'} justifyContent={'end'}>
          <Grid2>
            <Link>
            <IconButton children={<GitHub/>}/>
            </Link>
          </Grid2>
          <Grid2>
            <Link>
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
