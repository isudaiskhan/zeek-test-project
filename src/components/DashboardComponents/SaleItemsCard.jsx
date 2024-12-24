import { useState } from "react";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ReactApexChart from "react-apexcharts";

const SaleItemsCard = () => {
  const [polarChart, setPolarChart] = useState({
    series: [70, 95, 80],
    options: {
      chart: {
        width: 380,
        type: "polarArea",
      },
      labels: ["Green Tea", "Iced Latte", "Blueberry Muffin"],
      fill: {
        opacity: 1,
      },
      stroke: {
        width: 1,
        colors: undefined,
      },
      yaxis: {
        show: false,
      },
      legend: {
        show: false,
      },
      plotOptions: {
        polarArea: {
          rings: {
            strokeWidth: 0,
          },
          spokes: {
            strokeWidth: 0,
          },
        },
      },
      theme: {
        monochrome: {
          enabled: false,
          shadeTo: "light",
          shadeIntensity: 0.6,
        },
      },
      colors: ["#FFF4C6", "#FFDAC5", "#FFC3BE"],
      dataLabels: {
        enabled: true,
        style: {
          fontSize: "14px",
          fontWeight: "bold",
          colors: ["#000"],
          textAnchor: "middle",
        },
        formatter: function (val, opts) {
          const label = opts.w.globals.labels[opts.seriesIndex];
          const value = opts.w.globals.series[opts.seriesIndex];
          return `${label}\n${value}`;
        },
      },
    },
  });
  return (
    <div className="rounded-2xl shadow-lg mt-5 bg-white p-6 flex flex-col justify-start">
      <div className="flex items-start justify-between w-full">
        <div className="flex-shrink-0 bg-[#F8F8F8] rounded-full px-4 py-2.5">
          <Image
            src="/images/sale-item.svg"
            alt="Icon"
            className="!w-10 !mt-1"
            layout="responsive"
            width={50}
            height={50}
          />
        </div>

        <Typography
          variant="subtitle2"
          className="text-black !font-sans !text-lg !mt-3 !ps-4 !font-semibold flex-grow"
        >
          Top Sale Items
        </Typography>

        <div>
          <Button
            variant="outlined"
            size="small"
            className="!mt-3 !text-xs !text-[#5F5F5F] !font-thin !px-4 !font-maven !rounded-full !border-[#C1C1C1]"
          >
            See Details
          </Button>
        </div>
      </div>

      <div className="flex justify-center">
        <ReactApexChart
          options={polarChart.options}
          series={polarChart.series}
          type="polarArea"
          width={300}
        />
      </div>
    </div>
  );
};

export default SaleItemsCard;
