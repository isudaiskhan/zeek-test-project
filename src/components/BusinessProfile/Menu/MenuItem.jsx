import { TbEdit } from "react-icons/tb";
import { Divider, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import Grid from "@mui/material/Grid2";

const MenuItem = ({ menuItemsData, handleTabClick }) => {
  return (
    <>
      <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>Menu</Typography>

      <div className="p-4">
        <div className="p-4 mt-4 rounded-xl border-solid border-[1px] border-[#E7E7E7]">
          <div className="flex flex-row gap-3 justify-between items-center py-4">
            <div className="flex flex-col gap-2">
              <Typography sx={{ fontSize: "15px", fontWeight: 400 }}>
                Menu Items
              </Typography>
              <Typography
                sx={{ fontSize: "14px", fontWeight: 400, color: "#A7A7A7" }}
              >
                Add all menu items
              </Typography>
            </div>
            <div
              className="flex flex-row justify-center items-center gap-2 p-2 border-solid rounded-3xl border-[1px] border-[#E7E7E7] cursor-pointer"
              onClick={() => handleTabClick("menuEdit")}
            >
              <Typography
                sx={{ fontSize: "12px", fontWeight: 400, color: "#888888" }}
              >
                Edit
              </Typography>
              <TbEdit style={{ fontSize: "16px", color: "#888888" }} />
            </div>
          </div>
          <div className="p-4 mt-4">
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
      </div>
    </>
  );
};

export default MenuItem;
