import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  collection,
  updateDoc,
  getDocs,
  doc,
  get,
} from "firebase/firestore/lite";
import { db } from "../../hooks/FirebaseConfig";
import Swal from "sweetalert2";
const EditProducts = ({ closeEvent, getUsers, row }) => {
  const [name, setName] = useState(row.name);
  const [price, setPrice] = useState(parseInt(row.price));
  const [category, setCategory] = useState(row.category);
  const currencies = [
    {
      value: "Mobile",
      label: "Mobile",
    },
    {
      value: "Laptop",
      label: "Laptop",
    },
    {
      value: "Electronics",
      label: "Electronics",
    },
    {
      value: "Food",
      label: "Food",
    },
  ];

  const UpdateUser = async () => {
    if (name.length < 2 || price.length < 1 || category.length < 2) {
      Swal.fire("Error!", "Fields were empty", "error");
      closeEvent();
      return;
    }
    await updateDoc(doc(db, "Products", row.id), {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    });
    getUsers();
    closeEvent();
    Swal.fire("Submitted", "Data Updated", "success");
  };
  console.log(row);
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h5" align="center">
        Edit Products
      </Typography>
      <IconButton
        sx={{ position: "absolute", top: 0, right: "0" }}
        onClick={closeEvent}
      >
        <CloseIcon />
      </IconButton>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            value={name}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            sx={{ minWidth: "100%", mt: 2 }}
            size="small"
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={price}
            id="outlined-basic"
            placeholder="Dollar"
            type="number"
            label="Price"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">$</InputAdornment>
              ),
            }}
            sx={{ minWidth: "100%", mt: 2 }}
            size="small"
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            value={category}
            id="outlined-basic"
            select
            label="Category"
            variant="outlined"
            sx={{ minWidth: "100%", mt: 2 }}
            size="small"
            onChange={(e) => setCategory(e.target.value)}
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" align="center">
            <Button variant="contained" onClick={UpdateUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default EditProducts;
