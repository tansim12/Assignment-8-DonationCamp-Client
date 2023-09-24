import { useEffect, useState } from "react";
import { getStoredCard } from "../utilitis/localStorage";
import { useLoaderData } from "react-router-dom";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Statistics = () => {
  const totalData = useLoaderData();
  const [localStorageData, setLocalStorageData] = useState("");
  useEffect(() => {
    const getData = getStoredCard();
    if (getData) {
      setLocalStorageData(getData);
    }
  }, []);
  const localStorageDataLength =
    (100 / totalData.length) * localStorageData.length.toFixed(2);
  const totalDonationDataLength = 100 - localStorageDataLength.toFixed(2);
//   console.log(localStorageDataLength, totalDonationDataLength);

  const data = [
    {
      name: "Donation Chart",
      totalDonation: totalDonationDataLength,
      yoursDonation: localStorageDataLength.toFixed(2),
    },
  ];

  return (
    <div className=" my-20 min-h-[80vh] flex items-center justify-center">
      <BarChart width={310} height={310} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalDonation" fill="#FF444A" />
        <Bar dataKey="yoursDonation" fill="#00C49F" />
      </BarChart>
    </div>
  );
};

export default Statistics;
