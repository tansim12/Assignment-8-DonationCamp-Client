import { useNavigate } from "react-router-dom";
const DonationCard = ({ card }) => {
  const navigate = useNavigate();
  const handleCard = (id) => navigate(`/card/${id}`);
  const {
    id,
    img,
    category_title,
    category_name,
    color_cardBg,
    color_categoryBg,
    color_text,
    price,
  } = card;
  return (
    <section
      style={{ backgroundColor: `${color_cardBg}` }}
      className=" rounded-lg"
    >
      <div className="flex">
        <div className="flex">
          <img src={img} alt={category_name} />
        </div>
        <div className="mt-5 ml-3 mb-5">
          <h3
            style={{
              backgroundColor: `${color_categoryBg}`,
              color: `${color_text}`,
            }}
            className=" border p-2 rounded-lg mb-3 w-max font-medium text-xs lg:text-sm"
          >
            {category_name}
          </h3>
          <h3 className="  text-base lg:text-xl font-semibold text-black ">
            {category_title}
          </h3>
          <h3
            style={{ color: `${color_text}` }}
            className=" text-xl font-bold "
          >
            ${price}
          </h3>
          <div>
            <button
              onClick={() => handleCard(id)}
              style={{ backgroundColor: `${color_text}` }}
              className="font-bold lg:text-base text-xs text-white btn btn-sm mt-7 md:btn-md "
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonationCard;
