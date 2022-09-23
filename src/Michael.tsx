import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

export default function Michael() {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ alignItems: "center", justifyContent: "center" }}>
        <TableHead >
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center" >With Neurobica</TableCell>
            <TableCell align="center">Other Solutions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>9.99$ a mounth/99.99$ a year + 150$ for headband </TableCell>
            <TableCell>2,000$-6,000$ for 30 sessions</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>Fully coustomized, Science proved, automated and holistic training platform for all your brain needs.
              become your own brain trainer  </TableCell>
            <TableCell>Speciphic, monotonic and depends on your thraphist/trainer abillities</TableCell>

          </TableRow>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>20 minutes 3 times a week</TableCell>
            <TableCell>asd</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Comfort</TableCell>
            <TableCell>asd</TableCell>
            <TableCell>asd</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Social</TableCell>
            <TableCell>asd</TableCell>
            <TableCell>asd</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

  );
}
