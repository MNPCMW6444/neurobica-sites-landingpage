import { AppBar, Button, Grid, Toolbar, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import orange from "@mui/material/colors/orange";
import { useEffect, useState } from "react";
import logo from "./logo512.png";
import Michael from "./Michael";
import Michaelforreal from "./Michaelforreal";
import Mobile from "./Mobile";
import Nav from "./Nav";

const topbar = {
  backgroundColor: orange[100],
  width: "100vw",
  height: "50px",
};

const logoSx = {
  paddingLeft: "10px",
  height: "50px",
  width: "50px",
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
    <Box>
      {ismobile ? (
        <Mobile />
      ) : (
        <AppBar position="fixed" sx={topbar}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            wrap="nowrap"
          >
            <Grid item>
              <Box component="img" src={logo} sx={logoSx}></Box>
            </Grid>
            <Nav dir="row" />
            <Grid item>
              <Michaelforreal />
            </Grid>
          </Grid>
        </AppBar>
      )}
      <Box sx={{ paddingTop: "80px" }}>
        <Grid
          container
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={1}
        >
          <Grid item>
            <Typography variant="h1" component="h1">
              Neurobica
            </Typography>
          </Grid>
          <Grid item>
            <Michael />
          </Grid>
          <Grid item>
            <Michael />
          </Grid>
          <Grid item>
            <Michael />
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
