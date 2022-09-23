import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import Box from "@mui/material/Box";
import orange from "@mui/material/colors/orange";

const topbar = {
  position: "static",
  left: "0px",
  top: "0px",
  margin: "0px",
  width: "100vw",
  height: "7vh",
  backgroundColor: orange[100],
};

const menuButton = {
  height: "7vh",
  color: orange[900],
  "&:hover": {
    backgroundColor: orange[300],
  },
};

function App() {
  return (
    <Box>
      <Box sx={topbar}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          wrap="nowrap"
        >
          <Grid item>logo</Grid>
          <Grid
            item
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            columnSpacing={2}
          >
            <Grid item>
              <Button sx={menuButton}>Products</Button>
            </Grid>
            <Grid item>
              <Button sx={menuButton}>Solutions</Button>
            </Grid>
            <Grid item>
              <Button sx={menuButton}>Pricing</Button>
            </Grid>
            <Grid item>
              <Button sx={menuButton}>Join Now</Button>
            </Grid>
            <Grid item>
              <Button sx={menuButton}>Register</Button>
            </Grid>
          </Grid>
          <Grid item>account</Grid>
        </Grid>
      </Box>
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
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>asd</TableCell>
              <TableCell>asd</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>asd</TableCell>
              <TableCell>asd</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>asd</TableCell>
              <TableCell>asd</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>asd</TableCell>
              <TableCell>asd</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Grid item></Grid>
      </Grid>
    </Box>
  );
}

export default App;
