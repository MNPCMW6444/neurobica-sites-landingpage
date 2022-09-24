import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import under from "./underline.svg";
import m1 from "./Screen Shot 2022-09-24 at 0.40.54.png";
import m2 from "./Screen Shot 2022-09-24 at 0.41.02.png";
import m3 from "./Screen Shot 2022-09-24 at 0.41.17.png";
import m4 from "./Screen Shot 2022-09-24 at 0.41.26.png";
import { Button, Input, InputLabel, Typography } from "@mui/material";
import orange from "@mui/material/colors/orange";
import { useEffect, useState } from "react";

import mascot from "./mascot.svg";

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

  return (
    <Grid
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
        rowSpacing={4000 / width - 2}
      >
        <Grid
          container
          wrap="nowrap"
          direction="column"
          justifyContent="center"
          alignItems="center"
          rowSpacing={3500 / width - 1}
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
          alignItems="center"
          columnSpacing={2}
        >
          <Grid item>
            <InputLabel
              sx={{
                fontFamily:
                  "proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif",
                letterSpacing: "-0.06rem",
                fontSize: (wide ? 4 * 0.75 : 4) + "vw",
                color: orange[900],
              }}
            >
              Join Today:
            </InputLabel>
          </Grid>
          <Grid item>
            <Input
              type="email"
              placeholder="name@example.com"
              sx={{ color: orange[900] }}
            />
          </Grid>
          <Grid item>
            <Button
              sx={{
                backgroundColor: orange[50],
                color: orange[500],
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
      </Grid>
      {wide && (
        <Grid item width="25vw" height="100vh">
          <Box
            component="img"
            src={mascot}
            sx={{
              position: "fixed",
              left: "50vw",
              top: "10vw",
              width: "75%",
              height: "75%",
              opacity:
                (scrollPosition > 100
                  ? (200 - scrollPosition) / 100
                  : scrollPosition / 100) + 0.3,
            }}
          ></Box>
        </Grid>
      )}
    </Grid>
  );
}
