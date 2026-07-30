function TogglingSection({ toggleButton, handleToggleButton }) {
  return (
    <div className="flex items-center justify-center gap-8 pt-32">
      <h2 className="text-3xl text-[#4c4d5f] font-['Amerigo BT Roman',sans-serif]">Plans & Pricing</h2>

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
            className={`bg-white h-6 w-6 absolute left-0 rounded-full -translate-y-1/2 top-1/2 transition-all duration-300 ease-in-out z-5 ${toggleButton === false ? "" : "left-full -translate-x-full"}`}
          ></span>
        </button>

        <span
          className={`font-semibold ${toggleButton === false ? "text-gray-400" : "text-gray-700"}`}
        >
          YEARLY
        </span>
      </div>
    </div>
  );
}

export default TogglingSection