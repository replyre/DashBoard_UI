import React from "react";
import MiniDrawer from "../components/Sidebar";
import { Box, Card, CardContent, Grid, Stack, Typography } from "@mui/material";
import PrimarySearchAppBar from "../components/Navbar";
import AppStore from "../hooks/AppStore";
import BasicTabs from "./settings/Lists";

const Settings = () => {
  const updateColor = AppStore((state) => state.updateColor);
  const navcolor = AppStore((state) => state.navcolor);
  return (
    <>
      <Box
        sx={{
          display: "flex",
          pt: 10,
          pl: 2,
          minHeight: "fit-content",
        }}
      >
        <MiniDrawer />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Card
                sx={{
                  minWidth: 49 + "%",
                  height: 120,
                  backgroundColor: "",
                }}
              >
                <CardContent>
                  <Typography gutterBottom variant="h6" component="div">
                    Navigation Bar
                  </Typography>
                </CardContent>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ pl: 2 }}
                >
                  <Stack spacing={2} direction={"row"}>
                    <Box
                      sx={{
                        border: "2px solid  rgb(162, 201, 236)",
                        padding: "2px",
                        borderRadius: "50%",
                        "& :hover": {
                          opacity: "80%",
                        },
                      }}
                      onClick={() => {
                        AppStore.setState({ navcolor: "rgb(162, 201, 236)" });
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: "rgb(162, 201, 236)",
                          padding: "5px 11px",
                          borderRadius: "50%",
                          height: "22px",
                          cursor: "pointer",
                        }}
                      ></Box>
                    </Box>
                    <Box
                      sx={{
                        border: "2px solid rgb(111, 236, 194)",
                        padding: "2px",
                        borderRadius: "50%",
                        "& :hover": {
                          opacity: "80%",
                        },
                      }}
                      onClick={() => {
                        AppStore.setState({ navcolor: "rgb(111, 236, 194)" });
                      }}
                    >
                      <Box
                        sx={{
                          backgroundColor: " rgb(111, 236, 194)",
                          padding: "5px 11px",
                          borderRadius: "50%",
                          height: "22px",
                          cursor: "pointer",
                        }}
                      ></Box>
                    </Box>
                    <Box
                      sx={{
                        border: "2px solid",
                        padding: "2px",
                        borderRadius: "50%",
                        "& :hover": {
                          opacity: "80%",
                        },
                      }}
                      onClick={() => {
                        AppStore.setState({ navcolor: "white" });
                      }}
                    >
                      <Box
                        sx={{
                          padding: "5px 10px",
                          borderRadius: "50%",
                          height: "22px",
                          cursor: "pointer",
                          border: "0.5px solid",
                        }}
                      ></Box>
                    </Box>
                  </Stack>
                </Typography>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Settings;
