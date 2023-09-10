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
import { collection, addDoc, getDocs } from "firebase/firestore/lite";
import { db } from "../../hooks/FirebaseConfig";
import Swal from "sweetalert2";
const AddProducts = ({ closeEvent, getUsers }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const currencies = [
    {
      value: "Moblie",
      label: "Moblie",
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

  const createUser = async () => {
    if (name.length < 2 || price.length < 1 || category.length < 2) {
      Swal.fire("Error!", "Fields were empty", "error");
      closeEvent();
      return;
    }
    await addDoc(collection(db, "Products"), {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    });
    getUsers();
    closeEvent();
    Swal.fire("Submitted", "Data Submitted", "success");
  };
  console.log(name, price, category);
  return (
    <Box sx={{ m: 2 }}>
      <Typography variant="h5" align="center">
        Add Products
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
            <Button variant="contained" onClick={createUser}>
              Submit
            </Button>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddProducts;
