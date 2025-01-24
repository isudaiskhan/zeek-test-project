import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

const ProfileBusinessAddress = ({
  country,
  city,
  street,
  buildingNo,
  postalCode,
  floor,
}) => {
  return (
    <Card className="!rounded-lg !border p-3 !border-[#E7E7E7] !border-solid !shadow-none">
      <CardContent>
        <div className="flex justify-between items-center">
          <Typography
            variant="h6"
            className="text-[#000000] !font-sans !mb-3 !text-[15px]"
          >
            Primary Business Address
          </Typography>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
          <div>
            <Typography
              className="!text-[#A7A7A7] !text-[14px]"
              variant="body2"
            >
              Country
            </Typography>
            <Typography className="!text-[#000000] !text-[15px] !font-sans">
              {country}
            </Typography>
          </div>
          <div>
            <Typography
              className="!text-[#A7A7A7] !text-[14px]"
              variant="body2"
            >
              City/State
            </Typography>
            <Typography className="!text-[#000000] !text-[15px] !font-sans">
              {city}
            </Typography>
          </div>
          <div>
            <Typography
              className="!text-[#A7A7A7] !text-[14px]"
              variant="body2"
            >
              Street Name
            </Typography>
            <Typography className="!text-[#000000] !text-[15px] !font-sans">
              {street}
            </Typography>
          </div>

          <div>
            <Typography
              className="!text-[#A7A7A7] !text-[14px]"
              variant="body2"
            >
              Building No.
            </Typography>
            <Typography className="!text-[#000000] !text-[15px] !font-sans">
              {buildingNo}
            </Typography>
          </div>

          <div>
            <Typography
              className="!text-[#A7A7A7] !text-[14px]"
              variant="body2"
            >
              Postal Code
            </Typography>
            <Typography className="!text-[#000000] !text-[15px] !font-sans">
              {postalCode}
            </Typography>
          </div>

          <div>
            <Typography
              className="!text-[#A7A7A7] !text-[14px]"
              variant="body2"
            >
              Floor (Optional)
            </Typography>
            <Typography className="!text-[#000000] !text-[15px] !font-sans">
              {floor}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBusinessAddress;
