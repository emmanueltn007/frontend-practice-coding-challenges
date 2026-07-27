import { useState } from "react";
import PricePlansCards from "./PricePlansCards";

function PricePlans() {
  const [toggleButton, setToggleButton] = useState(false);

  function handleToggleButton() {
    setToggleButton((prev) => !prev);
  }

  return (
    <section className="flex flex-col gap-12">
      <div className="flex items-center justify-center gap-8">
        <h2 className="text-3xl">Plans & Pricing</h2>

        <div className="flex items-center gap-4">
          <span
            className={`font-semibold ${toggleButton === true ? "text-gray-400" : "text-gray-700"}`}
          >
            MONTHLY
          </span>

          <button
            className="bg-[#00b289] px-7 py-4 rounded-3xl relative cursor-pointer"
            onClick={() => handleToggleButton()}
          >
            <span
              className={`bg-white h-6 w-6 absolute left-0 rounded-full -translate-y-1/2 top-1/2 transition-all duration-300 ease-in-out ${toggleButton === false ? "" : "left-full -translate-x-full"}`}
            ></span>
          </button>

          <span
            className={`font-semibold ${toggleButton === false ? "text-gray-400" : "text-gray-700"}`}
          >
            YEARLY
          </span>
        </div>
      </div>

      <PricePlansCards toggleButton={toggleButton} />
    </section>
  );
}

export default PricePlans;
