import React, { Component } from 'react'
import ResponsiveAppBar from '../../components/NavBar'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import LogoIMG from "../../togg.png"; // Import using relative path,

function createData(id, name,) {
  return { id, name,  };
}

const rows = [
  createData("Hava Filtresi", 2550),
  createData('Fren Hidroliği', 2437),
  createData('Kışlık  Teker', 2622,),
  createData('Lityum İyon Pil', 3054,),
  createData('Elektrikli Motor', 6356, ),
  createData('Klima', 2262,),
  createData('Akü', 3055,),
  createData('Fren Hidroliği', 3556, ),
  
];
export default class Parca extends Component {
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
<ResponsiveAppBar/>
<Container style={{padding:'2rem'}}>
    <Grid container spacing={2}>
       
        <Grid item md={8}>
            <Container style={{padding:'2rem', justifyContent:'center', paddingLeft:'50%'}}>      <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell style={{backgroundColor:'#3b77ac', color:'white', fontWeight:'bold' }} >Seri No</TableCell>
            <TableCell style={{backgroundColor:'#3b77ac',color:'white', fontWeight:'bold' }} align="center"> Parçalarım</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.id}</TableCell>
             
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer></Container>
      
        </Grid>
    </Grid>
</Container>

      </div>
    )
  }
}
