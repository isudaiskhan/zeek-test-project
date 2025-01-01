import React from "react";
import { Box, Button, Divider, IconButton, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
import { MoreHoriz } from "@mui/icons-material";
import { Add } from "@mui/icons-material";

const OverViewLandingPage = () => {
  return (
    <Box
      className="flex flex-col p-4"
      sx={{
        width: "266px",
        height: "607px",
        boxShadow: "-1px 2px 20px 0px #00000040",
        borderRadius: "20px",
      }}
    >
      <div className="flex justify-center items-center p-2">
        <Typography sx={{ fontWeight: 400, fontSize: "16px" }}>
          Landing Page
        </Typography>
      </div>
      <Divider sx={{ width: "100%", my: 1 }} />
      <div className="flex justify-start items-center p-4">
        <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
          Added Fields
        </Typography>
      </div>
      <div className="flex flex-row justify-between items-center p-2">
        <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
          First Name*
        </Typography>
        <div className="flex flex-row gap-0">
          <IconButton>
            <Delete fontSize="small" color="error" />
          </IconButton>
          <IconButton>
            <MoreHoriz fontSize="small" />
          </IconButton>
        </div>
      </div>
      <Divider sx={{ width: "100%", mt: 1 }} />
      <div className="flex flex-row justify-between items-center p-2">
        <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
          Last Name*
        </Typography>
        <div className="flex flex-row gap-0">
          <IconButton>
            <Delete fontSize="small" color="error" />
          </IconButton>
          <IconButton>
            <MoreHoriz fontSize="small" />
          </IconButton>
        </div>
      </div>
      <Divider sx={{ width: "100%", mt: 1 }} />
      <div className="flex flex-row justify-between items-center p-2">
        <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
          Email*
        </Typography>
        <div className="flex flex-row gap-0">
          <IconButton>
            <Delete fontSize="small" color="error" />
          </IconButton>
          <IconButton>
            <MoreHoriz fontSize="small" />
          </IconButton>
        </div>
      </div>
      <Divider sx={{ width: "100%", mt: 1 }} />
      <div className="flex flex-row justify-between items-center p-2">
        <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
          Phone Number*
        </Typography>
        <div className="flex flex-row gap-0">
          <IconButton>
            <Delete fontSize="small" color="error" />
          </IconButton>
          <IconButton>
            <MoreHoriz fontSize="small" />
          </IconButton>
        </div>
      </div>
      <Divider sx={{ width: "100%", mt: 1 }} />
      <div className="flex justify-center items-center mt-44 w-full">
        <Button
          variant="outlined"
          startIcon={<Add />}
          sx={{ color: "black", backgroundColor: "white", width: "100%" }}
        >
          Add Field
        </Button>
      </div>
    </Box>
  );
};

export default OverViewLandingPage;
