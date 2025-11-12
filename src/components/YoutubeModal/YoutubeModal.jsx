import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import "../YoutubeModal/YoutubeModal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const heading = {
  fontSize: "18px",
  color: "var(--purple-button-color)",
  fontWeight: "900",
};
const img = {
  width: "250px",
  marginTop: "10px",
  borderRadius: "40px",
  cursor: "pointer",
};

const secondary = {
  bgcolor: "#bbb",
  borderRadius: "8px",
  border: "1px solid #bbb",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "800",
  color: "white",
  padding: "10px 25px",
};
const primary = {
  bgcolor: "var(--purple-button-color)",
  borderRadius: "8px",
  border: "1px solid #bbb",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "800",
  color: "white",
  padding: "10px 25px",
};

export default function BasicModal() {
  const [open, setOpen] = useState(() => {
    const dontShow = localStorage.getItem("hidePortfolioModal");
    return !dontShow;
  });

  const handleClose = () => setOpen(false);

  const handleDontShowAgain = () => {
    localStorage.setItem("hidePortfolioModal", "true");
    setOpen(false);
  };
  return (
    <div>
      {/* <Button sx={{ zIndex: 1000 }} variant="contained" onClick={handleOpen}>
        Open Modal
      </Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography sx={heading}>Welcome to My Portfolio!</Typography>
          <Box sx={img}>
            <img
              sx={{ width: "100px" }}
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=580"
              alt=""
            />
          </Box>
          <Box
            sx={{
              marginTop: "10px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            <Button
              disableRipple={false}
              disableFocusRipple={false}
              TouchRippleProps={false}
              sx={primary}
              onClick={handleDontShowAgain}
            >
              Don't show again
            </Button>
            <Button
              disableRipple={false}
              disableFocusRipple={false}
              TouchRippleProps={false}
              sx={secondary}
              onClick={handleClose}
            >
              Close
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
