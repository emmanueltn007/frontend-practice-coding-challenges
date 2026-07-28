import { useState } from "react";
import PricePlansCards from "./PricePlansCards";
import AddOns from "./AddOns";
import TogglingSection from "./TogglingSection";
import CTA from "./CTA";

function PricePlans() {
  const [toggleButton, setToggleButton] = useState(false);

  function handleToggleButton() {
    setToggleButton((prev) => !prev);
  }

  return (
    <section className="flex flex-col gap-12">
      <TogglingSection toggleButton={toggleButton} handleToggleButton={handleToggleButton} />

      <PricePlansCards toggleButton={toggleButton} />

      <AddOns toggleButton={toggleButton} />

      <CTA />
    </section>
  );
}

export default PricePlans;
