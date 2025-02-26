import { Box, Card, CardContent, Typography } from "@mui/material";
import { BiWorld } from "react-icons/bi";
import React from "react";
import Link from "next/link";
import { LINK_TYPES } from "@/enums/loyalty-card-actions";

const PointsAndroidCardBack = ({
  centerBackgroundColor,
  centralImagePreview,
  activeLinks,
}) => {
  return (
    <Card className="flex gap-2 !rounded-md h-[465px] overflow-y-auto">
      <CardContent
        className="h-full overflow-y-auto"
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
        <Box
          className="flex flex-col gap-4 w-full"
          sx={{
            "&::-webkit-scrollbar": {
              width: "8px",
              height: "8px",
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: "#FFDAC5", // Thumb color
              borderRadius: "8px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#555", // Thumb hover color
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: "#f4f4f4", // Track color
            },
          }}
        >
          <Box className="flex flex-col justify-start items-start gap-4">
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Details
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Member ID <br />{" "}
              <span className="text-[10px] ">630120-813-610</span>
            </Typography>
          </Box>
          <Box
            className="flex justify-center items-center"
            sx={{
              height: "100px",
              width: "100%",
              backgroundColor: centerBackgroundColor,
              backgroundImage: `${
                centralImagePreview ? `url(${centralImagePreview})` : ""
              }`,
              objectFit: "cover",
              backgroundSize: "cover",
            }}
          >
            {!centralImagePreview && (
              <Typography sx={{ fontWeight: 400, fontSize: "12px" }}>
                Background Image
              </Typography>
            )}
          </Box>
          <Box className="flex flex-col justify-start items-start gap-4">
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              Last Name <br /> <span className="text-[10px] ">Dico</span>
            </Typography>
            <Typography sx={{ fontSize: "12px", fontWeight: 400 }}>
              First Name <br /> <span className="text-[10px] ">Huzefa</span>
            </Typography>
            {activeLinks.map((link, index) => (
              <Box
                key={index}
                className="flex flex-row gap-2 justify-center items-center"
              >
                <BiWorld />
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
                  <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                    {link.text}
                  </Typography>
                </Link>
              </Box>
            ))}
          </Box>
          <Box className="flex justify-center items-center">
            <Typography sx={{ fontSize: "11px", fontWeight: 400 }}>
              The pass provider or the merchant is responsible for the info on
              this pass and may send you notification. Contact them with any
              question.
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default PointsAndroidCardBack;
