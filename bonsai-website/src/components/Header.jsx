import { useState } from "react";

function Header () {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMobileMenuToggle () {
        setIsMenuOpen(prev => !prev);
    }

    return (
        <header className="bg-white flex items-center justify-between px-16 py-8 sticky top-0 z-50">
            <img 
                src="https://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" 
                width="150" 
                alt="Bonsai logo" 
            />

            <nav className="lg:hidden">
                <button className="flex flex-col gap-2 cursor-pointer" onClick={() => handleMobileMenuToggle()}>
                    <div className={`w-12 h-1 bg-[#4c4d5f] rounded-md transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-0" : "translate-y-3 rotate-45"}`}></div>
                    <div className={`w-12 h-1 bg-[#4c4d5f] rounded-md transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-100" : "opacity-0"}`}></div>
                    <div className={`w-12 h-1 bg-[#4c4d5f] rounded-md transition-all duration-300 ease-in-out ${isMenuOpen ? "rotate-0" : "-translate-y-3 -rotate-45 "}`}></div>
                </button>

                <div>
                    
                </div>
            </nav>

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
        </header>
    );
}

export default Header