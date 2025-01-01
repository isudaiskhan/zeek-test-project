import {
  Box,
  Divider,
  FormControlLabel,
  FormGroup,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";
import React from "react";
import Image from "next/image";

const BarCodeTab = () => {
  const [barcodeChecked, setBarcodeChecked] = React.useState(true);
  const [securityChecked, setSecurityChecked] = React.useState(true);
  const [rotationChecked, setRotationChecked] = React.useState(true);

  const handleBarcodeChange = (event) => {
    setBarcodeChecked(event.target.checked);
  };

  const handleSecurityChange = (event) => {
    setSecurityChecked(event.target.checked);
  };

  const handleRotationChange = (event) => {
    setRotationChecked(event.target.checked);
  };
  return (
    <div>
      <Box className="flex justify-start items-center px-5 py-2">
        <QrCodeIcon sx={{ fontSize: "20px", color: "black", mr: 1 }} />
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: "20px",
            color: "black",
            textAlign: "left",
          }}
        >
          Barcode
        </Typography>
      </Box>
      <Divider sx={{ width: "100%" }} />
      <Box className="flex flex-col justify-start items-center px-5 py-2">
        <div className="flex justify-start items-start py-2">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={barcodeChecked}
                  onChange={handleBarcodeChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Show Barcode on Card"
            />
          </FormGroup>
        </div>
        <div className="flex flex-row justify-between items-center gap-4 py-2">
          <Box className="flex w-[120] h-[120] justify-center items-center rounded-md bg-[#EAEAEA] p-4">
            <Box className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/images/barcode.png"
                alt="Barcode"
                width={80}
                height={80}
              />
              <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
                QR Code
              </Typography>
            </Box>
          </Box>
          <Box className="flex w-[120] h-[120] justify-center items-center rounded-md bg-[#EAEAEA] p-4">
            <Box className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/images/barcode.png"
                alt="Barcode"
                width={80}
                height={80}
              />
              <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
                QR Code
              </Typography>
            </Box>
          </Box>
        </div>
        <div className="flex flex-row justify-between items-center gap-4 py-2">
          <Box className="flex w-[120] h-[120] justify-center items-center rounded-md bg-[#EAEAEA] p-4">
            <Box className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/images/barcode.png"
                alt="Barcode"
                width={80}
                height={80}
              />
              <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
                QR Code
              </Typography>
            </Box>
          </Box>
          <Box className="flex w-[120] h-[120] justify-center items-center rounded-md bg-[#EAEAEA] p-4">
            <Box className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/images/barcode.png"
                alt="Barcode"
                width={80}
                height={80}
              />
              <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
                QR Code
              </Typography>
            </Box>
          </Box>
        </div>
      </Box>
      <Box className="flex flex-col justify-start items-start px-5 py-2">
        <div className="flex flex-col w-full">
          <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
            Encoded Barcode Content
          </Typography>
          <TextField variant="outlined" rows={2} fullWidth className="w-full" />
        </div>
        <div className="flex flex-col w-full mt-5">
          <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
            Text Below Barcode
          </Typography>
          <TextField variant="outlined" rows={2} fullWidth className="w-full" />
          <Typography sx={{ fontWeight: 400, fontSize: "8px", color: "black" }}>
            This text will be displayed below the barcode on the poss. It is
            typically used to provide a hint to the user about the barcode
            represents. Google Wallet will fill this field with the contents of
            barcode if nothing is provided.
          </Typography>
        </div>
        <div className="flex justify-start items-start py-2">
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  checked={securityChecked}
                  onChange={handleSecurityChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Security Animation"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={rotationChecked}
                  onChange={handleRotationChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Rotating Barcode"
            />
          </FormGroup>
        </div>
      </Box>
    </div>
  );
};

export default BarCodeTab;
