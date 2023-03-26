import React, { Component } from "react";
import ResponsiveAppBar from "../../components/NavBar";
import LogoIMG from "../../togg.png"; // Import using relative path,
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Container, Grid } from "@mui/material";
function createData(name, id) {
  return { name, id };
}

const rows = [
  createData("Hava Filtresi", 250),
  createData("Kışlık  Teker", 237),
  createData("Hava Filtresi", 262),
  createData("Hava Filtresi", 250),
  createData("Kışlık  Teker", 237),
  createData("Hava Filtresi", 262),

];
export default class Bakım extends Component {
  render() {
    return (
      <div
        style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          backgroundImage: `url(${LogoIMG})`,
        }}
        className="App"
      >
        <ResponsiveAppBar />
        <Grid container>
          <Grid item md={8}>
            <Container  style={{padding:'2rem', justifyContent:'center', paddingLeft:'50%'}}>
           
              <TableContainer style={{marginBottom:'1rem'}} component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell
                        style={{
                          backgroundColor: "#3b77ac",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        Değişen Parçalar
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow
                        key={row.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
}
