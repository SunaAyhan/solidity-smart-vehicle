

import ResponsiveAppBar from "../../components/NavBar";
import Container from "@mui/material/Container";
import LogoIMG from "../../togg.png"; // Import using relative path,
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import { useTheme } from "@emotion/react";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';


const ContainerStyled = styled(Container)`
  padding: 2rem;
`;
const Title = styled(Typography)`
  font-size: 1.3rem;
  color: white;
  margin: 0.5rem;
`;
const Notification = styled(Typography)`
  font-size: 1.3rem;
  color: white;
  margin: 0.5rem;
  font-weight:bold;
`;
const Info = styled(Button)`
  font-size: 1rem;
  color: black;
  background-color: white;
  opacity: 0.8;
  font-weight: bold;
  hover: white;
`;
const InfoNoti = styled(Button)`
  font-size: 1rem;
  color: black;
  background-color: white;
  opacity: 0.5;
`;

function Home() {
  const theme = useTheme();

  return (
    <>
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
        <ContainerStyled>
          <Grid container>
            <Grid item>
            <Grid container mb="1rem"  spacing={2}>
                <Grid item md={5}>
                  <Card
                    sx={{
                      minHeight: "9.5rem",
                      backgroundColor: "#3b77ac",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Title component="div" variant="h5">
Araç Kilometresi                        </Title>
                        <Info variant="contained">5000</Info>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="/Images/km.png"
                    />
                  </Card>
                </Grid>
                <Grid item md={5}>
                  {" "}
                  <Card
                    sx={{
                      minHeight: "9.5rem",
                      backgroundColor: "#3b77ac",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Title component="div" variant="h5">
                          Pil Sağlığı Yüzdesi
                        </Title>
                        <Info variant="contained">%95</Info>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "right",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia

                      component="img"
                      sx={{ width: 151 }}
                      image="/Images/pil.jpg"
                    />
                  </Card>
                </Grid>
              </Grid>
              <Grid container mb="1rem" spacing={2}>
                <Grid item md={5}>
                  <Card
                    sx={{
                      minHeight: "9.5rem",
                      backgroundColor: "#3b77ac",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Title component="div" variant="h5">
                          Sigortaya Kalan Gün{" "}
                        </Title>
                        <Info variant="contained">15</Info>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 151, marginRight: "0rem" }}
                      image="/Images/sigorta.jpg"
                    />
                  </Card>
                </Grid>
                <Grid item md={5}>
                  <Card
                    sx={{

                      minHeight: "9.5rem",
                      backgroundColor: "#3b77ac",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Title component="div" variant="h5">
                          Muayeneye Kalan Gün{" "}
                        </Title>
                        <Info variant="contained">15</Info>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="/Images/muayene.png"
                    />
                  </Card>
                </Grid>
              </Grid>
              <Grid mb={'1rem'} container spacing={2}>
                <Grid item md={5}>
                  <Card
                    sx={{
                      minHeight: "9.5rem",
                      backgroundColor: "#3b77ac",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Title component="div" variant="h5">
                          Bakıma Kalan Gün{" "}
                        </Title>
                        <Info variant="contained">120</Info>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia
                      component="img"
                      sx={{ width: 151 }}
                      image="/Images/tamir.png"
                    />
                  </Card>
                </Grid>
                <Grid item md={5}>
                  {" "}
                  <Card
                    sx={{
                      minHeight: "9.5rem",
                      backgroundColor: "#3b77ac",
                      display: "flex",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <CardContent sx={{ flex: "1 0 auto" }}>
                        <Title component="div" variant="h5">
                          Pil Durumu Yüzdesi
                        </Title>
                        <Info variant="contained">%57</Info>
                      </CardContent>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "right",
                          pl: 1,
                          pb: 1,
                        }}
                      ></Box>
                    </Box>
                    <CardMedia

                      component="img"
                      sx={{ width: 151 }}
                      image="/Images/pil.jpg"
                    />
                  </Card>
                </Grid>
              </Grid>

            </Grid>
            <Grid item md="3">

            <Card sx={{ backgroundColor:'#ffff', border:'1px solid #3b77ac' }}>
      <CardContent>
        <img width={200} height={80} src="/Images/e-devlet.jpg" />
        <Notification  >
         Bildirimlerim
        </Notification>
        <Divider style={{backgroundColor:"#3b77ac", height:'0.1px'}} />

        <Typography sx={{ mb: 1.5 }} color="#3b77ac">
         1000 lira vergi ücretiniz bulunmaktadır.
        </Typography>
        <Divider style={{backgroundColor:"#3b77ac", height:'0.1px'}} />

        <Typography sx={{ mb: 1.5 }} color="#3b77ac">
       Ödenmemiş 200 lira ceza borcunuz vardır.
        </Typography>
        <Divider style={{backgroundColor:"#3b77ac", height:'0.1px'}} />

        <Typography sx={{ mb: 1.5 }} color="#3b77ac">
          E-posta adresinizi doğrulamanız gerekmektedir.
        </Typography>
        <Divider style={{backgroundColor:"w#3b77ac", height:'0.1px'}} />

        <Typography sx={{ mb: 1.5 }} color="#3b77ac">
         Muayene zamanınız yaklaşmıştır.
        </Typography>
        <Divider style={{backgroundColor:"#3b77ac", height:'0.1px'}} />

        <Typography sx={{ mb: 1.5 }} color="#3b77ac">
        1000 lira vergi ücretiniz bulunmaktadır.

      </Typography>
      </CardContent>

    </Card>

            </Grid>
          </Grid>

          {/* <Grid spacing={3} mb="2rem" container>
            <Grid item md={4}>
              <Card sx={{ maxHeight:'9rem', backgroundColor: "#28a745", display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Title component="div" variant="h5">
                      Sigortaya Kalan Gün{" "}
                    </Title>
                    <Info variant="contained">12</Info>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 160, marginRight:'0rem' }}
                  image="/Images/sigo2.jpg"
                />
              </Card>
            </Grid>
            <Grid item md={4}>
            <Card sx={{ maxHeight:'9rem', backgroundColor: "#dc3545", display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Title component="div" variant="h5">
                      Muayeneye Kalan Gün{" "}
                    </Title>
                    <Info variant="contained">12</Info>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/Images/muayene.jpg"
                />
              </Card>
            </Grid>


          </Grid>


          <Grid spacing={3} container>


            <Grid item md={4}>
            <Card sx={{ maxHeight:'9rem', backgroundColor: "#ffc107", display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Title component="div" variant="h5">
                      Bakıma Kalan Gün{" "}
                    </Title>
                    <Info variant="contained">12</Info>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/Images/bakım.jpg"
                />
              </Card>
            </Grid>
            <Grid item md={4} >
            <Card sx={{ maxHeight:'9rem', backgroundColor: "#a128a7", display: "flex" }}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Title component="div" variant="h5">
                      Pil Sağlığı Yüzdesi
                    </Title>
                    <Info variant="contained">12</Info>
                  </CardContent>
                  <Box
                    sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
                  ></Box>
                </Box>
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image="/Images/pil.jpg"
                />
              </Card>
            </Grid>
          </Grid> */}
        </ContainerStyled>
      </div>
    </>
  );
}

export default Home;
