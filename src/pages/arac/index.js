import { Container, Grid, Card, TextField, Typography, Button, Alert } from "@mui/material";
import React, { Component } from "react";
import styled from "@emotion/styled";
import ResponsiveAppBarArac from "../../components/NavBarAraç";
import { useWeb3React } from "@web3-react/core";
import abi_device from './abi_device.js';
import Cookies from "universal-cookie";
import LogoIMG from "../../togg.png"; // Import using relative path,

const cookies = new Cookies();
const CardPanel = styled(Card)`
  padding: 2rem;
  background-color: #3b77ac;
`;
var contractAddress= cookies.get('myDev');
const Aracim = () => {
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function sellButton() {
    try {
      const contract = new library.eth.Contract(abi_device, contractAddress);
      contract.methods.transfer_device(document.getElementById("newOwner").value ).send({from: account}, function(error, transactionHash){ 
        console.log(transactionHash);
      })
      .on('error', function(error){
        document.getElementById("errorAlert").style.visibility = "visible";
        console.log(error);
      }
      )
      .on('transactionHash', function(transactionHash){
        document.getElementById("runningAlert").style.visibility = "visible";
        console.log(transactionHash);
      }
      )
      .on('receipt', function(receipt){
        document.getElementById("successAlert").style.visibility = "visible";
        document.getElementById("runningAlert").style.visibility = "invisible";
        console.log(receipt.contractAddress) // contains the new contract address
      }
      )
    } catch (ex) {
      console.log(ex)
    }
  }

  async function addButton() {
    try {
      const contract = new library.eth.Contract(abi_device, contractAddress);
      contract.methods.addAuthorized(document.getElementById("newOwner").value).send({from: account}, function(error, transactionHash){ 
        console.log(transactionHash);
      })
      .on('error', function(error){
        document.getElementById("errorAlert2").style.visibility = "visible";
        console.log(error);
      }
      )
      .on('transactionHash', function(transactionHash){
        document.getElementById("runningAlert2").style.visibility = "visible";
        console.log(transactionHash);
      }
      )
      .on('receipt', function(receipt){
        document.getElementById("successAlert2").style.visibility = "visible";
        document.getElementById("runningAlert2").style.visibility = "invisible";
        console.log(receipt.contractAddress) // contains the new contract address
      }
      )
    } catch (ex) {
      console.log(ex)
    }
  }

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
        <ResponsiveAppBarArac />
        <Container style={{ padding: "2rem" }}>
          <Grid container style={{ justifyContent: "center" }}>
            <Grid
              style={{ justifyContent: "center", display: "flex" }}
              item
              md={5}
            >
              <Alert style={{visibility:"hidden", position:"absolute", width:"20%"}} id="errorAlert" severity="error">Hata</Alert>
              <Alert style={{visibility:"hidden", position:"absolute", width:"20%"}} id="runningAlert" severity="info">Araç transferi devam ediyor</Alert>
              <Alert style={{visibility:"hidden", position:"absolute", width:"20%"}} id="successAlert" severity="success">Araç transferi başarılı!</Alert>
              <CardPanel>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Araç Satış
                </Typography>
                <TextField
                  id="newOwner"
                  style={{
                    backgroundColor: "white",
                    color: "white",
                    borderRadius: "1rem",
                  }}
                  required variant="filled"
                  label="Cüzdan Adresi"
                  defaultValue=""
                />
                
              </CardPanel>
            </Grid>              

            <Grid
              style={{ justifyContent: "center", display: "flex" }}
              item
              md={5}
            >
              <CardPanel>
              <Alert style={{visibility:"hidden", position:"absolute", width:"20%"}} id="errorAlert" severity="error">Hata</Alert>
              <Alert style={{visibility:"hidden", position:"absolute", width:"20%"}} id="runningAlert" severity="info">Araç transferi devam ediyor</Alert>
              <Alert style={{visibility:"hidden", position:"absolute", width:"20%"}} id="successAlert" severity="success">Araç transferi başarılı!</Alert>
                <Typography
                  style={{
                    color: "white",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  Kullanıcı Ekle
                </Typography>

                <TextField
                  style={{
                    backgroundColor: "white",
                    color: "white",
                    borderRadius: "1rem",
                  }}
                  required
                  id="walletKey" variant="filled"
                  label="Cüzdan Adresi"
                  defaultValue=""
                />
              </CardPanel>
            </Grid>
          </Grid>
          <Grid container  >
                      <Button style={{marginLeft:'19rem', marginTop:'1rem', fontWeight:'bold'}} onClick={sellButton} variant="outlined">Sat</Button>
                      <Button style={{marginLeft:'26rem', marginTop:'1rem', fontWeight:'bold'}} onClick={addButton} variant="outlined">Ekle</Button>

          </Grid>
        </Container>
      </div>
    );
}

export default Aracim;
