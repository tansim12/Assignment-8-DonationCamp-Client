import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Card = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [findCardDetails, setFindCardDetails] = useState([]);
  useEffect(() => {
    const findData = data.find((card) => card?.id.includes(id)) || [];
    if (findData) {
      setFindCardDetails(findData);
    }
  }, [data, id]);
  const {
    img,
    category_title,
    category_name,
    color_cardBg,
    color_categoryBg,
    color_text,
    details,
  } = findCardDetails;
  return (
    <div className="my-20">
      <div className="mb-10">
        <img className="w-full" src={img} alt="" />
      </div>
      <p
        className="text-3xl
       sm:text-4xl md:text-5xl font-bold"
      >
        {category_name} {" "}
      </p>
      <p className="text-sm my-4">{details}</p>
    </div>
  );
};

export default Card;
