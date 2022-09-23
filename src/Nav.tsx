import Button from "@mui/material/Button";
import orange from "@mui/material/colors/orange";
import Grid from "@mui/material/Grid";

interface NavProps {
  dir: "row" | "column";
  actions: any;
}

const menuButton = {
  height: "50px",
  color: orange[900],
  "&:hover": {
    backgroundColor: orange[300],
  },
};

export default function Nav({ dir, actions }: NavProps) {
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
        <Button onClick={actions.why} sx={menuButton}>
          Why Neurobica?
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={actions.features} sx={menuButton}>
          Features
        </Button>
      </Grid>
      <Grid item>
        <Button onClick={actions.pricing} sx={menuButton}>
          Pricing
        </Button>
      </Grid>
    </Grid>
  );
}
