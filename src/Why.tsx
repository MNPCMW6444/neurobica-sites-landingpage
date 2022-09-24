import * as React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import TableContainer from "@mui/material/TableContainer";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "70vh",
  width: "90vw",
}));

const lightTheme = createTheme({ palette: { mode: "light" } });

export default function Why() {
  return (
    <Grid container spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid
          item
          xs={6}
          key={index}
          alignItems="center"
          justifyContent="center"
        >
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                p: 2,
                bgcolor: "background.default",
                display: "grid",
                gridTemplateColumns: { md: "1fr 1fr" },
                gap: 2,
              }}
            >
              {[10, 10].map((elevation) => (
                <Item elevation={elevation}>
                  {
                    <>
                      <Typography sx={{ padding: "2vh" }} variant="h3">
                        Save tousands of ${" "}
                      </Typography>
                      <Typography variant="h6">Train more, pay less</Typography>

                      <Table
                        aria-label="simple table"
                        sx={{ alignItems: "center", justifyContent: "center" }}
                      >
                        <TableHead>
                          <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="center">Neurobica</TableCell>
                            <TableCell align="center">
                              Other Solutions
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          <TableRow>
                            <TableCell>Price</TableCell>
                            <TableCell>9.99$ a mounth/99.99$ a year</TableCell>
                            <TableCell>80$ - 200$ per session</TableCell>
                          </TableRow>
                          <TableRow>
                            <TableCell>Value</TableCell>
                            <TableCell>
                              Fully coustomized, automated and holistic training
                              platform for all your brain needs where you become
                              your own brain master!
                            </TableCell>
                            <TableCell>
                              Speciphic, monotonic and depends on your
                              thraphist/trainer abillities
                            </TableCell>
                          </TableRow>
                          <TableRow></TableRow>
                          <TableRow>
                            <TableCell>Comfort</TableCell>
                            <TableCell>
                              Can be done anywhere, at any time and requires no
                              effort
                            </TableCell>
                            <TableCell>
                              Can only be done in a clinic or by personally
                              meeting with a thraphist/trainer
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </>
                  }
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  );
}
