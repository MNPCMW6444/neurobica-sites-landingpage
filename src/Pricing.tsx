import { styled, Typography } from "@mui/material";
import blue from "@mui/material/colors/blue";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "30px",
    backgroundColor: blue[50]
}));
const Item2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "30px",
    backgroundColor: blue[200]
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
            <Grid item xs={6} height="50vh">
                <Item sx={{ fontSize: "30px", minHeight: "55vh", maxWidth: "40vw" }} >
                    <Grid item>
                        <Typography sx={{ paddingBottom: "5px" }} variant="h4" >Standard</Typography>
                        <Typography sx={{ paddingBottom: "10px" }} variant="h4" color="black">13.99$</Typography>

                    </Grid>
                </Item>
            </Grid>
            <Grid item xs={6} height="50vh">
                <Item2 elevation={20} sx={{ fontSize: "30px", minHeight: "55vh", maxWidth: "40vw" }} >
                    <Grid item>
                        <Typography sx={{ paddingBottom: "5px" }} variant="h4" >Premium</Typography>
                        <Grid container
                            width="100vw"
                            direction="row"
                            sx={{ padding: "1vh" }} rowSpacing={5} columnSpacing={{ xs: 14, sm: 2, md: 3 }}>

                            <Grid item md={3} xs={3}>
                                <Typography variant="h4" color="black">19.99$ </Typography>

                            </Grid>
                            <Grid item md={3} xs={3}>
                                <Typography color="black">/mounth </Typography>

                            </Grid>
                        </Grid>

                    </Grid>
                </Item2>
            </Grid>

        </Grid>
    )
}
