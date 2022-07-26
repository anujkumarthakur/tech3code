import react, { useState, useEffect } from "react";
import {
  Typography,
  Card,
  CardMedia,
  CardActionArea,
  CardActions,
  CardContent,
  styled,
  Box,
  Grid,
} from "@mui/material";
import Footer from "./Footer";

import { Link } from "react-router-dom";
import Golang from "../Assets/Images/Golang.png";
import Download from "../Assets/Images/Itservice.png";
import Database from "../Assets/Images/Database.png";
import Blockchain from "../Assets/Images/Blockchain.png";
import BackendFronted from "../Assets/Images/Backendfront.webp";
import Mobile from "../Assets/Images/Mobile.jpg";

const Image = styled("img")({
  width: "100%",
  margin: "auto",
  height: "20%",
});

const AllUsers = () => {
  return (
    <header>
      <div>
        <Box style={{ display: "flex" }}>
          <Image src={Golang} />
        </Box>
      </div>
      <div>
        <Grid container spacing={2} margin={20}>
          <Card style={{ margin: "10px", color: "red" }}>
            <CardActionArea
              style={{
                margin: 10,
                height: 300,
                width: 700,
                background: "skyblue",
              }}
            >
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Golang Game Programming Modification
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  margin={10}
                  variant="h6"
                >
                  Google's Golang scripting enables high-quality 2-Dimesional
                  (2D) and 3-Dimetional (3D) game engine with UI / UX
                  experiences. We modify existing codes written in Golang for IT
                  department remotely. Our deployment scales gaming software
                  development teams rapidly with faster performance and load
                  speed capabilities thanks to our golang development.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{ margin: "10px", color: "red" }}>
            <CardActionArea
              style={{
                margin: 10,
                height: 300,
                width: 700,
                background: "skyblue",
              }}
            >
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Augmenting Machine Learning and AI Coding with Golang
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  margin={10}
                  variant="h6"
                >
                  AI coded Golang speech recognition provides machine learning
                  capabilities to cross-platform applications. We integrate Go
                  language modifications to program machine learning algorithms
                  into software modifications. Deploy programming to convert a
                  business's raw data into predictive deep learning. AI
                  programming uses actionable decision models and enhances UI/UX
                  time management.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card style={{ margin: "10px", color: "red" }}>
            <CardActionArea
              style={{
                margin: 10,
                height: 300,
                width: 700,
                background: "skyblue",
              }}
            >
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Go Language Database Modifications
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  margin={10}
                  variant="h6"
                >
                  We provide interfaces for mysql, sql and sql-like
                  configurations for database software development and
                  augmentation projects using tool such as the Go Bootstrap.
                  Modifications, updates and configuration of existing software
                  databases storage to cloud deployment provides real-time
                  enhancement for reporting speed.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card style={{ margin: "10px", color: "red" }}>
            <CardActionArea
              style={{
                margin: 10,
                height: 300,
                width: 700,
                background: "skyblue",
              }}
            >
              <CardContent>
                <Typography
                  align="center"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  Go language IDE Modification
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  align="center"
                  margin={10}
                  variant="h6"
                >
                  Our team of coders provide companies with IT augmentation for
                  Go language IDE (Integrated Development Environment) windows
                  software and go language ide mac software support. We modify
                  Visual Studios, Atom and GoLang into Go programming language
                  IDE's ecosystems to edit, test and deploy software development
                  projects.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </div>
      <Footer></Footer>
    </header>
  );
};

export default AllUsers;
