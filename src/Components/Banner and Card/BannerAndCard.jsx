import { createContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import { useInputState } from "../../utilitis/useInputState";
export const DataJsonContext = createContext(null);

const BannerAndCard = () => {
  const data = useLoaderData();
  const inputText = useInputState("");
  const [searchData, setSearchData] = useState(null);

  // focus useEffect
  useEffect(() => {
    const getInput = document.getElementById("textInputType");
    if (getInput) {
      getInput.focus();
    }
  }, []);

  // handle submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    const textValue = inputText.value.toLowerCase();
    const findSearchData = data.filter((item) =>
      item?.category_name?.toLowerCase()?.includes(textValue)
    );
    if (findSearchData) {
      setSearchData(findSearchData);
    }
  };
  return (
    <section>
      <DataJsonContext.Provider value={data}>
        {/* banner div  */}
        <div>
          <div
            className="hero min-h-[70vh] mt-20 rounded-xl"
            style={{
              // opacity: 0.1,

              backgroundImage:
                "url(https://i.ibb.co/2yRfQFB/Rectangle-4281.png)",
            }}
          >  
            <div className="hero-overlay bg-opacity-90 bg-white "></div>
            
            <div className="hero-content text-center z-50">
              <div className="max-w-md ">
                <form onSubmit={handleSubmit} className=" w-full">
                  <h1 className="text-xl  sm:text-3xl font-extrabold mb-4">I Grow By Helping People In Need</h1>
                  <input
                    type="text"
                    name="text"
                    id="textInputType"
                    {...inputText}
                    placeholder="Search here ...."
                    className="text-black p-3  h-11 rounded-md border border-black"
                  />
                  <input
                    type="submit"
                    value="Search"
                    className="text-white font-bold bg-primary btn hover:bg-primary border-l-0 "
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
            {searchData
              ? searchData.map((dataDetails, index) => (
                  <Cards key={index} dataDetails={dataDetails}></Cards>
                ))
              : data.map((dataDetails, index) => (
                  <Cards key={index} dataDetails={dataDetails}></Cards>
                ))}
          </div>
        </div>
      </DataJsonContext.Provider>
    </section>
  );
};

export default BannerAndCard;
