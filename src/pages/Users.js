import React from "react";
import MiniDrawer from "../components/Sidebar";
import { Box, Typography } from "@mui/material";
import PrimarySearchAppBar from "../components/Navbar";
import StickyHeadTable from "./products/ProductList";
const Users = () => {
  return (
    <>
      <div
        style={{ minHeight: "100vh", backgroundColor: "rgb(229, 228, 226)" }}
      >
        <Box
          sx={{
            display: "flex",
            pt: 15,
            pl: 2,
            pb: 2,
          }}
        >
          <MiniDrawer />
          <StickyHeadTable />
        </Box>
      </div>
    </>
  );
};

export default Users;
