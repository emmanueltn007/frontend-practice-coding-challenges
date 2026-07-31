function DesktopNavMenu() {
    const desktopNavItems = ["Product", "Template", "Pricing", "Reviews"];

    return (
        <nav className="flex gap-16 max-lg:hidden text-base">

            <ul className="flex items-center gap-8">
                {desktopNavItems.map((desktopNavItem, index) => {
                    return (
                        <li key={index} className="text-[#4c4d5f] flex items-center gap-2 cursor-pointer">
                            {desktopNavItem}

                            {(desktopNavItem === "Product" || desktopNavItem === "Template") && (
                                <img className="h-4" src="./images/angle-down-solid-full.svg" alt="dropdown icon" />
                            )}
                        </li>
                    );
                })}
            </ul>

            <div className="flex gap-4 text-sm">
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

export default DesktopNavMenu