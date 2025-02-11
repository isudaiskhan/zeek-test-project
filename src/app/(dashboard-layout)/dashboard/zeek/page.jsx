import MonthlyReport from "@/components/ZeekAi/MonthlyReport";
import PromotionRecommendations from "@/components/ZeekAi/PromotionRecommendations";
import ZeekAIAnalysis from "@/components/ZeekAi/ZeekAIAnalysis";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

const Zeek = () => {
  return (
    <div className="min-h-screen p-4">
      {/* Header Section */}
      <div className="flex flex-wrap items-center justify-between p-2 w-full">
        <div>
          <Typography className="text-[#000000] !text-[40px] !font-bold">
            Hello Sato,
          </Typography>
          <Typography className="!text-[40px] !font-bold !bg-gradient-to-r from-[#FFC700] to-[#FF9052] bg-clip-text text-transparent">
            Let&apos;s take a look at your business!
          </Typography>
        </div>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <Button
            variant="contained"
            className="!bg-gradient-to-r from-[#FFDAC5] to-[#FF803A] !text-[16px] !font-bold !rounded-xl !py-2 !px-8"
          >
            <div className="flex items-center gap-2">
              <Image
                src="/images/zeek-ai.svg"
                alt="AI Icon"
                width={20}
                height={20}
              />
              Ask AI
            </div>
          </Button>
          <Button
            variant="outlined"
            className="!border !border-[#FFDAC5] !text-[#8F8F8F] !text-[13px] !bg-white !rounded-xl !py-2"
          >
            Get AI Analysis Updates
          </Button>
          <Button
            variant="outlined"
            className="!border !border-[#FFDAC5] !text-[#8F8F8F] !text-[13px] !bg-white !rounded-xl !py-2"
          >
            Create promotions
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          <PromotionRecommendations />
          <ZeekAIAnalysis />
        </div>

        {/* Right Column */}
        <div className="lg:col-span-1">
          <MonthlyReport />
        </div>
      </div>
    </div>
  );
};

export default Zeek;
