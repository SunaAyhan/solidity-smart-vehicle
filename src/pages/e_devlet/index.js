
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "../../components/NavBar";
import LogoIMG from "../../togg.png"; // Import using relative path,
import Button from "@mui/material/Button";
import { Opacity, Password } from "@mui/icons-material";
import { Alert, paperClasses } from "@mui/material";
import { injected } from "../../components/wallet";
import { useWeb3React } from "@web3-react/core"
const edevletBtnClick = (event) =>{
  document.getElementById("edevletConfirm").style.visibility = "visible";
}



function E_devlet(){
  let navigate = useNavigate();

  const { active, account, library, connector, activate, deactivate } = useWeb3React()
  async function connect() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  async function disconnect() {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }
  async function walletBtnClick() {
    try {
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
    document.getElementById("walletConfirm").style.visibility = "visible";
  }

  async function addBtnClick() {
    navigate("/kayit"); 
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
          height: "60%",
          width: "100%",
          backgroundColor:"#FFFF",
          marginTop:"20%",
          marginBottom:"25%",
         
          borderRadius:"1rem"
        }}>
          <Button  onClick={edevletBtnClick}  style={{
                height: "15%",
                float:"left",
                width: "40%",
                marginLeft:"30%",
                marginTop:"10%",
                fontSize:"15px",
                fontWeight:"bold",



                backgroundColor:"#FFFF",

                color: "red",
                borderColor: "red",
                borderStyle: "solid",
                borderWidth: "2px"

              }} > E-DEVLET GİRİS</Button>
              <h1 id="edevletConfirm" style={{
                visibility:"hidden",
                float:"left",
                marginLeft:"10%",
                marginTop:"10%"}}>✔️</h1>


              <Button onClick={walletBtnClick}  style={{
                height: "15%",
                float:"left",
                width: "40%",
                marginLeft:"30%",
                marginTop:"10%",

                fontSize:"15px",
                fontWeight:"bold",

                backgroundColor:"#FFFF",

                borderStyle: "solid",
                borderWidth: "2px"
              }} > CÜZDAN GİRİS</Button>

              <h1 id="walletConfirm" style={{
                visibility:"hidden",
                float:"left",
                marginLeft:"10%",
                marginTop:"10%"}}>✔️</h1>

              <Button onClick={addBtnClick} style={{
                height: "15%",
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

              }} > KAYDOL </Button>
              


          </div>


    </div>


    </div>
  )
}

export default E_devlet;
