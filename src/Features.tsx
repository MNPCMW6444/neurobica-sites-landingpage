
import Grid from "@mui/material/Grid";

import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

import { Avatar } from "@mui/material";

export default function RowAndColumnSpacing() {

  return (

    <Box sx={{ width: "100%" }}>

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

          <Typography

            align="center"

            sx={{ padding: "2vh", maxWidth: "70vW" }}

            variant="h4"

          >

            If we didn't change your mind - you can!

          </Typography>

        </Grid>

        <Grid item xs={12} md={12} lg={12} height="100vhs">

          <Typography align="center" variant="h5">

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
                <Grid item container xs={6} width="35vh" height="30vh" md={3} sx={{ maxWidth: "40vw" }} alignItems="center" justifyContent="center" direction="column">
                    <Grid item>
                        <Avatar alt="attention" src={attention} sx={{ width: "10vh", height: "10vh" }}></Avatar>
                    </Grid>
                    <Grid item>

                        <Typography sx={{ fontSize: "2vh" }} align='center'> Attention, focus and memory performance enhancement neurofeedback training</Typography>
                    </Grid>

                </Grid>
                <Grid item container xs={6} width="35vh" height="30vh" md={3} alignItems="center" justifyContent="center" sx={{ maxWidth: "40vw" }} direction="column" >
                    <Grid item>
                        <Avatar alt="memory"
                            src={memory}
                            sx={{ width: "10vh", height: "10vh" }}></Avatar>
                    </Grid>
                    <Grid item >

                        <Typography sx={{ fontSize: "2vh" }} align='center'> Anxiety and stress relief, mindfulness neurofeedback training</Typography>
                    </Grid>
                </Grid>

                <Grid item container width="35vh" height="30vh" xs={6} md={3} justifyContent="center" alignItems="center" direction="column">
                    <Grid item>
                        <Avatar src={multiplayer}
                            sx={{ width: "10vh", height: "10vh" }}></Avatar>
                    </Grid>
                    <Grid item>

                        <Typography sx={{ fontSize: "2vh" }} align='center'>The first and only online multyplayer neurofeedback training platform</Typography>
                    </Grid>
                </Grid>

                <Grid item container width="35vh" height="30vh" xs={6} md={3} alignItems="center" justifyContent="center" direction="column">
                    <Grid item>
                        <Avatar src={performance} alt="performance"
                            sx={{ width: "10vh", height: "10vh" }}></Avatar>
                    </Grid>
                    <Grid item>

                        <Typography sx={{ fontSize: "2vh" }} align='center'>  Science proved brain prformence assasment to check your progress</Typography>
                    </Grid>
                </Grid>


            </Grid>


      <Grid
        container
        justifyContent="center"
        height="60vh"
        width="100vw"
        alignItems="center"
        direction="row"
        sx={{ padding: "5vh" }}
        rowSpacing={{ xs: 1, sm: 2, md: 2 }}
        columnSpacing={{ xs: 3, sm: 2, md: 2 }}
      >
        <Grid item xs={6} width="35vh" height="30vh" md={3}>
          <Avatar sx={{ width: 75, height: 75 }}></Avatar>
          <Typography align="center">
            {" "}
            Attention and focus neurofeedback training
          </Typography>
        </Grid>
        <Grid item xs={6} width="35vh" height="30vh" md={3}>
          <Avatar sx={{ width: 75, height: 75 }}></Avatar>
          <Typography align="center"> Memory neurofeedback training</Typography>
        </Grid>
        <Grid item width="35vh" height="30vh" xs={6} md={3}>
          <Avatar sx={{ width: 75, height: 75 }}></Avatar>
          <Typography align="center">
            The first and only online multyplayer neurofeedback training
            platform
          </Typography>
        </Grid>
        <Grid item width="35vh" height="30vh" xs={6} md={3}>
          <Avatar sx={{ width: 75, height: 75 }}></Avatar>
          <Typography align="center">
            {" "}
            Science proved brain prformence assasment to check your progress
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
