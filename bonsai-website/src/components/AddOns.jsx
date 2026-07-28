import addOnsData from "../utilities/addOns";

function AddOns({ toggleButton }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl  text-center">Super charge your work with add-ons</h2>

      <div className="flex flex-col gap-4">
        {addOnsData.map((addOn, index) => {
          return (
            <div key={index} className="bg-white flex justify-between py-8 pl-8 pr-16 rounded-lg">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold">{toggleButton === false ? addOn.name.monthlyName : addOn.name.yearlyName}</h4>
                  <p>{toggleButton === false ? addOn.description.monthlyDescr : addOn.description.yearlyDescr}</p>
                </div>
                {(index === 0 && toggleButton === true || index === 2 && toggleButton === false) && (
                    <a className="flex items-center" href="#">
                      LEARN MORE
                      <img className="h-6 rotate-270" src="./images/angle-down-solid-full.svg" alt="learn more arrow icon" />
                    </a>
                )}
              </div>


              <div>
                <span className="text-4xl">
                  {toggleButton === false ? addOn.prices.monthly : addOn.prices.yearly}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddOns;
