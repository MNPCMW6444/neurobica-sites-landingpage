import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import under from "./underline.svg";
import m1 from "./Screen Shot 2022-09-24 at 0.40.54.png";
import m2 from "./Screen Shot 2022-09-24 at 0.41.02.png";
import m3 from "./Screen Shot 2022-09-24 at 0.41.17.png";
import m4 from "./Screen Shot 2022-09-24 at 0.41.26.png";
import {
  Button,
  TextField,
  InputLabel,
  Typography,
  Backdrop,
} from "@mui/material";
import orange from "@mui/material/colors/orange";
import { useEffect, useState } from "react";

import mascot from "./frames/frame_00_delay-0.1s.gif";
import mascot1 from "./frames/frame_01_delay-0.1s.gif";
import mascot2 from "./frames/frame_02_delay-0.1s.gif";
import mascot3 from "./frames/frame_03_delay-0.1s.gif";
import mascot4 from "./frames/frame_04_delay-0.1s.gif";
import mascot5 from "./frames/frame_05_delay-0.3s.gif";
import mascot6 from "./frames/frame_06_delay-0.1s.gif";
import mascot7 from "./frames/frame_07_delay-0.1s.gif";
import mascot8 from "./frames/frame_08_delay-0.1s.gif";
import mascot9 from "./frames/frame_09_delay-0.1s.gif";
import mascot10 from "./frames/frame_10_delay-0.1s.gif";
import amber from "@mui/material/colors/amber";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const veryNice = (wide: boolean) => ({
  fontFamily: "proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  letterSpacing: "-0.06rem",
  fontWeight: "700",
  lineHeight: "1",
  color: "rgb(40, 40, 40)",
  fontSize: (wide ? 8 * 0.75 : 8) + "vw",
  boxsizing: "border-box",
  position: "relative",
  textAlign: "center",
});

const iconSx = (wide: boolean) => ({
  width: (wide ? 4 * 0.75 : 4) + "vw",
  height: (wide ? 4 * 0.75 : 4) + "vw",
});

const textSx = (wide: boolean) => ({
  fontSize: (wide ? 3 * 0.75 : 3) + "vw",
  marginBottom: (wide ? 0.9 * 0.75 : 0.9) + "vw",
});

export default function Register({ mobile }: any) {
  const [width, setwidth] = useState(
    window.innerWidth < window.innerHeight
      ? window.innerWidth < 400
        ? 400
        : window.innerWidth
      : window.innerHeight * 0.75
  );

  const [wide, setwide] = useState(window.innerWidth > window.innerHeight);

  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      window.innerWidth < window.innerHeight
        ? setwidth(window.innerWidth < 400 ? 400 : window.innerWidth)
        : setwidth(window.innerHeight * 0.75);
      setwide(window.innerWidth > window.innerHeight);
    };
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
  });

  const theme = createTheme({
    palette: {
      primary: {
        main: orange[900],
      },
    },
  });

  return (
    <Grid
      sx={{ backgroundColor: amber[50] }}
      container
      direction="row"
      justifyContent="flex-start"
      height="100vh"
      width="100vw"
      wrap="nowrap"
    >
      <Grid
        item
        container
        wrap="nowrap"
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
        width={wide ? "75vw" : "100vw"}
        sx={{ marginTop: "60px", padding: "0px 30px 0px 30px" }}
        rowSpacing={3000 / width - 2}
      >
        <Grid
          container
          wrap="nowrap"
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={2000 / width - 1}
        >
          <Grid item sx={veryNice(wide)}>
            Everything you need for
          </Grid>
          <Box
            component="img"
            src={under}
            sx={{
              width: "40%",
              alignSelf: "flex-start",
              marginLeft: (wide ? 8 * 0.75 : 8) + "vw",
            }}
          ></Box>
          <Grid item sx={veryNice(wide)}>
            Exercising you Brain
          </Grid>
          <Box
            component="img"
            src={under}
            sx={{
              width: "40%",
              alignSelf: "flex-start",
              marginLeft: (wide ? 10 * 0.75 : 10) + "vw",
            }}
          ></Box>
          <Grid item sx={veryNice(wide)}>
            In just One Place
          </Grid>
          <Box
            component="img"
            src={under}
            sx={{
              width: "40%",
              alignSelf: "flex-end",
              marginRight: (wide ? 14 * 0.75 : 14) + "vw",
            }}
          ></Box>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontFamily: "Papyrus, fantasy",
              fontStyle: "normal",
              fontVariant: "normal",
              fontWeight: 700,
              lineHeight: "10vh",
              letterSpacing: "-0.06rem",
              fontSize: (wide ? 4 * 0.75 : 4) + "vw",
            }}
          >
            NEUROBICA - All Your Brain Needs!
          </Typography>
        </Grid>
        <Grid
          item
          container
          wrap="nowrap"
          direction="row"
          justifyContent="center"
          alignItems="center"
          columnSpacing={2}
        >
          <Grid item>
            <Box component="img" src={m1} sx={iconSx(wide)}></Box>
          </Grid>
          <Grid item>
            <Typography sx={textSx(wide)}>Memory</Typography>
          </Grid>
          <Grid item>
            <Box component="img" src={m2} sx={iconSx(wide)}></Box>
          </Grid>
          <Grid item>
            <Typography sx={textSx(wide)}>Focus</Typography>
          </Grid>
          <Grid item>
            <Box component="img" src={m3} sx={iconSx(wide)}></Box>
          </Grid>
          <Grid item>
            <Typography sx={textSx(wide)}>Concentration</Typography>
          </Grid>
          <Grid item>
            <Box component="img" src={m4} sx={iconSx(wide)}></Box>
          </Grid>
          <Grid item>
            <Typography sx={textSx(wide)}>Studying</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontFamily:
                "proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif",
              letterSpacing: "-0.06rem",
              fontSize: (wide ? 4 * 0.75 : 4) + "vw",
            }}
          >
            Ready to become a Super Version of yourself?
          </Typography>
        </Grid>

        <Grid
          item
          container
          wrap="nowrap"
          direction="row"
          justifyContent="center"
          alignItems="strech"
          columnSpacing={2}
        >
          <Grid item>
            <InputLabel
              sx={{
                fontSize: (wide ? 4 * 0.75 : 4) + "vw",
                color: orange[900],
              }}
            >
              Join Today:
            </InputLabel>
          </Grid>
          <Grid item>
            <ThemeProvider theme={theme}>
              <TextField
                type="email"
                label="Email Address"
                placeholder="name@example.com"
                variant="outlined"
                color="primary"
                sx={{
                  input: { color: orange[900] },
                  width: "40vw",
                  maxWidth: "350px",
                }}
              />
            </ThemeProvider>
          </Grid>
          <Grid item>
            <Button
              sx={{
                height: "100%",
                width: "120%",
                fontSize: "1.8vw",
                backgroundColor: orange[50],
                borderRadius: "10px",
                color: orange[900],
                "&:hover": {
                  backgroundColor: orange[300],
                  color: orange[900],
                },
              }}
            >
              GO
            </Button>
          </Grid>
        </Grid>
        <br />
      </Grid>
      {wide && (
        <Grid item width="25vw" height="100vh">
          <Box
            component="img"
            src={
              scrollPosition < 5 + 40
                ? mascot10
                : scrollPosition < 15 + 40
                ? mascot2
                : scrollPosition < 30 + 40
                ? mascot3
                : scrollPosition < 45 + 40
                ? mascot4
                : scrollPosition < 60 + 40
                ? mascot4
                : scrollPosition < 75 + 40
                ? mascot5
                : scrollPosition < 90 + 40
                ? mascot6
                : scrollPosition < 105 + 40
                ? mascot7
                : scrollPosition < 115 + 20
                ? mascot8
                : scrollPosition < 127 + 30
                ? mascot9
                : mascot10
            }
            sx={
              scrollPosition > 100
                ? {
                    position: "relative",
                    left: -21 + "vw",
                    top: 8 + "vw",
                    width:
                      35 +
                      (scrollPosition > 100
                        ? (200 - 100) / 100
                        : scrollPosition / 100) *
                        12 +
                      "vw",
                    height:
                      35 +
                      (scrollPosition > 100
                        ? (200 - 100) / 100
                        : scrollPosition / 100) *
                        12 +
                      "vw",
                    opacity: 1,
                  }
                : {
                    position: "fixed",
                    left:
                      66 -
                      (scrollPosition > 100
                        ? (200 - 100) / 100
                        : scrollPosition / 100) *
                        12 +
                      "vw",
                    top:
                      13 -
                      (scrollPosition > 100
                        ? (200 - 100) / 100
                        : scrollPosition / 100) *
                        12 +
                      "vw",
                    width:
                      35 +
                      (scrollPosition > 100
                        ? (200 - 100) / 100
                        : scrollPosition / 100) *
                        12 +
                      "vw",
                    height:
                      35 +
                      (scrollPosition > 100
                        ? (200 - 100) / 100
                        : scrollPosition / 100) *
                        12 +
                      "vw",
                    opacity:
                      (scrollPosition > 100
                        ? (200 - scrollPosition) / 100
                        : scrollPosition / 100) + 0.1,
                  }
            }
          ></Box>
        </Grid>
      )}
    </Grid>
  );
}
