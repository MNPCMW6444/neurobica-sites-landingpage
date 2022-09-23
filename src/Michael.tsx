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
      <Table aria-label="simple table" sx={{ alignItems: "center", alignContent: "center", justifyContent: "center" }}>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>With Neurobica</TableCell>
            <TableCell>Other Solutions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Price</TableCell>
            <TableCell>9.99$ a mounth/99.99$ a year + 150$ for </TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Value</TableCell>
            <TableCell>asd</TableCell>
            <TableCell>asd</TableCell>

          </TableRow>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell>asd</TableCell>
            <TableCell>asd</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Comfort</TableCell>
            <TableCell>asd</TableCell>
            <TableCell>asd</TableCell>
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>asd</TableCell>
            <TableCell>asd</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>

  );
}
