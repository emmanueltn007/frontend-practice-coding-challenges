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
                <h4 className="text-xl font-semibold">{addOn.name}</h4>
                <p>{addOn.description}</p>
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
