import { useEffect, useState } from "react";
import { getStoredCard } from "../utilitis/localStorage";
import DonationCard from "./DonationCard.jsx/DonationCard";

const Donation = () => {
  const [localStorageCard, setLocalStorageCard] = useState("");
  const [isShowAllCard, setIsShowAllCard] = useState(true);
  const deleteAll = () => {
    localStorage.clear();
    setLocalStorageCard([]);
  };

  useEffect(() => {
    const getCardLocalStorage = getStoredCard();
    if (getCardLocalStorage) {
      setLocalStorageCard(getCardLocalStorage);
    }
  }, []);
  const dataDetails = localStorageCard || [];

  return (
    <section className="my-20 ">
      {/* delete all button  */}
      <div className="text-center my-5 ">
        {localStorageCard.length > 0 ? (
          <button
            onClick={deleteAll}
            className="btn btn-warning text-black font-bold btn-md"
          >
            Delete All{" "}
          </button>
        ) : null}
      </div>

      <div className="grid  gap-5 grid-cols-1  md:grid-cols-2">
        {isShowAllCard
          ? dataDetails
              .slice(0, 4)
              .map((card, index) => (
                <DonationCard card={card} key={index}></DonationCard>
              ))
          : dataDetails.map((card, index) => (
              <DonationCard card={card} key={index}></DonationCard>
            ))}
      </div>
      {/* seaAll button  */}
      <div className="text-center my-16 ">
        {dataDetails.length >= 4 && (
          <button
            onClick={() => setIsShowAllCard(!isShowAllCard)}
            className={`btn btn-md text-white btn-secondary ${
              isShowAllCard ? "visible" : "hidden"
            }`}
          >
            See All
          </button>
        )}
      </div>
    </section>
  );
};

export default Donation;
