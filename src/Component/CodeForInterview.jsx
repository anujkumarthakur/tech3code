import {
  Box,
  Typography,
  styled,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  Button,
  Grid,
} from "@mui/material";

import Download from "../Assets/Images/Itservice.png";
import Database from "../Assets/Images/Database.png";
import Blockchain from "../Assets/Images/Blockchain.png";
import BackendFronted from "../Assets/Images/Backendfront.webp";
import Mobile from "../Assets/Images/Mobile.jpg";

import { height, margin, width } from "@mui/system";
import Footer from "./Footer";

const Header = styled(Box)`
  margin: 50px;
  & > div {
    margin-top: 50px;
  }
`;

const Image = styled("img")({
  width: "70%",
  margin: "auto",
  height: "20%",
});

const CodeForInterview = () => {
  return (
    <Header>
      <div>
        <Box style={{ display: "flex" }}>
          <Image src={Download} />
        </Box>
      </div>

      <div>
        <Grid container spacing={2}>
          <Card style={{ margin: "10px" }}>
            <CardActionArea style={{ margin: 50, height: 500, width: 700, background:"skyblue" }}>
              <CardMedia
                component="img"
                height="flex"
                image={Blockchain}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Blockchain Service
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  variant="h6"
                >
                  We are highly proficient in engineering reliable and secure
                  blockchain technologies from the ground up, and customizing
                  existing blockchain solutions through various system
                  modifications, integrations, and implementations.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card style={{ margin: "10px" }}>
            <CardActionArea style={{ margin: 50, height: 500, width: 800 , background:"skyblue"}}>
              <CardMedia
                component="img"
                height="359"
                image={Database}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Database Service
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  variant="h6"
                >
                  We develop all kinds of database software solutions, providing
                  custom-tailored database platforms to all industry types and
                  business sizes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card style={{ margin: "10px" }}>
            <CardActionArea style={{ margin: 50, height: 500, width: 700 , background:"skyblue"}}>
              <CardMedia
                component="img"
                height="360"
                image={BackendFronted}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Backend Fronetnd Service
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  variant="h6"
                >
                  Back-end developers are responsible for creating, maintaining,
                  testing, and debugging the entire back end of a website. This
                  includes the core application logic, databases, data and
                  application integration, API, and other back end processes.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card style={{ margin: "10px" }}>
            <CardActionArea style={{ margin: 50, height: 500, width: 800, background:"skyblue"  }}>
              <CardMedia
                component="img"
                height="360"
                image={Mobile}
                alt="green iguana"
              />
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Mobile App Service
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  variant="h6"
                >
                  We engineer the ideal mobile app from scratch or expertly
                  revamp your current mobile application with customizable
                  features, integrations, and modifications.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </div>
    <Footer></Footer>
    </Header>
  );
};

export default CodeForInterview;
