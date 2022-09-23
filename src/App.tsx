import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import orange from "@mui/material/colors/orange";
import { useEffect, useState } from "react";
import logo from "./logo512.png";
import Michael from "./Michael";
import Michaelforreal from "./Michaelforreal";
import Mobile from "./Mobile";
import Nav from "./Nav";
import Register from "./Register";

const allSx = {
  width: "100px",
  height: "100px",
};

const logoSx = {
  height: "60px",
  width: "60px",
  position: "static",
  top: "0px",
  left: "0px",
};

function App() {
  const [ismobile, setismobile] = useState(window.innerWidth < 600);
  useEffect(() => {
    const handleResize = () => {
      setismobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);
  });

  return (
    <Box sx={allSx}>
      {ismobile ? (
        <Mobile />
      ) : (
        <AppBar
          position="fixed"
          sx={{
            backgroundColor: orange[100],
            height: "60px",
          }}
        >
          <Toolbar>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid item>
                <Box component="img" src={logo} sx={logoSx}></Box>
              </Grid>

              <Grid item>
                <Nav dir="row" />
              </Grid>
              <Grid item>
                <Michaelforreal />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
      <Box sx={{ paddingTop: "80px" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
          height="100vh"
          width="100vw"
          wrap="nowrap"
        >
          <Grid item>
            <Register />
          </Grid>
          <Grid item>
            <Michael />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;
