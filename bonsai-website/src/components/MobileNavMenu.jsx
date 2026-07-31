function MobileNavMenu ({ isMenuOpen, handleMobileMenuToggle }) {
    const mobileNavItems = ["Product", "Template", "Pricing", "Reviews"];

    return (
        <nav className={`lg:hidden ${isMenuOpen ? "" : ""} `}>
                <button className="flex flex-col gap-2 cursor-pointer absolute right-16 top-1/2 -translate-y-1/2 z-40" onClick={() => handleMobileMenuToggle()}>
                    <div className={`w-12 h-1 bg-[#4c4d5f] rounded-md transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-0" : "translate-y-3 rotate-45"}`}></div>
                    <div className={`w-12 h-1 bg-[#4c4d5f] rounded-md transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100" : "opacity-0"}`}></div>
                    <div className={`w-12 h-1 bg-[#4c4d5f] rounded-md transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-0" : "-translate-y-3 -rotate-45 "}`}></div>
                </button>

                <div className={`px-16 bg-white w-full h-screen absolute z-40 top-0 translate-y-24 transition-transform duration-150 ease-in-out ${isMenuOpen ? "translate-x-full" : "translate-x-0 left-0"}`}>

                    <ul>
                        {mobileNavItems.map((mobileNavItem, index) => {
                            return (
                                <ul key={index} className="flex items-center gap-2">
                                    {mobileNavItem}

                                    {(mobileNavItem === "Product" || mobileNavItem === "Template") && (
                                        <img className="h-6" src="./images/angle-down-solid-full.svg" alt="dropdown icon" />
                                    )} 
                                </ul>
                            );
                        })}
                    </ul>

                    <button className="text-[#00b289] font-bold border border-[#00b289] px-6 py-2 rounded-md cursor-pointer hover:text-white hover:bg-[#00b289] transition-all duration-150 ease-in-out">
                        LOG IN
                    </button>
                    <button className="bg-[#00b289] text-white font-bold px-6 py-2 rounded-md cursor-pointer hover:brightness-90 transition duration-150 ease-in-out">
                        START FREE
                    </button>
                </div>
            </nav>
    );
}

export default MobileNavMenu