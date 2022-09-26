import { styled } from "@mui/material";
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
            height="80vh"
            width="100vw"
            alignItems="center"
            direction="row"
            sx={{ padding: "50vh" }} rowSpacing={1} columnSpacing={{ xs: 3, sm: 2, md: 3 }}>
            <Grid item xs={6} width="20vh" height="30vh">
                <Item sx={{ minHeight: "70vh", maxWidth: "25vw" }} >Basic</Item>
            </Grid>
            <Grid item xs={6} width="20vh" height="30vh">
                <Item sx={{ minHeight: "70vh", maxWidth: "25vw" }}>Premium</Item>
            </Grid>

        </Grid>
    )
}
