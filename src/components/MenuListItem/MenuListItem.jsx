import { fileBaseURL } from "@/utils/urls";
import { Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { TbEdit } from "react-icons/tb";

const MenuListItem = ({ image, name, id, description }) => {
  const router = useRouter();
  const handleEditMenu = (id) => {
    router.push(`/dashboard/business-profile/menu/${id}`);
  };
  return (
    <div className="flex flex-row gap-4">
      <div className="w-[100px] h-[100px] rounded-xl">
        <Image
          src={`${fileBaseURL}${image}`}
          width={100}
          height={100}
          alt={name}
          className="!w-[100px] !h-[100px] !rounded-xl object-cover"
        />
      </div>
      <div className="flex flex-col gap-5 w-full">
        <div className="flex flex-row justify-between items-center">
          <Typography sx={{ fontSize: "14px", fontWeight: 400 }}>
            {name}
          </Typography>
          <div
            className="flex flex-row justify-center items-center gap-2 p-2 border-solid rounded-3xl border-[1px] border-[#E7E7E7] cursor-pointer"
            onClick={() => handleEditMenu(id)}
          >
            <Typography
              sx={{
                fontSize: "12px",
                fontWeight: 400,
                color: "#888888",
              }}
            >
              Edit
            </Typography>
            <TbEdit style={{ fontSize: "16px", color: "#888888" }} />
          </div>
        </div>
        <Typography
          sx={{
            fontSize: "14px",
            fontWeight: 400,
            color: "#A7A7A7",
          }}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default MenuListItem;
