import React, { useCallback, useMemo } from "react";
import { useNavigate } from 'react-router-dom';
import { IconButton, Typography, Tooltip, MenuItem, Menu, Avatar, Box } from "@mui/material";

export const AccountMenu = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = useMemo(
    () => Boolean(anchorEl),
    [anchorEl]
  );

  const handleClick = useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, [setAnchorEl]);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, [setAnchorEl]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#810BCF",
          padding: "10px 40px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "80px",
          }}
        >
          {['Contact', 'Profile'].map((text) => (
            <Typography key={text} sx={{ minWidth: 100, cursor: "pointer", color: "white" }}>
              {text}
            </Typography>
          ))}
        </Box>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open || undefined}
          >
            <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={() => navigate("/todo")}>
          <Avatar /> Open Form
        </MenuItem>
      </Menu>
    </>
  );
}