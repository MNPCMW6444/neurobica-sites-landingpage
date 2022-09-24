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

const veryNice = {
  fontFamily: "proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  letterSpacing: "-0.06rem",
  fontWeight: "700",
  lineHeight: "1",
  color: "rgb(40, 40, 40)",
  fontSize: "8vw",
  boxsizing: "border-box",
  position: "relative",
  textAlign: "center",
};

const iconSx = { width: "4vw", height: "4vw" };
const textSx = { fontSize: "3vw", marginBottom: "0.9vw" };

export default function Register({ mobile }: any) {
  const [width, setwidth] = useState(
    window.innerWidth < 400 ? 400 : window.innerWidth
  );

  const [wide, setwide] = useState(window.innerWidth > window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setwidth(window.innerWidth < 400 ? 400 : window.innerWidth);
      setwide(window.innerWidth > window.innerHeight);
    };

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
          <Grid item sx={veryNice}>
            Everything you need for
          </Grid>
          <Box
            component="img"
            src={under}
            sx={{ width: "40%", alignSelf: "flex-start", marginLeft: "8vw" }}
          ></Box>
          <Grid item sx={veryNice}>
            Exercising you Brain
          </Grid>
          <Box
            component="img"
            src={under}
            sx={{ width: "40%", alignSelf: "flex-start", marginLeft: "10vw" }}
          ></Box>
          <Grid item sx={veryNice}>
            In just One Place
          </Grid>
          <Box
            component="img"
            src={under}
            sx={{ width: "40%", alignSelf: "flex-end", marginRight: "14vw" }}
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
              fontSize: "4vw",
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
            <Box component="img" src={m1} sx={iconSx}></Box>
          </Grid>
          <Grid item>
            <Typography sx={textSx}>Memory</Typography>
          </Grid>
          <Grid item>
            <Box component="img" src={m2} sx={iconSx}></Box>
          </Grid>
          <Grid item>
            <Typography sx={textSx}>Focus</Typography>
          </Grid>
          <Grid item>
            <Box component="img" src={m3} sx={iconSx}></Box>
          </Grid>
          <Grid item>
            <Typography sx={textSx}>Concentration</Typography>
          </Grid>
          <Grid item>
            <Box component="img" src={m4} sx={iconSx}></Box>
          </Grid>
          <Grid item>
            <Typography sx={textSx}>Studying</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Typography
            sx={{
              fontFamily:
                "proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif",
              letterSpacing: "-0.06rem",
              fontSize: "4vw",
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
                fontSize: "4vw",
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
        <Grid item width="25vw" height="100vh" sx={{ backgroundColor: "red" }}>
          {" "}
        </Grid>
      )}
    </Grid>
  );
}
