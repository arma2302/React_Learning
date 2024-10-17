import { Alert, Collapse, IconButton } from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

export default function AlertPopup({ setAlert }) {
  const [open, setOpen] = useState(true);
  return (
    <>
      <Collapse in={open} className="absolute left-24 top-4 w-1/2">
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false), setAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Item Added to cart Succesfully
        </Alert>
      </Collapse>
    </>
  );
}
