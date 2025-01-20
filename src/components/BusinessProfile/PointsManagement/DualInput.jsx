import { Box, Typography } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";

const DualInput = ({ placeholder1, placeholder2 }) => {
  return (
    <>
      <Box className="flex items-center gap-4 !mt-4">
        <TextField
          variant="outlined"
          placeholder={placeholder1}
          className="!w-1/5 !rounded-full !border-[#E7E7E7] !border-solid"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              height: "50px",
              backgroundColor: "#F9F9F9",
            },
          }}
        />
        <Typography className="!text-lg text-black">To</Typography>
        <TextField
          variant="outlined"
          placeholder={placeholder2}
          className="!w-1/5 !rounded-full !border-[#E7E7E7] !border-solid"
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: "10px",
              height: "50px",
              backgroundColor: "#F9F9F9",
            },
          }}
        />
      </Box>
    </>
  );
};

export default DualInput;
