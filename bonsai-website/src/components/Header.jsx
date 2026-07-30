import { useState } from "react";
import MobileNavMenu from "./MobileNavMenu";
import DesktopNavMenu from "./DesktopNavMenu";

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    function handleMobileMenuToggle() {
        setIsMenuOpen(prev => !prev);
    }

    return (
        <header className={`bg-white flex items-center justify-between px-16 py-8 sticky top-0 z-10`}>
            <img
                src="https://web.archive.org/web/20221117021714im_/https://assets-global.website-files.com/58868bcd2ef4daaf0f072900/5e5fd7c602ca7cd432feb68e_bonsai-logo.svg"
                width="150"
                alt="Bonsai logo"
            />

            {/* MOBILE MENU NAV BAR */}

            <MobileNavMenu isMenuOpen={isMenuOpen} handleMobileMenuToggle={handleMobileMenuToggle} />


            {/* DESKTOP NAV BAR */}

            <DesktopNavMenu />
        </header>
    );
}

export default Header