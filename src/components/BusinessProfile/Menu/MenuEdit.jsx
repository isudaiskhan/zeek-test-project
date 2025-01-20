import { Divider, IconButton, Typography } from "@mui/material";
import React from "react";

import { RiArrowGoBackFill } from "react-icons/ri";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Add } from "@mui/icons-material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

const MenuEdit = ({ menuItemsData, handleTabClick }) => {
  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-row justify-between items-center py-2">
        <IconButton onClick={() => handleTabClick("menuItem")}>
          <RiArrowGoBackFill style={{ size: "30px", color: "#000000" }} />
        </IconButton>
        <CustomButton
          icon={<Add fontSize="large" sx={{ color: "#FF762A" }} />}
          bgColor="#FFECE1"
          onClick={() => handleTabClick("addMenuItem")}
        />
      </div>
      <div className="flex justify-start items-start">
        <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
          Edit Menu
        </Typography>
      </div>
      <div className="flex justify-start items-start mt-6">
        <Grid container spacing={4}>
          {menuItemsData.map((item, index) => (
            <>
              <Grid item size={{ md: 12, lg: 5 }} key={index}>
                <div className="flex flex-row gap-4">
                  <div className="w-[100px] h-[100px] rounded-xl">
                    <Image
                      src={item?.image}
                      width={100}
                      height={100}
                      alt={item?.title}
                      className="!w-[100px] !h-[100px] !rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                      {item?.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        fontWeight: 400,
                        color: "#A7A7A7",
                      }}
                    >
                      {item?.description}
                    </Typography>
                  </div>
                </div>
              </Grid>

              {index % 2 === 0 && (
                <Divider orientation="vertical" flexItem sx={{ mx: 4 }} />
              )}
            </>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default MenuEdit;
