import { styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Pricing() {
    return (
        <Grid container
            justifyContent="center"
            width="100vw"
            alignItems="center"
            direction="row"
            sx={{ padding: "3vh" }} rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
            <Grid item xs={12} width="20vh" height="30vh">
                <Typography sx={{ padding: "1vh", textAlign: "center" }} variant="h4">
                    Join Neurobica and boost your brain to the next level!
                </Typography>            </Grid>
            <Grid item xs={6} width="20vh" height="50vh">
                <Item sx={{ fontSize: "30px", minHeight: "55vh", maxWidth: "40vw" }} >Basic</Item>
            </Grid>
            <Grid item xs={6} width="20vh" height="50vh">
                <Item sx={{ fontSize: "30px", minHeight: "55vh", maxWidth: "40vw" }}>Premium</Item>
            </Grid>

        </Grid>
    )
}
