import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import under from "./underline.svg";
import m1 from "./Screen Shot 2022-09-24 at 0.40.54.png";
import m2 from "./Screen Shot 2022-09-24 at 0.41.02.png";
import m3 from "./Screen Shot 2022-09-24 at 0.41.17.png";
import m4 from "./Screen Shot 2022-09-24 at 0.41.26.png";
import { Button, Input, InputLabel, Typography } from "@mui/material";
import orange from "@mui/material/colors/orange";

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

export default function Register() {
  return (
    <Grid
      container
      direction="column"
      justify-content="flex-start"
      alignItems="center"
      height="100vw"
    >
      <br />
      <br />
      <Grid item sx={veryNice}>
        Everything you for
      </Grid>
      <Box
        component="img"
        src={under}
        sx={{ width: "60%", alignSelf: "flex-start", paddingLeft: "6vw" }}
      ></Box>
      <Grid item sx={veryNice}>
        Exercising you Brain
      </Grid>
      <Box
        component="img"
        src={under}
        sx={{ width: "50%", alignSelf: "flex-start", paddingLeft: "6vw" }}
      ></Box>
      <Grid item sx={veryNice}>
        In the same place
      </Grid>
      <Box
        component="img"
        src={under}
        sx={{ width: "60%", alignSelf: "flex-end", paddingRight: "4vw" }}
      ></Box>
      <br /> <br />
      <Grid
        item
        container
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
      <br /> <br />
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
      <br /> <br />
      <Grid
        item
        container
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
            }}
          >
            Join Today:
          </InputLabel>
        </Grid>
        <Grid item>
          <Input type="email" placeholder="email address" />
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
  );
}
