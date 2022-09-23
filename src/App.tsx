import { Grid, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import orange from "@mui/material/colors/orange";

const topbar = {
  position: "static",
  left: "0px",
  top: "0px",
  margin: "0px",
  width: "100vw",
  height: "10vh",
  backgroundColor: orange[100],
};

function App() {
  return (
    <Box>
      <Box sx={topbar}></Box>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="center"
        spacing={1}
      >
        <Typography variant="h1" component="h1">
          Neurobica
        </Typography>
      </Grid>
    </Box>
  );
}

export default App;
