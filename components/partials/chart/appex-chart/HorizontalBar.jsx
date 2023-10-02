import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import useDarkMode from "@/hooks/useDarkMode";

const ColumnChart = () => {
  const [isDark] = useDarkMode();
  const series = [
    {
      name: "Custodial",
      data: [13, 8, 8],
    },
    {
      name: "Electrical",
      data: [12, 4, 8],
    },
    {
      name: "General Maintenance",
      data: [4, 6, 10],
    },
    {
      name: "Grounds",
      data: [4, 6, 6],
    },
    {
      name: "Food Services",
      data: [6, 8, 12],
    },
    {
      name: "HVAC",
      data: [2, 8, 12],
    },
  ];
  const options = {
    chart: {
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        endingShape: "rounded",
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 10,
      colors: ["transparent"],
    },
    legend: {
      labels: {
        colors: isDark ? "#CBD5E1" : "#475569",
      },
    },

    xaxis: {
      categories: [
        "Elementary",
        "Middle School",
        "High School",
      ],
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      title: {
        text: "Tickets",
      },
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#475569",
          fontFamily: "Inter",
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return "$ " + val + " thousands";
        },
      },
    },

    grid: {
      show: true,
      borderColor: isDark ? "#334155" : "#e2e8f0",
      position: "back",
    },
    colors: ["#4669FA", "#0CE7FA", "#FA916B"],
  };
  return (
    <div>
      <Chart options={options} series={series} type="bar" height="350" />
    </div>
  );
};

export default ColumnChart;
