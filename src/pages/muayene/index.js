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
function createData(id, name) {
  return { id, name };
}

const rows = [
  createData("Far ayarı hatalı", 2020),
  createData("Motor: yağ kaçakları var", 2020),
  createData("Şanzıman: yağ kaçakları var", 2021),
  createData("Yan Reflektörler: yok", 2021),
  createData("Direksiyon dişli kutusu hatalı", 2022),
];
export default class Muayene extends Component {
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
                      >
                        Muayene Tarihi
                      </TableCell>
                      <TableCell
                        style={{
                          backgroundColor: "#3b77ac",
                          color: "white",
                          fontWeight: "bold",
                        }}
                        align="center"
                      >
                        Sonuç
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
                        <TableCell align="center">{row.id}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <Button   style={{
                          backgroundColor: "#3b77ac",
                          color: "white",
                          fontWeight: "bold",
                        }} variant="contained">Muayene Randevusu Al</Button>
            </Container>
          </Grid>
        </Grid>
      </div>
    );
  }
}
