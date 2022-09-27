import { Avatar, Button, styled, Typography } from "@mui/material";
import blue from "@mui/material/colors/blue";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import background from "src/silver-background-for-christmas-1024x725.jpeg"
import DoneIcon from '@mui/icons-material/DoneAll';
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "30px",
    border: "solid",
    borderWidth: "3px",
    borderColor: "#C0C0C0	",
    backgroundColor: blue[50]
}));
const Item2 = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: "30px",
    border: "solid",
    borderWidth: "3px",
    borderColor: "#FFD700",
    backgroundColor: blue[50]


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
                <Item sx={{
                    fontSize: "30px", minHeight: "55vh", maxWidth: "55vh"
                }} >
                    <Grid item>
                        <Typography sx={{ paddingBottom: "5px" }} variant="h4" >Standard</Typography>
                        <Grid container
                            width="100vw"
                            direction="row"
                            sx={{ padding: "1vh" }} rowSpacing={5} columnSpacing={{ xs: 14, sm: 2, md: 3 }}>

                            <Grid item md={12} xs={12}>
                                <Typography variant="h4" color="black">13.99$ </Typography>
                                <Typography color="black">/mounth </Typography>
                            </Grid>

                        </Grid>
                    </Grid>

                </Item>
            </Grid>
            <Grid item xs={6} height="50vh">
                <Item2 elevation={20} sx={{ fontSize: "30px", minHeight: "55vh", maxWidth: "55vh" }} >
                    <Grid item >
                        <Typography sx={{ paddingBottom: "5px" }} variant="h4" >Premium</Typography>
                        <Grid container
                            width="100vw"
                            direction="row"
                            rowSpacing={0} columnSpacing={{ xs: 1, sm: 1, md: 1 }}>
                            <Grid item md={12} xs={12}>
                                <Typography variant="h4" color="black">19.99$ </Typography>
                                <Typography color="black">/mounth </Typography>
                                <Button variant="contained" sx={{ color: "black", backgroundColor: "#FFD700" }}>Select</Button>
                            </Grid>

                            <Grid item md={12} xs={12}>
                                <DoneIcon sx={{ color: "green" }} />

                                <Typography sx={{ fontSize: "10px" }}>All training domains</Typography>
                                <DoneIcon sx={{ color: "green" }} />
                                <Typography sx={{ fontSize: "10px" }}>Access to cumulative workouts</Typography>
                                <DoneIcon sx={{ color: "green" }} />
                                <Typography sx={{ fontSize: "10px" }}>Customizable themes, avatars and icons in multiplayer
                                </Typography >
                                <DoneIcon sx={{ color: "green" }} />
                                <Typography sx={{ fontSize: "10px" }}>All training domains</Typography>

                            </Grid>
                        </Grid>

                    </Grid>
                </Item2>
            </Grid>

        </Grid >
    )
}
