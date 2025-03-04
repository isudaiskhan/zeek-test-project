import { IconButton, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";

import { RiArrowGoBackFill } from "react-icons/ri";
import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import { Add } from "@mui/icons-material";
import Image from "next/image";
import Grid from "@mui/material/Grid2";
import { fileBaseURL } from "@/utils/urls";
import { useRouter } from "next/navigation";
import SegmentMenuModal from "@/components/Modals/SegmentMenuModal/SegmentMenuModal";
import { useGetMenuSegments } from "@/services/business-profile/menu-segment";
import CustomDivider from "@/components/Custom/CustomDivider/CustomDivider";

const MenuEdit = ({
  menuItemsData,
  handleTabClick,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}) => {
  const [openSegmentModal, setOpenSegmentModal] = useState(false);
  const [segmentTabValue, setSegmentTabValue] = useState("Burgers");
  // router
  const router = useRouter();
  const { data } = useGetMenuSegments(1, 100);

  const handleEditMenu = (id) => {
    router.push(`/dashboard/business-profile/menu/${id}`);
  };

  const handleCreateSegment = () => {
    setOpenSegmentModal(true);
  };

  const handleChange = (event, newValue) => {
    setSegmentTabValue(newValue);
  };

  return (
    <div className="flex flex-col gap-4 px-4">
      <div className="flex flex-row justify-between items-center py-2">
        <div>
          <IconButton onClick={() => handleTabClick("menuItem")}>
            <RiArrowGoBackFill style={{ size: "30px", color: "#000000" }} />
          </IconButton>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <CustomButton
            text="Create new segment"
            textColor="#6D6D6D"
            bgColor="#EEEEEE"
            onClick={handleCreateSegment}
          />
          <CustomButton
            icon={<Add fontSize="large" sx={{ color: "#FF762A" }} />}
            bgColor="#FFECE1"
            onClick={() => handleTabClick("addMenuItem")}
          />
        </div>
      </div>
      <div className="flex justify-start items-start">
        <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>
          Edit Menu
        </Typography>
      </div>
      <Tabs
        value={segmentTabValue}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {data?.data?.map((item) => (
          <Tab value={item?.title} label={item?.title} key={item?._id} />
        ))}
      </Tabs>
      <div className="p-4 justify-center items-center mt-6">
        <Grid container spacing={4}>
          {menuItemsData
            ?.filter((item) => item?.menuSegment?.title === segmentTabValue)
            .map((item, index) => (
              <React.Fragment key={item?._id}>
                <Grid
                  size={{ md: 12, lg: 5 }}
                  className="hover:scale-105 hover:cursor-pointer"
                >
                  <div
                    className="flex flex-row gap-4"
                    onClick={() => handleEditMenu(item?._id)}
                  >
                    <div className="w-[100px] h-[100px] rounded-xl">
                      <Image
                        src={`${fileBaseURL}${item?.image}`}
                        width={100}
                        height={100}
                        alt={item?.name}
                        className="!w-[100px] !h-[100px] !rounded-xl object-cover"
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
                  <Grid size={{ md: 2 }}>
                    <CustomDivider />
                  </Grid>
                )}
              </React.Fragment>
            ))}
        </Grid>
      </div>
      <div className="flex items-center justify-center pt-5">
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

      {openSegmentModal && (
        <SegmentMenuModal
          open={openSegmentModal}
          onClose={() => setOpenSegmentModal(false)}
        />
      )}
    </div>
  );
};

export default MenuEdit;
