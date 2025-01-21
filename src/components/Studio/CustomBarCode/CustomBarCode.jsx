import React from "react";
import { BARCODE_TYPES } from "@/enums/barcode";
import { QRCodeSVG } from "qrcode.react";
import Barcode from "react-barcode";

const CustomBarCode = ({ value, size, title, type, format, width, height }) => {
  return (
    <>
      {(type === BARCODE_TYPES.QRCODE || type === BARCODE_TYPES.AZTEC) && (
        <QRCodeSVG value={value} size={size} title={title || "QRCODE"} />
      )}
      {(type === BARCODE_TYPES.CODE128 || type === BARCODE_TYPES.PDF147) && (
        <Barcode
          value={value}
          displayValue={false}
          width={width}
          height={height}
          format={format}
          background="transparent"
          title={title || "BARCODE"}
        />
      )}
      {!Object.values(BARCODE_TYPES).includes(type) && (
        <p>Unsupported barcode type: {type}</p>
      )}
    </>
  );
};

export default CustomBarCode;
