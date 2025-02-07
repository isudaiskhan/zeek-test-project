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
import CustomBarCode from "../../CustomBarCode/CustomBarCode";
import { BARCODE_TYPES } from "@/enums/barcode";

const BarCodeTab = ({
  handleCodeSelect,
  selectedCode,
  handleBarcodeContentChange,
  barcodeContent,
  handleSecurityAnimationChange,
  securityAnimationSwitch,
  handleRotatingBarcodeChange,
  rotatingBarcodeSwitch,
  handleShowBarCodeChange,
  showBarCodeSwitch,
}) => {
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
                  checked={showBarCodeSwitch}
                  onChange={handleShowBarCodeChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Show Barcode on Card"
            />
          </FormGroup>
        </div>
        <div className="flex flex-row justify-between items-center gap-4 py-2">
          <Box
            className={`flex w-[120px] h-[120px] justify-center items-center rounded-md ${
              selectedCode.type === BARCODE_TYPES.QRCODE
                ? "bg-[#FFDAC5]"
                : "bg-[#EAEAEA]"
            } p-4 cursor-pointer`}
            onClick={() =>
              handleCodeSelect(BARCODE_TYPES.QRCODE, barcodeContent)
            }
          >
            <Box className="flex flex-col justify-center items-center gap-2">
              <CustomBarCode
                value={barcodeContent || "https://zeek.com"}
                size={80}
                title="My QR Code"
                type={BARCODE_TYPES.QRCODE}
              />
              <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
                QR Code
              </Typography>
            </Box>
          </Box>
          <Box
            className={`flex w-[120px] h-[120px] justify-center items-center rounded-md ${
              selectedCode.type === BARCODE_TYPES.AZTEC
                ? "bg-[#FFDAC5]"
                : "bg-[#EAEAEA]"
            } p-4 cursor-pointer`}
            onClick={() =>
              handleCodeSelect(BARCODE_TYPES.AZTEC, barcodeContent)
            }
          >
            <Box className="flex flex-col justify-center items-center gap-2">
              <CustomBarCode
                value={barcodeContent || "https://zeek.com"}
                size={80}
                title="My QR Code"
                type={BARCODE_TYPES.AZTEC}
              />
              <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
                QR Code
              </Typography>
            </Box>
          </Box>
        </div>
        <div className="flex flex-row justify-between items-center gap-4 py-2">
          <Box
            className={`flex w-[120px] h-[80px] justify-center items-center rounded-md ${
              selectedCode.type === BARCODE_TYPES.CODE128
                ? "bg-[#FFDAC5]"
                : "bg-[#EAEAEA]"
            } px-1 py-1 cursor-pointer`}
            onClick={() =>
              handleCodeSelect(BARCODE_TYPES.CODE128, barcodeContent)
            }
          >
            <Box className="flex flex-col justify-center items-center gap-2">
              <CustomBarCode
                value={barcodeContent || "https://zeek.com"}
                width={0.4}
                height={20}
                title="My Barcode"
                format="CODE128"
                type={BARCODE_TYPES.CODE128}
              />
              <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
                Bar Code
              </Typography>
            </Box>
          </Box>
          <Box
            className={`flex w-[120px] h-[80px] justify-center items-center rounded-md  ${
              selectedCode.type === BARCODE_TYPES.PDF147
                ? "bg-[#FFDAC5]"
                : "bg-[#EAEAEA]"
            } px-0 py-1 cursor-pointer`}
            onClick={() =>
              handleCodeSelect(BARCODE_TYPES.PDF147, barcodeContent)
            }
          >
            <Box className="flex flex-col justify-center items-center gap-2">
              <CustomBarCode
                value={barcodeContent || "https://zeek.com"}
                width={0.4}
                height={20}
                title="My Barcode"
                format="CODE128"
                type={BARCODE_TYPES.PDF147}
              />
              <Typography sx={{ fontWeight: 400, fontSize: "11px" }}>
                Bar Code
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
          <TextField
            variant="outlined"
            rows={2}
            fullWidth
            className="w-full"
            onChange={handleBarcodeContentChange}
            value={barcodeContent}
          />
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
                  checked={securityAnimationSwitch}
                  onChange={handleSecurityAnimationChange}
                  inputProps={{ "aria-label": "controlled" }}
                />
              }
              label="Security Animation"
            />
            <FormControlLabel
              control={
                <Switch
                  checked={rotatingBarcodeSwitch}
                  onChange={handleRotatingBarcodeChange}
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
