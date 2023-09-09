import React from "react";
import MiniDrawer from "../components/Sidebar";
import { Box, Typography } from "@mui/material";
import PrimarySearchAppBar from "../components/Navbar";
const Settings = () => {
  return (
    <>
      <PrimarySearchAppBar />
      <Box sx={{ display: "flex", p: 5 }}>
        <MiniDrawer />
        <h1>Settings</h1>
      </Box>
    </>
  );
};

export default Settings;
