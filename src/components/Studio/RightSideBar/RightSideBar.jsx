import { Close } from "@mui/icons-material";
import { DeleteOutline } from "@mui/icons-material";
import {
  Box,
  Divider,
  FormControlLabel,
  FormGroup,
  IconButton,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

const RightSideBar = () => {
  const [requiredChecked, setRequiredChecked] = React.useState(false);
  const handleRequiredChange = (event) => {
    setRequiredChecked(event.target.checked);
  };
  return (
    <Box
      className="flex flex-col p-3 w-[18%]"
      sx={{
        boxShadow: "-1px 2px 20px 0px #00000040",
        border: "1px light #000000",
        position: "absolute",
        right: 0,
        height: "100vh",
        overflow: "hidden",
        overflowY: "scroll",
        scrollbarWidth: "none", // For Firefox
        "&::-webkit-scrollbar": {
          display: "none", // For Chrome, Safari, and Edge
        },
      }}
    >
      <Box className="flex flex-row gap-4 justify-between items-center p-2">
        <div className="items-start">
          <Typography sx={{ fontWeight: 400, fontSize: "14px" }}>
            First Name
          </Typography>
        </div>
        <div className="flex flex-row gap-2 items-center">
          <IconButton>
            <DeleteOutline fontSize="small" color="warning" />
          </IconButton>
          <IconButton>
            <Close fontSize="small" />
          </IconButton>
        </div>
      </Box>
      <Divider sx={{ my: 1, width: "100%" }} />
      <Box className="flex flex-col gap-4 justify-start items-start p-2">
        <div className="flex justify-start items-start py-2">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={requiredChecked}
                  onChange={handleRequiredChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Required"
            />
          </FormGroup>
        </div>
        <div className="flex flex-col gap-1 justify-start items-start py-2 w-full">
          <label className="font-normal text-sm mr-1">Label</label>
          <TextField
            variant="outlined"
            rows={1}
            multiline
            fullWidth
            sx={{
              border: "1px solid #888888",
              borderRadius: "8px",
              color: "#D9D9D900",
            }}
          />
        </div>
        <div className="flex flex-col gap-1 justify-start items-start py-2 w-full">
          <label className="font-normal text-sm mr-1">Display Value</label>
          <TextField
            variant="outlined"
            rows={1}
            multiline
            fullWidth
            sx={{
              border: "1px solid #888888",
              borderRadius: "8px",
              color: "#D9D9D900",
            }}
          />
          <p className="font-normal text-[#797979] text-[10px] mr-1 mt-0 pt-0">
            Static Text on the customers pass
          </p>
        </div>
        <div className="flex flex-col gap-1 justify-start items-start py-2 w-full">
          <label className="font-normal text-sm mr-1">Label</label>
          <TextField
            variant="outlined"
            rows={1}
            multiline
            fullWidth
            sx={{
              border: "1px solid #888888",
              borderRadius: "8px",
              color: "#D9D9D900",
            }}
          />
        </div>
      </Box>
    </Box>
  );
};

export default RightSideBar;
