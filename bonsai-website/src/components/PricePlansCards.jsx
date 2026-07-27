import pricePlansData from "../utilities/pricePlansCards";

function PricePlansCards() {
  return (
    <div className="grid grid-cols-3">
      {pricePlansData.map((pricePlan) => {
        return (
          <div>
            <h3 className="text-2xl">{pricePlan.pricePlan}</h3>

            <p>{pricePlan.idealUser}</p>

            <div className="border-b-2 border-[#00b289]">
              <span>$</span>
              <span className="text-4xl font-bold">24</span>
              <span className="text-2xl">/MONTH</span>
            </div>


            <ul>
                <li>{pricePlan.features}</li>
            </ul>

            <button>START FREE</button>
          </div>
        );
      })}
    </div>
  );
}

export default PricePlansCards;
