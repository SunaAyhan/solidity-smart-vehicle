import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React, { Component } from "react";
import { useTheme } from "@emotion/react";
import styled from "@emotion/styled";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ResponsiveAppBar from "../../components/NavBar";
import LogoIMG from "../../togg.png"; // Import using relative path,
function createData(name, id) {
    return { name, id };
  }
  
  const rows = [
    createData("01.02.2021 - 01.02.2022", 250),
    createData("05.02.2021 - 01.02.2022", 237),
    createData("01.02.2021 -  01.07.2022", 262),
    createData("01.07.2021 -  01.02.2022", 250),
    createData("20.02.2021 -  27.02.2022", 237),
    createData("01.02.2021 -  01.02.2022", 262),
  
  ];
const Title = styled(Typography)`
  font-size: 1.3rem;
  color: white;
  margin: 0.5rem;
`;
const Info = styled(Button)`
  font-size: 1rem;
  color: black;
  background-color: white;
  opacity: 0.8;
  font-weight: bold;
  hover: white;
`;
export default class Sigorta extends Component {
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
        <ResponsiveAppBar />      <Container>
        <Grid container spacing={3} style={{padding:'2rem', justifyContent:"center"}} >
        <Grid item md={3}>
          <Card
              sx={{
                padding:'1rem',
                backgroundColor: "#3b77ac",
                display: "flex",
              }}
            > <Title component="div" variant="h5">
                    Sigorta ID
                  </Title>                  <Info variant="contained">122837</Info>
            </Card>
          </Grid>
          <Grid item md={3}>
            <Card
              sx={{
                padding:'1rem',
                backgroundColor: "#3b77ac",
                display: "flex",
              }}
            > <Title component="div" variant="h5">
                   Başlangıç
                  </Title>                  <Info variant="contained">12.06.2022</Info>
            </Card>
          </Grid>
          <Grid item md={3}>
          <Card
              sx={{
                padding:'1rem',
                backgroundColor: "#3b77ac",
                display: "flex",
              }}
            > <Title component="div" variant="h5">
                  Bitiş
                  </Title>                  <Info variant="contained">12.06.2023</Info>
            </Card>
          </Grid>
         
        </Grid>
        <Grid container style={{padding:'2rem', justifyContent:"center"}} >
            <Grid item md={9} >
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
Önceki Kaskolarım                      </TableCell>
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
              </Grid>

            </Grid></Container>
      </div>
    );
  }
}
