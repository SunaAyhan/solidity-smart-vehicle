

import ResponsiveAppBar from "../../components/NavBarKayıt";
import LogoIMG from "../../togg.png"; // Import using relative path,
import Button from "@mui/material/Button";
import { Opacity, Password } from "@mui/icons-material";
import { Input, paperClasses } from "@mui/material";
import { injected } from "../../components/wallet";
import { useWeb3React } from "@web3-react/core"
import { Alert } from "@mui/material";
import Cookies from 'universal-cookie';
import abi_device from './abi_device.js';
      var device_bytecode = require('./device_bytecode.js');
      var contractAddress;
      const cookies = new Cookies();

function Kayit_page (){
  const { active, account, library, connector, activate, deactivate } = useWeb3React()

  async function createBtnClick() {
    try {
      const _device_id = document.getElementById("id").value;
      const _device_name = document.getElementById("name").value;
      const _device_model = document.getElementById("model").value;
      const _device_color = document.getElementById("color").value;
      const _device_status = document.getElementById("status").value;
      const _chassis_number = document.getElementById("chassis").value;

      console.log(account);
      const contract = new library.eth.Contract(abi_device);
      contract.deploy({
        data: device_bytecode,
        arguments: [_device_id, _device_name,_device_model,_device_color,_device_status,_chassis_number]
      })
      .send({
          from: account,
          gas: 8000000,
          gasPrice: 25000000000
      }, function(error, transactionHash){ 
          console.log(transactionHash);
      })
      .on('error', function(error){ 
          document.getElementById("errorAlert").style.visibility = "visible";
          console.log(error);
      })
      .on('transactionHash', function(transactionHash){ 
          document.getElementById("runningAlert").style.visibility = "visible";
          console.log(transactionHash);
      })
      .on('receipt', function(receipt){
          document.getElementById("successAlert").style.visibility = "visible";
          document.getElementById("runningAlert").style.visibility = "invisible";

        console.log(receipt.contractAddress) // contains the new contract address
      })
      .on('confirmation', function(confirmationNumber, receipt){ 
          console.log(confirmationNumber);
      })
      .then(function(newContractInstance){
          cookies.set('myDev', newContractInstance.options.address, { path: '/' })
          console.log(newContractInstance.options.address) // instance with the new contract address
          contractAddress = newContractInstance.options.address;
      });
    } catch (ex) {
      console.log(ex)
    }
  }
  return (
    <div style={{
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          height: "100vh",
          backgroundImage: `url(${LogoIMG})`,
        }}>
      <ResponsiveAppBar/>

    <div  style={{
          height: "100%",
          width: "40%",
          marginLeft:"30%",
        }}>


          <div  style={{
          height: "80%",
          width: "100%",
          backgroundColor:"#FFFF",
          marginTop:"20%",
          marginBottom:"25%",
          opacity:"0.9"
        }}>
              <Alert style={{visibility:"hidden", position:"absolute", width:"38%"}} id="errorAlert" severity="error">Hata</Alert>
              <Alert style={{visibility:"hidden", position:"absolute", width:"38%"}} id="runningAlert" severity="info">Araç kaydı devam ediyor</Alert>
              <Alert style={{visibility:"hidden", position:"absolute", width:"38%"}} id="successAlert" severity="success">Araç kaydı başarılı!</Alert>















          <Button   style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"15%",
                marginTop:"10%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }} > Araç id </Button>


              <Input id="id"  placeholder="ID"  style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"10%",
                marginTop:"10%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }}> </Input>

<Button   style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"15%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }} > Araç Adı </Button>


              <Input id="name"  placeholder="İSİM"  style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"10%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }}> </Input>

              <Button   style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"15%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }} > Araç Modeli </Button>


              <Input id="model" placeholder="MODEL"  style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"10%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }}> </Input>
              <Button  style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"15%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }} > Araç Rengi </Button>


              <Input  id="color" placeholder="RENK"  style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"10%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }}> </Input>
              <Button   style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"15%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }} > Araç Durumu </Button>


              <Input  id="status"  placeholder="DURUM"  style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"10%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }}> </Input>
              <Button  style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"15%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }} > Araç Şasesi </Button>


              <Input   id="chassis" placeholder="Şase No"  style={{
                height: "5%",
                float:"left",
                width: "30%",
                marginLeft:"10%",
                marginTop:"5%",

                fontSize:"15px",
                fontWeight:"bold",

                borderStyle: "solid",
                borderWidth: "2px"

              }}> </Input>





























              <Button onClick={createBtnClick} style={{
                height: "10%",
                width: "50%",
                marginLeft:"25%",
                marginTop:"10%",
                marginBottom:"15%",
                backgroundColor:"#3b77ac",


                fontSize:"15px",
                fontWeight:"bold",
                color:"#FFFF",

                borderStyle: "solid",
                borderWidth: "2px"

              }} > ONAYLA </Button>


          </div>


    </div>


    </div>
  )
}

export default Kayit_page;
