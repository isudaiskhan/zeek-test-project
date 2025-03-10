import CustomButton from "@/components/Custom/CustomButton/CustomButton";
import CustomDivider from "@/components/Custom/CustomDivider/CustomDivider";
import MenuListItem from "@/components/MenuListItem/MenuListItem";
import SegmentMenuModal from "@/components/Modals/SegmentMenuModal/SegmentMenuModal";
import { useGetMenuSegments } from "@/services/business-profile/menu-segment";
import { Add } from "@mui/icons-material";
import { Typography, Tab, Tabs, Box, Divider } from "@mui/material";
import Grid from "@mui/material/Grid2";
import React, { useState } from "react";

const MenuItem = ({
  menuItemsData,
  handleTabClick,
  hasNextPage,
  fetchNextPage,
  isFetchingNextPage,
}) => {
  const [openSegmentModal, setOpenSegmentModal] = useState(false);
  const [segmentTabValue, setSegmentTabValue] = useState("Burgers");

  const { data } = useGetMenuSegments(1, 100);

  const handleChange = (event, newValue) => {
    setSegmentTabValue(newValue);
  };

  const handleCreateSegment = () => {
    setOpenSegmentModal(true);
  };

  return (
    <>
      <Box className="flex flex-row justify-between items-center">
        <Typography sx={{ fontSize: "24px", fontWeight: 400 }}>Menu</Typography>
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
      </Box>

      <div className="p-4">
        <div className="p-4 mt-4 rounded-xl border-solid border-[1px] border-[#E7E7E7]">
          <Box className="py-4 w-full">
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
            <Divider className="mt-2" />
          </Box>
          <div className="p-4 mt-4">
            <Grid container spacing={4}>
              {menuItemsData
                ?.filter((item) => item?.menuSegment?.title === segmentTabValue)
                .map((item, index) => (
                  <>
                    <Grid size={{ md: 12, lg: 5 }} key={item?._id}>
                      <MenuListItem
                        id={item?._id}
                        image={item?.image}
                        name={item?.name}
                        description={item?.description}
                      />
                    </Grid>

                    {index % 2 === 0 && (
                      <Grid size={{ md: 2 }} key={`divider-${index}`}>
                        <CustomDivider />
                      </Grid>
                    )}
                  </>
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

      {openSegmentModal && (
        <SegmentMenuModal
          open={openSegmentModal}
          onClose={() => setOpenSegmentModal(false)}
        />
      )}
    </>
  );
};

export default MenuItem;
