import Button from "@mui/material/Button";
import orange from "@mui/material/colors/orange";
import Grid from "@mui/material/Grid";

interface NavProps {
  dir: "row" | "column";
}

const menuButton = {
  height: "50px",
  color: orange[900],
  "&:hover": {
    backgroundColor: orange[300],
  },
};

export default function Nav({ dir }: NavProps) {
  return (
    <Grid
      item
      container
      direction={dir}
      justifyContent="center"
      alignItems="center"
      columnSpacing={2}
    >
      <Grid item>
        <Button sx={menuButton}>Why Neurobica?</Button>
      </Grid>{" "}
      <Grid item>
        <Button sx={menuButton}>Features</Button>
      </Grid>
      <Grid item>
        <Button sx={menuButton}>Pricing</Button>
      </Grid>
    </Grid>
  );
}
