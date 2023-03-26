import { Button, Card, Container, Grid, TextField } from "@mui/material";
import React, { Component } from "react";
import styled from "@emotion/styled";
import LogoIMG from "../../togg.png"; // Import using relative path,


import ResponsiveAppBarNav from "../../components/NavBarServis";
const CardPanel= styled(Card)`
  padding: 2rem;
  background-color: #3b77ac;
`;
export default class Servis extends Component {

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
        <ResponsiveAppBarNav />
        <Container
          style={{ padding: "4rem", justifyContent: "center", display: "flex" }}
        >
          <Grid container      style={{  justifyContent: "center", display: "flex" }}>
            <Grid
              style={{ justifyContent: "center", display: "flex" }}
              item
              md={10}
            >
<CardPanel>

              <TextField
              style={{backgroundColor:'white', color:'white', borderRadius:'1rem'}}
                required
                id="filled-basic"  variant="filled" 
                label="Parça Adı"
                defaultValue=""
              />
              </CardPanel>
            </Grid>
            <Grid
              style={{
                marginBottom: "1rem",
                marginTop: "1rem",
                justifyContent: "center",
                display: "flex",
              }}
              item
              md={10}
            >
                <CardPanel>
              <TextField
                    style={{backgroundColor:'white', color:'white', borderRadius:'1rem'}}
                required
                id="filled-basic"  variant="filled" 
                label="Parça İd"
                defaultValue=""
              /></CardPanel>
            </Grid>
            <Grid
              style={{ justifyContent: "center", display: "flex" }}
              item
              md={10}
            >
                <CardPanel>
              <TextField
                    style={{backgroundColor:'white', color:'white', borderRadius:'1rem'}}
                required
                id="filled-basic"  variant="filled" 
                label="Araç Kodu"
                defaultValue=""
              /></CardPanel>
            </Grid>

            <Grid
              style={{ justifyContent: "center", display: "flex" }}
              item
              md={10}
            >
                <Button style={{marginTop:'1rem', backgroundColor:'#3b77ac'}} variant="contained" >Ekle</Button>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}
