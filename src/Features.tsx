import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Avatar } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
    return (
        <Box sx={{ width: '100%' }}>
            <Grid
                container
                width="100vw"
                rowSpacing={2}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                justifyContent="center"
                alignItems="center"
                direction="column"
            >
                <Grid item xs={12} md={12} lg={12}>
                    <Typography align="center" sx={{ padding: "2vh", maxWidth: "70vW" }} variant="h4">
                        If we didn't change your mind - you can!
                    </Typography>
                </Grid>
                <Grid item xs={12} md={12} lg={12} height="100vhs">
                    <Typography align="center" variant="h5" >
                        100% money back guarantee for 30 days!
                    </Typography>
                    <br></br>
                </Grid>
            </Grid>

            <Grid container justifyContent="center"
                height="60vh"
                width="100vw"
                alignItems="center"
                direction="row" sx={{ padding: "5vh" }} rowSpacing={{ xs: 1, sm: 2, md: 2 }} columnSpacing={{ xs: 3, sm: 2, md: 2 }}>
                <Grid item xs={6} width="35vh" height="30vh" md={3}>
                    <Avatar sx={{ width: 75, height: 75 }}></Avatar>
                    <Typography align='center'> Attention and focus neurofeedback training</Typography>
                </Grid>
                <Grid item xs={6} width="35vh" height="30vh" md={3}>
                    <Avatar
                        sx={{ width: 75, height: 75 }}></Avatar>
                    <Typography align='center'> Memory neurofeedback training</Typography>
                </Grid>
                <Grid item width="35vh" height="30vh" xs={6} md={3}>
                    <Avatar
                        sx={{ width: 75, height: 75 }}></Avatar>
                    <Typography align='center'>The first and only online multyplayer neurofeedback training platform</Typography>
                </Grid>
                <Grid item width="35vh" height="30vh" xs={6} md={3}>
                    <Avatar
                        sx={{ width: 75, height: 75 }}></Avatar>
                    <Typography align='center'>  Science proved brain prformence assasment to check your progress</Typography>
                </Grid>
            </Grid>

        </Box >
    );
}
