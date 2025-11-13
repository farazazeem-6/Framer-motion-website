import React, { useEffect, useState } from "react";
import { Modal, Box, Typography, Button } from "@mui/material";
import "../YoutubeModal/YoutubeModal.css";
import HeroImg from "../../../public/personal.jpeg";

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
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const hideUntil = localStorage.getItem("hidePortfolioModalUntil");
    
    if (hideUntil) {
      const hideUntilTime = parseInt(hideUntil);
      const currentTime = Date.now();
      
      // If current time is past the hide time, show the modal
      if (currentTime > hideUntilTime) {
        setOpen(true);
        // Remove the expired timestamp
        localStorage.removeItem("hidePortfolioModalUntil");
      }
    } else {
      // No timestamp exists, show modal
      setOpen(true);
    }
  }, []);

  const handleClose = () => setOpen(false);

  const handleDontShowAgain = () => {

    // const daysToHide = 7;
    const hideUntilTime = Date.now() + (1 * 60 * 1000);

    // const hideUntilTime = Date.now() + (daysToHide * 24 * 60 * 60 * 1000);
    
    localStorage.setItem("hidePortfolioModalUntil", hideUntilTime.toString());
    setOpen(false);
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={style}>
          <Typography sx={heading}>Welcome to My Portfolio!</Typography>
          <Box sx={img}>
            <img sx={{ width: "100px" }} src={HeroImg} alt="" />
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
