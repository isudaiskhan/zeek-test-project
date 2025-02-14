import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { fileBaseURL } from "@/utils/urls";
import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Image from "next/image";
import React from "react";
import { TbEdit } from "react-icons/tb";

const MenuItem = ({
  menuItemsData,
  handleTabClick,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}) => {
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
              {menuItemsData?.map((item, index) => (
                <React.Fragment key={item?._id}>
                  <Grid size={{ md: 12, lg: 5 }}>
                    <div className="flex flex-row gap-4">
                      <div className="w-[100px] h-[100px] rounded-xl">
                        <Image
                          src={`${fileBaseURL}${item?.image}`}
                          width={100}
                          height={100}
                          alt={item?.name}
                          className="!w-[100px] !h-[100px] !rounded-xl"
                        />
                      </div>
                      <div className="flex flex-col gap-5">
                        <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
                          {item?.name}
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
                </React.Fragment>
              ))}
            </Grid>
          </div>
          <div className="flex items-center justify-center py-2">
            {hasNextPage && (
              <CustomButton
                loading={isFetchingNextPage}
                text="Load More"
                bgColor="#FFECE1"
                textColor="#FF5B00"
                onClick={fetchNextPage}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
