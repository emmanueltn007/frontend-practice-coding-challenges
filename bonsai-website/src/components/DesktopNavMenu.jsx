function DesktopNavMenu() {
    return (
        <nav className="flex gap-8 max-lg:hidden">
            <ul className="flex items-center gap-4">
                <li className="flex items-center cursor-pointer">
                    Product
                    <img className="h-6" src="./images/angle-down-solid-full.svg" alt="dropdown icon" />
                </li>
                <li className="flex items-center cursor-pointer">
                    Template
                    <img className="h-6" src="./images/angle-down-solid-full.svg" alt="dropdown icon" />
                </li>
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Reviews</li>
            </ul>

            <div className="flex gap-4">
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