import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Divider, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { db } from "../../hooks/FirebaseConfig";
import Skeleton from "@mui/material/Skeleton";

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore/lite";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import BasicModal from "../../components/Modal";

// function createData(name, code, population, size) {
//   const density = population / size;
//   return { name, code, population, size, density };
// }

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "Products");
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getUsers();
  }, [toggle]);

  const getUsers = async () => {
    setRows([]);
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "Products", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    setToggle(!toggle);
  };
  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      getUsers();
    }
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
      {rows.length !== 0 ? (
        <Paper sx={{ width: "80%", overflow: "hidden" }}>
          <Typography
            gutterBottom
            variant="h5"
            component={"div"}
            sx={{ padding: "20px" }}
          >
            Product List
          </Typography>

          <Box height={10} />
          <Stack direction="row" spacing={2} sx={{ m: 2 }}>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              options={rows}
              sx={{ width: 300 }}
              onChange={(e, v) => filterData(v)}
              getOptionLabel={(rows) => rows.name || ""}
              renderInput={(params) => (
                <TextField {...params} size="small" label="Search Products" />
              )}
            />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <BasicModal getUsers={getUsers} type={true} />
          </Stack>
          <Box height={10} />
          <Divider />
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align={"left"}
                    key={"Name"}
                    style={{ minWidth: "100px" }}
                  >
                    Name
                  </TableCell>
                  <TableCell
                    align={"left"}
                    key={"Price"}
                    style={{ minWidth: "100px" }}
                  >
                    Price
                  </TableCell>
                  <TableCell
                    align={"left"}
                    key={"Category"}
                    style={{ minWidth: "100px" }}
                  >
                    Category
                  </TableCell>
                  <TableCell
                    align={"left"}
                    key={"Date"}
                    style={{ minWidth: "100px" }}
                  >
                    Date
                  </TableCell>
                  <TableCell
                    key={"Action"}
                    align={"left"}
                    style={{ minWidth: "100px" }}
                  >
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.code}
                      >
                        <TableCell key={row.name} align={"left"}>
                          {row.name}
                        </TableCell>
                        <TableCell key={row.price} align={"left"}>
                          {row.price}
                        </TableCell>
                        <TableCell key={row.category} align={"left"}>
                          {row.category}
                        </TableCell>
                        <TableCell key={row.date} align={"left"}>
                          {row.date}
                        </TableCell>
                        <TableCell align="left">
                          <Stack spacing={2} direction="row">
                            <BasicModal getUsers={getUsers} row={row} />
                            {/* <EditIcon
                          sx={{
                            fontSize: "20px",
                            color: "limegreen",
                            cursor: "pointer",
                            "& :hover": {
                              opacity: "80%",
                              transform: "scale(1.1)",
                            },
                          }}
                          className="cursor-pointer"
                          // onClick={() => editUser(row.id)}
                        /> */}
                            <DeleteIcon
                              sx={{
                                fontSize: "20px",
                                color: "red",
                                cursor: "pointer",
                                "& :hover": {
                                  opacity: "80%",
                                  transform: "scale(1.1)",
                                },
                              }}
                              onClick={() => {
                                deleteUser(row.id);
                              }}
                            />
                          </Stack>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      ) : (
        <>
          <Paper
            sx={{
              width: "80%",
              overflow: "hidden",
              backgroundColor: "rgb(229, 228, 226)",
            }}
          >
            <Box height={20} />
            <Skeleton variant="rectangle" width="100%" height={30} />
            <Box height={40} />
            <Skeleton variant="rectangle" width="100%" height={60} />
            <Box height={20} />
            <Skeleton variant="rectangle" width="100%" height={60} />
            <Box height={20} />
            <Skeleton variant="rectangle" width="100%" height={60} />
            <Box height={20} />
            <Skeleton variant="rectangle" width="100%" height={60} />
            <Box height={20} />
            <Skeleton variant="rectangle" width="100%" height={60} />
          </Paper>
        </>
      )}
    </>
  );
}
