import { AppBar, Grid, Toolbar } from "@mui/material";
import Box from "@mui/material/Box";
import orange from "@mui/material/colors/orange";
import { useEffect, useRef, useState } from "react";
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

  const whyRef = useRef(null);
  const scrollToWhy = () =>
    (whyRef.current as any).scrollIntoView({ behavior: "smooth" });

  const homeRef = useRef(null);
  const scrollToHome = () =>
    (homeRef.current as any).scrollIntoView({ behavior: "smooth" });

  const featuresRef = useRef(null);
  const scrollToFeatores = () =>
    (featuresRef.current as any).scrollIntoView({ behavior: "smooth" });

  const pricingRef = useRef(null);
  const scrollToPricing = () =>
    (pricingRef.current as any).scrollIntoView({ behavior: "smooth" });

  const actions = {
    why: scrollToWhy,
    features: scrollToFeatores,
    pricing: scrollToPricing,
  };

  const actionsM = {
    why: () => setTimeout(() => scrollToWhy(), 0),
    features: () => setTimeout(() => scrollToFeatores(), 0),
    pricing: () => setTimeout(() => scrollToPricing(), 0),
    home: () => setTimeout(() => scrollToHome(), 0),
  };

  return (
    <Box sx={allSx}>
      {ismobile ? (
        <Mobile actions={actionsM} />
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
                <Nav dir="row" actions={actions} />
              </Grid>
              <Grid item>
                <Michaelforreal home={scrollToHome} />
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      )}
      <div ref={homeRef}>
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
              <div ref={whyRef}>
                <Michael />
              </div>
            </Grid>
          </Grid>
        </Box>{" "}
      </div>
    </Box>
  );
}

export default App;
