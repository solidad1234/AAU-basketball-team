"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Box, Typography, Button, TextField, Snackbar, Alert } from "@mui/material";

export default function ShopComingSoon() {
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setOpen(true);
      setEmail("");
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "#1a202c",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          Shop Coming Soon
        </Typography>
        <Typography variant="h6" component="p" gutterBottom>
          We're working hard to bring you an exciting shopping experience. Stay tuned!
        </Typography>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{ marginTop: "40px", display:"flex", flexDirection: "column" }}
      >
        <TextField
          type="email"
          label="Enter your email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{
            backgroundColor: "white",
            borderRadius: "8px",
            padding: "10px",
            color: "black",
            marginBottom: "20px",
          }}
          required
        />
        <Button
          variant="contained"
          color="primary"
          sx={{ padding: "10px 30px", borderRadius: "30px" }}
          onClick={handleSubmit}
        >
          Notify Me
        </Button>
      </motion.div>

      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Thank you! We will notify you.
        </Alert>
      </Snackbar>
    </Box>
  );
}
