import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import under from "./underline.svg";

const veryNice = {
  fontFamily: "proxima-nova, 'Helvetica Neue', Helvetica, Arial, sans-serif",
  letterSpacing: "-0.06rem",
  fontWeight: "700",
  lineHeight: "1",
  color: "rgb(40, 40, 40)",
  fontSize: "3.5rem",
  boxsizing: "border-box",
  position: "relative",
  textAlign: "center",
};

export default function Register() {
  return (
    <Grid
      container
      direction="column"
      justify-content="flex-start"
      alignItems="center"
    >
      <Grid item sx={veryNice}>
        Everything you for
      </Grid>
      <Box
        component="img"
        src={under}
        sx={{ width: "60%", alignSelf: "flex-start" }}
      ></Box>
      <Grid item sx={veryNice}>
        Exercising you Brain
      </Grid>
      <Box
        component="img"
        src={under}
        sx={{ width: "50%", alignSelf: "flex-start" }}
      ></Box>
      <Grid item sx={veryNice}>
        In the same place
      </Grid>
      <Box
        component="img"
        src={under}
        sx={{ width: "60%", alignSelf: "flex-end" }}
      ></Box>
      <Grid item>asda</Grid>
    </Grid>
  );
}
