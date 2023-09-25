import { useNavigate } from "react-router-dom";

const Cards = ({ dataDetails }) => {
  const navigate = useNavigate();

  const {
    id,
    img,
    category_title,
    category_name,
    color_cardBg,
    color_categoryBg,
    color_text,
  } = dataDetails;
  const handleCard = (id) =>
    navigate(`/card/${id}`, { state: { category_name } });
  return (
    <section
      style={{ backgroundColor: `${color_cardBg}` }}
      className=" rounded-lg"
    >
      <div>
        <div onClick={() => handleCard(id)}>
          {/* img div  */}
          <div>
            <img src={img} alt={category_name} />
          </div>
          <div className="mt-5 ml-3 mb-5">
            <h3
              style={{
                backgroundColor: `${color_categoryBg}`,
                color: `${color_text}`,
              }}
              className=" border p-2 rounded-lg mb-3 w-max font-medium text-sm"
            >
              {category_name}
            </h3>
            <h3
              style={{ color: `${color_text}` }}
              className=" text-xl font-semibold "
            >
              {category_title}
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
