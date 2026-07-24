function Header () {
    return (
        <header className="flex items-center justify-between px-16 py-8">
            <img 
                src="https://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg" 
                width="150" 
                alt="Bonsai logo" 
            />

            <nav className="flex gap-8">
                <ul className="flex gap-4">
                    <li className="flex items-center">
                        Product
                        <img className="h-6" src="./images/angle-down-solid-full.svg" alt="dropdown icon" />
                    </li>
                    <li className="flex items-center">
                        Template
                        <img className="h-6" src="./images/angle-down-solid-full.svg" alt="dropdown icon" />
                    </li>
                    <li>Pricing</li>
                    <li>Reviews</li>
                </ul>

                <div className="flex gap-4">
                    <button>
                        LOG IN
                    </button>
                    <button>
                        START FREE
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header