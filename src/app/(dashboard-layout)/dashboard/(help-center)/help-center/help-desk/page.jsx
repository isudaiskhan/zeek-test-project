import { MailOutline } from "@mui/icons-material";
import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import { ConfirmationNumberOutlined } from "@mui/icons-material";
import { MdOutlineGroups2 } from "react-icons/md";

const HelpDesk = () => {
  return (
    <Box className="p-8">
      <div className="flex flex-col gap-4 justify-start items-start">
        <div className="flex flex-col gap-2 w-[60%]">
          <Typography sx={{ fontWeight: 400, fontSize: "24px" }}>
            Help Desk
          </Typography>
          <Typography
            sx={{ fontWeight: 400, fontSize: "14px", color: "#838383" }}
          >
            Need more help? Our Help Desk is here to provide personalized
            support. Whether you have technical issues, billing questions, or
            need guidance, we&apos;re just a message or call away.
          </Typography>
        </div>
        <div className="flex flex-col gap-6 !justify-start !items-start mt-4">
          <Box
            className="flex flex-col gap-6 w-full rounded-[20px] bg-[#FFFFFF] px-8 py-10"
            sx={{
              boxShadow: "0px 0px 10px 0px #00000040",
            }}
          >
            <Typography sx={{ fontWeight: 500, fontSize: "22px" }}>
              Contact Options
            </Typography>

            <Grid container spacing={10}>
              <Grid item size={{ xs: 12, md: 6 }}>
                <div className="flex flex-col gap-2 ">
                  <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
                    Email Us
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 400, fontSize: "14px", color: "#838383" }}
                  >
                    Send us an email at{" "}
                    <span className="text-[#FF5B00]">
                      contact@thezeekcompany.com.
                    </span>{" "}
                    Our team will respond within 24 hours.
                  </Typography>
                  <Box
                    className="flex flex-row gap-2 items-center justify-center rounded-md px-3 py-1 w-[150px] cursor-pointer"
                    sx={{ border: "1px solid #E2E2E2" }}
                  >
                    <MailOutline sx={{ color: "#FF5B00" }} fontSize="small" />
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#FF5B00",
                      }}
                    >
                      Send an Email
                    </Typography>
                  </Box>
                </div>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <div className="flex flex-col gap-2 ">
                  <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
                    Call Us
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 400, fontSize: "14px", color: "#838383" }}
                  >
                    Reach us at{" "}
                    <span className="text-[#FF5B00]">+971 55 123-4567</span>{" "}
                    Monday to Friday, 9 AM–5 PM.
                  </Typography>
                </div>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <div className="flex flex-col gap-2 w-[40%]">
              <Typography sx={{ fontWeight: 400, fontSize: "18px" }}>
                Submit a Ticket
              </Typography>
              <Typography
                sx={{ fontWeight: 400, fontSize: "14px", color: "#838383" }}
              >
                For more complex issues, create a support ticket with details
                and attach files/screenshots if necessary.
              </Typography>
              <Box
                className="flex flex-row gap-2 items-center justify-center rounded-md px-3 py-1 w-[160px] cursor-pointer"
                sx={{ border: "1px solid #E2E2E2" }}
              >
                <ConfirmationNumberOutlined
                  sx={{ color: "#FF5B00" }}
                  fontSize="small"
                />
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: "14px",
                    color: "#FF5B00",
                  }}
                >
                  Submit a Ticket
                </Typography>
              </Box>
            </div>
          </Box>
          <Box
            className="flex flex-col gap-6 w-full rounded-[20px] bg-[#FFFFFF] px-8 py-10"
            sx={{
              boxShadow: "0px 0px 10px 0px #00000040",
            }}
          >
            <Grid container spacing={2}>
              <Grid item size={{ xs: 12, md: 6 }}>
                <div className="flex flex-col gap-2 justify-start items-start">
                  <Typography sx={{ fontWeight: 500, fontSize: "16px" }}>
                    Set-up a Meeting
                  </Typography>
                  <Typography
                    sx={{ fontWeight: 400, fontSize: "14px", color: "#838383" }}
                  >
                    Need help with something urgently? set-up a meeting with our
                    team to sort it out!
                  </Typography>
                </div>
              </Grid>
              <Grid item size={{ xs: 12, md: 6 }}>
                <div className="flex justify-end items-end">
                  <Box
                    className="flex flex-row gap-2 items-center justify-center rounded-md px-3 py-1 w-[150px] cursor-pointer"
                    sx={{ border: "1px solid #E2E2E2" }}
                  >
                    <MdOutlineGroups2
                      style={{ color: "#FF5B00", fontSize: "20px" }}
                    />
                    <Typography
                      sx={{
                        fontWeight: 400,
                        fontSize: "14px",
                        color: "#FF5B00",
                      }}
                    >
                      Book Meeting
                    </Typography>
                  </Box>
                </div>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default HelpDesk;
