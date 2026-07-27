import pricePlansData from "../utilities/pricePlansCards";

function PricePlansCards({ toggleButton }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      {pricePlansData.map((pricePlan, index) => {
        return (
          <div
            key={index}
            className="bg-white border flex flex-col justify-between gap-12 border-[#4c4d5f] rounded-md px-8 py-16"
          >
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl">{pricePlan.pricePlan}</h3>

              <p>{pricePlan.idealUser}</p>

              <div className="border-b-2 border-[#00b289]">
                <span>$</span>
                <span className="text-4xl font-bold">
                  {toggleButton === false
                    ? pricePlan.prices.monthly
                    : pricePlan.prices.yearly}
                </span>
                <span className="text-2xl">/MONTH</span>
              </div>

              <ul className="flex flex-col gap-2">
                {pricePlan.features.map((feature, index) => {
                  return (
                    <li key={index} className="flex items-center gap-4">
                      <img
                        className="h-4"
                        src="./images/check-solid-full.svg"
                        alt="check icon"
                      />
                      {feature}
                    </li>
                  );
                })}
              </ul>
            </div>

            <button className="text-white bg-[#00b289] font-bold w-full py-3 rounded-md cursor-pointer hover:brightness-90 transition-all duration-150 ease-in-out">
              START FREE
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PricePlansCards;
