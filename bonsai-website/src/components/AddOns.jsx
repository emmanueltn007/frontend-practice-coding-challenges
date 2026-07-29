import addOnsData from "../utilities/addOns";

function AddOns({ toggleButton }) {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-3xl  text-center">Super charge your work with add-ons</h2>

      <div className="flex flex-col gap-4">
        {addOnsData.map((addOn, index) => {
          return (
            <div key={index} className="bg-white flex items-center justify-between py-8 pl-8 pr-16 rounded-lg">
              <div className="flex flex-col">
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold">{toggleButton === false ? addOn.name.monthlyName : addOn.name.yearlyName}</h4>
                  <p className="text-sm">{toggleButton === false ? addOn.description.monthlyDescr : addOn.description.yearlyDescr}</p>
                </div>
                {(index === 0 && toggleButton === true || index === 2 && toggleButton === false) && (
                    <a className="group text-[#00b289] text-sm flex items-center font-semibold" href="#">
                      LEARN MORE
                      <svg className="h-4 rotate-270 group-hover:translate-x-2 transition-all duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path fill="currentColor" d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" /></svg>
                    </a>
                )}
              </div>


              <div className="flex flex-col text-center">
                <span className="text-4xl font-bold">
                  {toggleButton === false ? addOn.prices.monthly : addOn.prices.yearly}
                </span>
                <span className="text-base">
                  {toggleButton === false ? addOn.duration.monthlyDur : addOn.duration.yearlyDur}
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
