import React from "react";
import MiniDrawer from "../components/Sidebar";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import PrimarySearchAppBar from "../components/Navbar";
import "./Analytics.css";
import { Geo } from "../components/GeoChart";
import { DonutPie } from "../components/Charts/PieChart";
import { HorizontalBar } from "../components/Charts/horizontalBar";
import CountUp from "react-countup";
const About = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          pt: 10,
          pl: 2,
          minHeight: "fit-content",
          backgroundColor: "rgb(229, 228, 226)",
        }}
      >
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={4} sx={{ pr: 2 }}>
              <Stack spacing={2} direction={"row"} sx={{ pb: 2 }}>
                <Card
                  sx={{ minWidth: 49 + "%", height: "120px" }}
                  className="gradient1"
                >
                  <CardContent>
                    <div>Visitors</div>
                    <Typography gutterBottom variant="h5" component="div">
                      <CountUp end={24630}></CountUp>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 49 + "%", height: 120 }}
                  className="gradient2"
                >
                  <CardContent>
                    <div>Visitors</div>
                    <Typography gutterBottom variant="h5" component="div">
                      <CountUp end={24630}></CountUp>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
              <Stack spacing={2} direction={"row"}>
                <Card
                  sx={{ minWidth: 49 + "%", height: 120 }}
                  className="gradient1"
                >
                  <CardContent>
                    <div>Visitors</div>
                    <Typography gutterBottom variant="h5" component="div">
                      <CountUp end={24630}></CountUp>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
                <Card
                  sx={{ minWidth: 49 + "%", height: 120 }}
                  className="gradient2"
                >
                  <CardContent>
                    <div>Visitors</div>
                    <Typography gutterBottom variant="h5" component="div">
                      <CountUp end={24630}></CountUp>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Since last week
                    </Typography>
                  </CardContent>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={8}>
              <Card sx={{ height: 36.35 + "vh" }}>
                <HorizontalBar />
              </Card>
            </Grid>
          </Grid>
          <Box height={30}></Box>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 38 + "vh", p: 1 }}>
                <Geo />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 38 + "vh", minHeight: "fit-content", mb: 4 }}>
                <CardContent>
                  <DonutPie />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default About;
