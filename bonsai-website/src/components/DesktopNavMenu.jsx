const productListItem = [
    { productName: "Bonsai Workflow", description: "Look professional, win more clients and manage your business from one place" }, { productName: "Bonsai Tax", description: "Track expenses, maximize tax-writeoffs, and estimate taxes without the headache" },
    { productName: "Bonsai Cash", description: "Manage your money with a no-fee business account" }
];

const bonsaiWorkflowSubMenu = [
    {menuName: "Invoices", description: ""},
    {menuName: "Proposals", description: ""},
    {menuName: "Contracts", description: ""},
    {menuName: "Client CRM", description: ""},
    {menuName: "Forms & Automations", description: ""},
    {menuName: "Time Tracking", description: ""},
    {menuName: "Accounting", description: ""},
    {menuName: "Task Tracking", description: ""}
];

const templateListItems = [
    {
        templateName: "Contract Templates",
        icon: "./images/contract_icon.svg"
    },
    {
        templateName: "Proposal Templates",
        icon: "./images/proposals_icon.svg"
    },
    {
        templateName: "Invoice Templates",
        icon: "./images/invoice_icon.svg"
    },
    {
        templateName: "Agreement Templates",
        icon: "./images/agreement_icon.svg"
    },
    {
        templateName: "Quotes Templates",
        icon: "./images/quote_icon.svg"
    },
    {
        templateName: "Scope of Work Templates",
        icon: "./images/scope_of_work_icon.svg"
    },
    {
        templateName: "Brief Templates",
        icon: "./images/brief_icon.svg"
    }
];

function DesktopNavMenu() {
    const desktopNavItems = ["Product", "Template", "Pricing", "Reviews"];

    return (
        <nav className="flex gap-16 max-lg:hidden text-base">

            <ul className="flex items-center gap-8">
                {desktopNavItems.map((desktopNavItem, index) => {
                    return (
                        <li key={index} className="group/nav-items text-[#4c4d5f] flex items-center gap-2 py-2 cursor-pointer relative">
                            {desktopNavItem}

                            {(desktopNavItem === "Product" || desktopNavItem === "Template") && (
                                <img className="h-4" src="./images/angle-down-solid-full.svg" alt="dropdown icon" />
                            )}

                            {desktopNavItem === "Product" && (
                                <ProductItem />
                            )}

                            {desktopNavItem === "Template" && (
                                <TemplateItem />
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


function ProductItem() {
    return (
        <div className="hidden w-md bg-white group-hover/nav-items:block absolute top-full -translate-x-1/2 z-40">
            {productListItem.map((productItem, index) => {
                return (
                    <div key={index} className="group/workflow-arrow-icon group/workflow-submenu flex justify-between items-center hover:bg-gray-300 p-4 relative">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl">
                                {productItem.productName}
                            </h3>
                            <p className="text-base">
                                {productItem.description}
                            </p>
                        </div>

                        {productItem.productName === "Bonsai Workflow" && (
                            <img className="h-6 rotate-270 hidden group-hover/workflow-arrow-icon:block" src="./images/angle-down-solid-full.svg" alt="arrow icon" />
                        )}

                        {productItem.productName === "Bonsai Workflow" && (
                            <BonsaiWorkflowSubMenu />
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function BonsaiWorkflowSubMenu () {
    return (
        <div className="bg-white hidden grid-cols-2 group-hover/workflow-submenu:grid absolute left-full w-xl z-50">
            {bonsaiWorkflowSubMenu.map((subMenu, index) => {
                return (
                    <div key={index}>
                        <span>
                            {subMenu.menuName}
                        </span>
                    </div>
                );
            })}
        </div>
    );
}

function TemplateItem() {
    return (
        <div className="hidden w-md bg-white group-hover/nav-items:block absolute top-full z-40">
            <ul>
                {templateListItems.map((listItem, index) => {
                    return (
                        <li key={index} className="group/template-icon flex items-center justify-between gap-2 hover:bg-gray-300 p-4">
                            <span className="flex items-center gap-2">
                                <img src={listItem.icon} alt="template icon" />
                                <span>{listItem.templateName}</span>
                            </span>
                            <img className="hidden group-hover/template-icon:block h-6 rotate-270" src="./images/angle-down-solid-full.svg" alt="arrow icon" />
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}