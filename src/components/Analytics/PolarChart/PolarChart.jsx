import React from "react";
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const PolarChart = ({ salesData }) => {
  const series = salesData.map((branch) => branch.data);
  const labels = salesData.map((branch) => branch.name);

  const options = {
    chart: {
      width: 380,
      type: "polarArea",
    },
    labels: labels,
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
      position: "bottom",
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
        enabled: true,
        shadeTo: "light",
        shadeIntensity: 0.6,
      },
    },
  };
  return (
    <div id="polarChart">
      <ReactApexChart
        options={options}
        series={series}
        type="polarArea"
        width={435}
      />
    </div>
  );
};

export default PolarChart;
