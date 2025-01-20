import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { FaRegEdit } from "react-icons/fa";

const ProfileBusinessAddress = ({ address }) => {
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
          <Button
            variant="outlined"
            className="!text-xs !ml-auto !text-[#5F5F5F] !font-thin !px-5 !font-maven !rounded-full !border-[#C1C1C1] flex justify-between items-center"
          >
            Edit
            <FaRegEdit className="ml-2 text-xs text-[#888888]" />
          </Button>
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
              {address.country}
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
              {address.city}
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
              {address.street}
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
              {address.postalCode}
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
              {address.floor}
            </Typography>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileBusinessAddress;
