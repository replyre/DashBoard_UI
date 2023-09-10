import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddProducts from "../pages/products/AddProducts";
import EditIcon from "@mui/icons-material/Edit";
import EditProducts from "../pages/products/EditProducts";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ getUsers, type, row }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      {type ? (
        <Button
          variant="contained"
          onClick={handleOpen}
          endIcon={<AddCircleIcon />}
        >
          Add
        </Button>
      ) : (
        <EditIcon
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
          onClick={handleOpen}
        />
      )}
      <Modal
        open={open}
        // onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {type ? (
            <AddProducts closeEvent={handleClose} getUsers={getUsers} />
          ) : (
            <EditProducts
              closeEvent={handleClose}
              getUsers={getUsers}
              row={row}
            />
          )}
        </Box>
      </Modal>
    </div>
  );
}
