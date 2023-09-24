import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { setItemCart } from "../../utilitis/localStorage";
import swal from "sweetalert";

const Card = () => {
  const { paramsId } = useParams();
  const data = useLoaderData();
  const [findCardDetails, setFindCardDetails] = useState([]);
  useEffect(() => {
    const findData = data.find((card) => card?.id?.includes(paramsId)) || [];
    if (findData) {
      setFindCardDetails(findData);
    }
  }, [data, paramsId]);
  const { img, category_name, color_text, price, details, id } =
    findCardDetails;
  // handleDonation handle
  const handleDonation = (id) => {
    setItemCart(findCardDetails, id);
    swal("Good job!", "Thank You For Your Donation", "success");
  };
  return (
    <div className="my-20">
      <div className="mb-10">
        {/* img and overlay div  */}
        <div>
          <img className="w-full" src={img} alt={category_name} />
          <div className="h-16 z-40 opacity-40  -mt-16 w-full bg-black"></div>
        </div>

        <button
          onClick={() => handleDonation(id)}
          style={{ backgroundColor: `${color_text}` }}
          className="btn btn-sm sm:btn-md text-white font-bold bg-transparent absolute -mt-14 ml-2 sm:ml-8 "
        >
          Donate ${price}
        </button>

        {/* button  div */}
        {/* <div className="pl-2 sm:pl-4 -mt-14 z-10">
          <button
            style={{ backgroundColor: `${color_text}` }}
            className="btn btn-sm sm:btn-md text-white font-bold bg-transparent "
          >
            Donate ${price}
          </button>
        </div> */}
      </div>
      <p
        className="text-3xl
       sm:text-4xl md:text-5xl font-bold"
      >
        {category_name}{" "}
      </p>
      <p className="text-sm my-4">{details}</p>
    </div>
  );
};

export default Card;
