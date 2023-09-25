import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer  , Tooltip} from "recharts";
import { useLoaderData } from "react-router-dom";
import { getStoredCard } from "../utilitis/localStorage";

const PieStatistics = () => {
  const totalData = useLoaderData();
  const [localStorageData, setLocalStorageData] = React.useState("");
  React.useEffect(() => {
    const getData = getStoredCard();
    if (getData) {
      setLocalStorageData(getData);
    }
  }, []);

  const localStorageDataLength = localStorageData.length;
  const totalDonationDataLength = totalData.length - localStorageDataLength;

  const chartData = [
    { name: "Your Donation", value: localStorageDataLength },
    { name: "Total Donation", value: totalDonationDataLength },
  ];

  const colors = ["#00C49F", "#FF444A"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
    const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="w-full">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Pie>
          <Tooltip></Tooltip>
        </PieChart>
      </ResponsiveContainer>

      {/* color section  */}
      <div className=" flex justify-center items-center gap-5 sm:gap-20">
        {/* Total Donation  */}
        <div className="flex items-center gap-2 sm:gap-5">
          <span className="font-semibold text-xs sm:textarea-md md:text-base ">
            {" "}
            Total Donation
          </span>{" "}
          <span className="h-3 rounded-md w-[30px] sm:w-[50px] bg-[#FF444A]"></span>
        </div>

        {/* your donation  */}
        <div className="flex items-center gap-2 sm:gap-5">
          <span className="font-semibold text-xs sm:textarea-md md:text-base ">
            Your Donation
          </span>{" "}
          <span className="h-3 rounded-md w-[30px] sm:w-[50px] bg-[#00C49F]"></span>
        </div>
      </div>
    </div>
  );
};

export default PieStatistics;
