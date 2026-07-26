function Header () {
    return (
        <header className="flex items-center justify-between px-16 py-8">
            <img 
                src="https://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" 
                width="150" 
                alt="Bonsai logo" 
            />

            <nav className="flex gap-8">
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