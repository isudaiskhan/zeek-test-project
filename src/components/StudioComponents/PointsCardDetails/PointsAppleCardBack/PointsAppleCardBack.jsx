import { LINK_TYPES } from "@/enums/loyalty-card-actions";
import { Box, Card, CardContent, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const PointsAppleCardBack = ({
  companyName,
  activeLinks,
  issuerInformation,
}) => {
  return (
    <Box className="flex flex-col justify-center items-center gap-4">
      <Box className="flex flex-col justify-center items-center gap-4 mt-2">
        <Box className="flex rounded-md w-[50px] h-[40px] bg-white"></Box>
        <Typography sx={{ fontSize: "12px", fontWeight: 500 }}>
          Card Description
        </Typography>
      </Box>
      <Card className="flex gap-2 !rounded-md h-[365px] w-[225px] overflow-y-auto bg-[#FFFFFF]">
        <CardContent
          className="h-full w-full overflow-y-auto"
          sx={{
            "&::-webkit-scrollbar": { width: "2px", height: "2px" },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#FFDAC5",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb:hover": { backgroundColor: "#555" },
            "&::-webkit-scrollbar-track": { backgroundColor: "#f4f4f4" },
          }}
        >
          <Box className="flex flex-col gap-2 justify-start items-start">
            <Box className="flex flex-col gap-1">
              <Typography sx={{ fontSize: "12px", fontWeight: 300 }}>
                Company Name
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 300 }}>
                {companyName}
              </Typography>
            </Box>
            <Divider sx={{ width: "100%", mt: 1 }} />
            <Box className="flex flex-col gap-1">
              <Typography sx={{ fontSize: "12px", fontWeight: 300 }}>
                Referral Program
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 300 }}>
                InActive
              </Typography>
            </Box>
            <Divider sx={{ width: "100%", mt: 1 }} />
            <Box className="flex flex-col gap-1">
              <Typography sx={{ fontSize: "12px", fontWeight: 300 }}>
                Active Links
              </Typography>
              {activeLinks.map((link, index) => (
                <Box key={index}>
                  <Link
                    href={
                      link.type === LINK_TYPES.URL
                        ? `${link.link}`
                        : link.type === LINK_TYPES.PHONE
                        ? `tel:${link.link}`
                        : link.type === LINK_TYPES.EMAIL
                        ? `mailto:${link.link}`
                        : `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            link.link
                          )}`
                    }
                    passHref
                    target="_blank"
                  >
                    <Typography
                      sx={{ fontSize: "12px", fontWeight: 400 }}
                      className="text-blue-500"
                    >
                      {link.text}
                    </Typography>
                  </Link>
                </Box>
              ))}
            </Box>
            <Divider sx={{ width: "100%", mt: 1 }} />
            <Box className="flex flex-col gap-1">
              <Typography sx={{ fontSize: "12px", fontWeight: 300 }}>
                Issuer Information
              </Typography>
              <Typography sx={{ fontSize: "13px", fontWeight: 300 }}>
                {issuerInformation.companyName}
              </Typography>
              <Link
                href={`mailto:${issuerInformation.country}${issuerInformation.email}`}
                passHref
                target="_blank"
              >
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 400 }}
                  className="text-blue-500"
                >
                  {issuerInformation.email}
                </Typography>
              </Link>
              <Link
                href={`tel:${issuerInformation.phone}`}
                passHref
                target="_blank"
              >
                <Typography
                  sx={{ fontSize: "12px", fontWeight: 400 }}
                  className="text-blue-500"
                >
                  {issuerInformation.country}
                  {issuerInformation.phone}
                </Typography>
              </Link>
            </Box>
            <Divider sx={{ width: "100%", mt: 1 }} />
            <Box className="flex">
              <Typography sx={{ fontSize: "13px", fontWeight: 300 }}>
                Tap ... for more details
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PointsAppleCardBack;
