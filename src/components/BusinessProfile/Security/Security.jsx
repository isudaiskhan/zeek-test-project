"use client";
import React, { useState } from "react";
import { Box, Switch, Typography, Card } from "@mui/material";
import ChangePasswordForm from "./ChangePasswordForm";
import ManageSessions from "./ManageSessions";
import { manageSessions } from "@/utils/dummy-data";
import EastIcon from "@mui/icons-material/East";

const Security = () => {
  const [activeComponent, setActiveComponent] = useState(null);

  return (
    <div className="flex">
      <div className="flex justify-center items-center w-full">
        {activeComponent === null && (
          <Card className="p-6 w-full !shadow-none">
            <Typography
              variant="h5"
              className="!mb-4 !py-3 !font-inter !border-b !border-[#E7E7E7] !border-solid !border-0 !text-2xl"
            >
              Security
            </Typography>
            <Box className="!mt-10 flex justify-between items-center">
              <div>
                <Typography className="!text-lg !mb-2">
                  Two-factor Authentication
                </Typography>
                <Typography className="!text-[#838383] !text-sm">
                  Enhance your account security by enabling two-factor
                  authentication.
                </Typography>
              </div>
              <Switch color="primary" />
            </Box>

            <div className="flex flex-col gap-4 mt-10">
              <div
                className="!mb-4 !font-sans flex items-center cursor-pointer !text-black !text-lg "
                onClick={() => setActiveComponent("ChangePassword")}
              >
                Change Password
                <EastIcon className="ml-6 text-[#C1C1C1]" />
              </div>
              <div
                className="!font-sans items-center flex cursor-pointer !text-black !text-lg"
                onClick={() => setActiveComponent("ManageSessions")}
              >
                Manage Sessions
                <EastIcon className="ml-7 text-[#C1C1C1]" />
              </div>
            </div>
          </Card>
        )}

        {activeComponent === "ChangePassword" && (
          <ChangePasswordForm onClose={() => setActiveComponent(null)} />
        )}
        {activeComponent === "ManageSessions" && (
          <ManageSessions
            data={manageSessions}
            onClose={() => setActiveComponent(null)}
          />
        )}
      </div>
    </div>
  );
};

export default Security;
