import { createContext } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";

export const DataJsonContext = createContext(null);
const BannerAndCard = () => {
  const data = useLoaderData();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section>
      <DataJsonContext.Provider value={data}>
        {/* banner div  */}
        <div>
          <div
            className="hero min-h-[60vh] -mt-7 z-10 "
            style={{
              backgroundImage:
                "url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)",
            }}
          >
            <div className="hero-overlay  bg-opacity-100 bg-white  bg-transparent"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="text"
                    id="textInput"
                    placeholder="Search here ...."
                    className="text-black p-3  h-11 rounded-md"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="text-white font-bold bg-primary btn hover:bg-primary border-l-0"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* card section  */}
        <div>
          {/* map  */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-5 my-20">
            {data.map((dataDetails, index) => (
              <Cards key={index} dataDetails={dataDetails}></Cards>
            ))}
          </div>
        </div>
      </DataJsonContext.Provider>
    </section>
  );
};

export default BannerAndCard;
