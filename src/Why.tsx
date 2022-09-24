import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Micael() {
  return (
    <Box sx={{ width: '100vw', hight: "50vh", paddingTop: "20vh" }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} justifyContent="center" alignItems="flex-start" >
        <Grid item xs={10} lg={8} md={8} sx={{ width: '100vw', hight: "50vh" }}>
          <Item>
            <Typography sx={{ padding: "2vh" }} variant='h3'>Save tousands of $ </Typography>
            <Typography variant='h6'>Train more, pay less</Typography>

            <Table
              aria-label="simple table"
              sx={{ alignItems: "center", justifyContent: "center" }}
            >
              <TableHead>
                <TableRow>
                  <TableCell></TableCell>
                  <TableCell align="center">Neurobica</TableCell>
                  <TableCell align="center">Other Solutions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Price</TableCell>
                  <TableCell>
                    9.99$ a mounth/99.99$ a year
                  </TableCell>
                  <TableCell>80$ - 200$ per session</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Value</TableCell>
                  <TableCell>
                    Fully coustomized, automated and holistic training
                    platform for all your brain needs where you become your own brain master!
                  </TableCell>
                  <TableCell>
                    Speciphic, monotonic and depends on your thraphist/trainer
                    abillities
                  </TableCell>
                </TableRow>
                <TableRow>
                </TableRow>
                <TableRow>
                  <TableCell>Comfort</TableCell>
                  <TableCell>Can be done anywhere, at any time and requires no effort</TableCell>
                  <TableCell>Can only be done in a clinic or by personally meeting with a thraphist/trainer</TableCell>
                </TableRow>

              </TableBody>
            </Table>

          </Item>
        </Grid>
        <Grid item xs={12} md={12} lg={12} height="100vhs" >
          <Item >
            <Typography sx={{ padding: "2vh" }} variant='h3'>No gains no pay!</Typography>
            <Typography variant='h6'>If we didn't change your mind - you can! Offering 100% money back guarantee for 30 days!</Typography>
          </Item>
        </Grid>


      </Grid>
    </Box>
  );
}

