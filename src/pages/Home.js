import React from "react";
import MiniDrawer from "../components/Sidebar";
import {
  AppBar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";
import PrimarySearchAppBar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import StorefrontIcon from "@mui/icons-material/Storefront";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import "./Home.css";
import BasicAccordion from "../components/accordian";
import Bar from "../components/Charts/Bar";
import CountUp from "react-countup";
import AppStore from "../hooks/AppStore";
const Home = () => {
  const navcolor = AppStore((state) => state.navcolor);
  return (
    <>
      <Box sx={{ display: "flex", pt: 10, pl: 2, minHeight: "fit-content" }}>
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Stack spacing={2} direction={"row"}>
                <Card
                  sx={{ minWidth: 49 + "%", height: 140 }}
                  className="gradient1"
                >
                  <CardContent>
                    <div>
                      <CreditCardIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $<CountUp end={500} />
                      .00
                    </Typography>
                  </CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pl: 2 }}
                  >
                    Total Earnings
                  </Typography>
                </Card>
                <Card
                  sx={{ minWidth: 49 + "%", height: 140 }}
                  className="gradient2"
                >
                  <CardContent>
                    <div>
                      <ShoppingBagIcon />
                    </div>
                    <Typography gutterBottom variant="h5" component="div">
                      $<CountUp end={900} />
                      .00
                    </Typography>
                  </CardContent>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ pl: 2 }}
                  >
                    Total Orders
                  </Typography>
                </Card>
              </Stack>
            </Grid>
            <Grid item xs={4}>
              <Stack spacing={2}>
                <Card sx={{ maxWidth: 345 }} className="gradient2">
                  <Stack
                    direction={"row"}
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <StorefrontIcon sx={{ fontSize: 28, marginLeft: 1 }} />
                    <div class="side--top--block">
                      <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                        {" "}
                        $120K{" "}
                      </span>
                      <span style={{ fontSize: "15px" }}> Total Income</span>
                    </div>
                  </Stack>
                </Card>
                <Card sx={{ maxWidth: 345 }} className="gradient1">
                  <Stack
                    direction={"row"}
                    sx={{ display: "flex", alignItems: "center", gap: 2 }}
                  >
                    <StorefrontIcon sx={{ fontSize: 28, marginLeft: 1 }} />
                    <div class="side--top--block">
                      <span style={{ fontSize: "17px", fontWeight: "bold" }}>
                        {" "}
                        $120K{" "}
                      </span>
                      <span style={{ fontSize: "15px" }}> Total Income</span>
                    </div>
                  </Stack>
                </Card>
              </Stack>
            </Grid>
          </Grid>
          <Box height={30}></Box>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Card sx={{ height: 60 + "vh", p: 2 }}>
                <Bar />
              </Card>
            </Grid>
            <Grid item xs={4}>
              <Card sx={{ height: 60 + "vh", minHeight: "fit-content", mb: 4 }}>
                <CardContent>
                  <Typography variant="h5" sx={{ pb: 2 }}>
                    {" "}
                    Popular Products
                  </Typography>
                  <BasicAccordion />
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Home;
